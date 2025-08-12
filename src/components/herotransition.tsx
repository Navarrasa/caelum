function HeroTransition() {
  return (
    <section className="relative flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400 text-white text-center w-full h-auto">
      <div className="mt-32 mb-16 flex flex-col items-center justify-center">
        
        <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">
          Nossos Serviços
        </h2>
        
        <p className="max-w-xl text-2xl opacity-90 mb-4">
          Oferecemos uma variedade de serviços para garantir a acessibilidade digital.
        </p>
        
        <p className="text-2xl font-medium">
          Venha conferir!
        </p>
        {/* Seta de rolagem */}
        <div className="mt-10 bottom-4 animate-bounce">
          <svg
            className="w-12 h-12 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroTransition;
