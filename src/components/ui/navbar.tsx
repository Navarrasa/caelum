import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar flex w-auto justify-center items-center bg-[var(--azul-escurecido)] p-3 rounded-2xl">
      <ul className="flex gap-8 text-xl">
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/">Início</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/sobre">Sobre Nós</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </nav>  
  );
}

export default Navbar;
