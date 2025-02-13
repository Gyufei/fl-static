export const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";
export const isProduction = process.env.NODE_ENV === "production" && !isPreview;
// export const isProduction = true;

export function WithApiHost(path: string) {
  const prodHost = `https://api.tadle.com`;
  const devHost = `https://preview-api.tadle.com`;
  const host = isProduction ? prodHost : devHost;
  return `${host}${path}`;
}

export function WithDataApiHost(path: string) {
  const prodHost = `https://apis.tadle.com`;
  const devHost = `https://preview-apis.tadle.com`;
  const host = isProduction ? prodHost : devHost;
  return `${host}${path}`;
}

export function WithCDN(path: string) {
  const prodCDN = `https://cdn.tadle.com`;
  const devCDN = `https://preview-cdn.tadle.com`;
  const cdn = isProduction ? prodCDN : devCDN;
  return `${cdn}${path}`;
}

export function WithWss(path: string) {
  const devWss = "wss://preview-wss.tadle.com" + path;
  const prodWss = "wss://wss.tadle.com" + path;
  const wss = isProduction ? prodWss : devWss;
  return wss;
}
