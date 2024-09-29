import Earnings from "./components/Earnings";
import FAQ from "./components/FAQ";
import HeroBlock from "./components/HeroBlock";
import Promote from "./components/Promote";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <Promote />
      <Earnings />
      <FAQ />
    </>
  );
}
