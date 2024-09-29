import ContactForm from "./components/ContactForm";
import Earnings from "./components/Earnings";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import HeroBlock from "./components/HeroBlock";
import HowItWorks from "./components/HowItWorks";
import Promote from "./components/Promote";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/bg-hero.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <HeroBlock />
      </div>
      <Promote />
      <HowItWorks />
      <Earnings />
      <FAQ />
      <ContactForm />
    </>
  );
}
