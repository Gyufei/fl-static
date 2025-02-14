import { dataApiFetcher } from "@/lib/api/fetcher";
import { WithCDN, WithDataApiHost } from "@/lib/api/PathMap";
import { useEffect, useState } from "react";

export enum ChainType {
  ETH = "eth",
  BNB = "bnb",
  SOLANA = "solana",
}

export const ProjectDecimalsMap: Record<string, number> = {
  xdin: 18,
  txdin: 18,
};

export interface IMarketplace {
  id: number;
  last_price: string;
  last_price_24h_ago: string;
  minimum_price: string;
  market_name: string;
  floor_price: string;
  total_vol: string;
  filled_orders: string;
  change_rate_24h: string;
  vol_24h: string;
  listed_supply: string;
  avg_bid: string;
  tge: string;
  settlement_period: string;
  trading_ends_at: string;
  all_time_high_price: string;
  initial_listing_price: string;
  active_wallets: string;
  status: string;
  market_symbol: string;
  market_catagory:
    | "offchain_fungible_point"
    | "onchain_fungible_point"
    | "onchain_nonfungible_point"
    | "point_token"
    | "future_token"
    | "token"
    | "whitelist";
  item_name: string;
  project_token_addr: string;
  token_per_item: string;
  is_fungible: boolean;
  require_collateral: boolean;
  market_place_account: string;

  projectLogo: string;
  pointLogo: string;
  chain: ChainType;
}

export function checkIsAfterTge(mpTge: string) {
  if (mpTge === "0") {
    return false;
  }

  const tgeTimeNum = Number(mpTge);
  const now = Date.now() / 1000;

  return now > tgeTimeNum;
}

export function useMarketplaces() {
  const [data, setData] = useState<Array<IMarketplace>>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function allChainFetch() {
    try {
      setIsLoading(true);
      const res = await dataApiFetcher(`${WithDataApiHost("/markets")}`);

      const allMarket = res.flat().map((m: any) => {
        const chain = m.chain_name;
        return {
          ...m,
          projectLogo: WithCDN(
            `/${chain}/images/project/${m.market_symbol}.png`,
          ),
          pointLogo: WithCDN(`/${chain}/images/point/${m.market_symbol}.png`),
          chain,
          status: m.market_symbol === "spherex" ? "offline" : m.status,
        };
      });

      setData(allMarket as Array<IMarketplace>);
      setIsLoading(false);

      return allMarket as Array<IMarketplace>;
    } catch (error) {
      setIsLoading(false);
      return [];
    }
  }

  useEffect(() => {
    allChainFetch();
  }, []);

  return {
    data,
    isLoading,
  };
}
