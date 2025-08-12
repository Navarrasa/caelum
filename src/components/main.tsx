import HeroBanner from "@/components/ui/heroBanner";
import HeroTransition from "@/components/herotransition";
import Services from "@/components/services";
import MainService from "@/components/mainservice";

export function Main() {
  return (
    <main className="flex flex-col items-center justify-around w-full">
      <HeroBanner />
      <HeroTransition />
      <Services />
      <MainService />
    </main>
  );
}

export default Main;
