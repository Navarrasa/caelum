import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
