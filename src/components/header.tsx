import { Navbar } from "@/components/ui/navbar";
import caelumLogo from "@/assets/logo.png";
import userImg from "@/assets/user.png";

export function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-[var(--azul-escuro)] p-2">
        <div className="flex w-11/12 items-center justify-between p-4">
          <div className="relative flex items-center justify-center">
            <img src={caelumLogo.src} alt="Caelum Logo" className="w-full h-auto" />
            <h1 className="absolute text-2xl font-bold gradient-hover transform hover:scale-120 transition duration-300 ease-in-out">
            Caelum
            </h1>
          </div>
          <Navbar />
          <div className="flex items-center gap-2">
              <img src={userImg.src} alt="User" className="w-8 h-8 rounded-full text-white" />
              <a href="#" className="transform hover:scale-110 cursor-pointer hover:underline duration-300 ease-in-out">Criar Conta</a>
          </div>
        </div>
    </header>
  );
}

export default Header;