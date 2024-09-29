import { Button } from "@/components/ui/button";

export default function HeroBlock() {
  return (
    <section className="container max-w-xl mx-auto flex-col py-20 justify-center items-center bg-[url('/img/bg-hero.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="w-full font-[Raleway] text-[73.34px] font-bold leading-[73.34px] text-center">
        Drive Solar <br />
        Make Life Easier <br />
        Connect
      </h1>
      <div className="w-full flex justify-center">
        <Button>Get in Touch</Button>
      </div>
    </section>
  );
}
