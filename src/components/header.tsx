"use client";
import { Navbar } from "@/components/ui/navbar";
import BasicMenu from "@/components/ui/mobileMenu";
import caelumLogo from "@/assets/logo.png";
import userImg from "@/assets/user.png";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

export function Header() {
  
  const isMobile = useMediaQuery('(max-width: 639px)', { noSsr: true });

  return (
    <header className="w-full flex justify-center items-center bg-[var(--azul-claro-escuro)] p-2 text-[var(--text-color)]">
      <div className="flex w-full items-center justify-between p-4">
        {/* Logo */}
        <div className="relative flex items-center justify-center w-40 h-16">
          <Image 
          src={caelumLogo.src} 
          alt="Caelum Logo" 
          priority
          sizes="(max-width: 639px) 100vw, 200px"
          fill
          className="object-contain"
          />
          <h1 className="absolute text-2xl font-bold gradient-hover transform hover:scale-120 transition duration-300 ease-in-out">
            Caelum
          </h1>
        </div>

        {/* Desktop Navbar & Tablet */}
        {!isMobile && <Navbar />}

        {/* Mobile Menu */}
        {isMobile ? (
          <BasicMenu />
        ) : (
          <div className="flex items-center gap-2">
            <Image 
            src={userImg.src} 
            alt="User" 
            priority
            className="w-8 h-8 rounded-full" 
            width={40}
            height={40}
            />
            <a href="#" className="transform hover:scale-110 cursor-pointer hover:underline duration-300 ease-in-out">
              Criar Conta
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
