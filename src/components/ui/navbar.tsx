import Link from "next/link";

export function Navbar() {

  return (
    <nav className="navbar flex w-auto justify-center items-center p-3 rounded-2xl">
      <ul className="flex gap-8 text-xl">
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/">Início</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="#IDservicos">Serviços</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="#IDabout">Sobre Nós</Link>
        </li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out">
          <Link href="#contact">Contato</Link>
        </li>
      </ul>
    </nav>  
  );
}

export default Navbar;
