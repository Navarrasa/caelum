import HeroBanner from "@/components/ui/heroBanner";
import HeroTransition from "@/components/herotransition";

export function Main() {
  return (
    <main className="flex flex-col items-center justify-around gap-5 w-full">
      <HeroBanner />
      <HeroTransition />
    </main>
  );
}

export default Main;
