export function Navbar() {
  return (
    <nav className="navbar flex w-auto justify-center items-center bg-[var(--azul-escurecido)] p-3 rounded-2xl">
      <ul className="flex gap-8 text-xl">
        <li className="transform hover:scale-110 transition duration-300 ease-in-out"><a href="/">Início</a></li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out"><a href="/servicos">Serviços</a></li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out"><a href="/sobre">Sobre Nós</a></li>
        <li className="transform hover:scale-110 transition duration-300 ease-in-out"><a href="/contato">Contato</a></li>
      </ul>
    </nav>  
  );
}

export default Navbar;
