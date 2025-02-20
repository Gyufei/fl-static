import HomeBanner from "./home-banner";
import Future from "./future";
import Faqs from "./faqs";
import OutPerforms from "./outperforms";
import GetStart from "./get-start";
import ContactUs from "./contact-us";

export default function Home() {
  return (
    <div className="mx-0">
      <HomeBanner />
      <Future />
      <OutPerforms />
      <GetStart />
      <Faqs />
      <ContactUs />
    </div>
  );
}
