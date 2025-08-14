import { VideoBackground } from "@/components/ui/video";

function mainService() {

    return (
    
        <section className="relative w-full lg:h-[650px] md:h-[500px] h-[500px] flex items-center justify-center overflow-hidden">
            {/* Vídeo de fundo */}
            <VideoBackground />

            {/* Overlay acinzentado */}
            <div className="absolute inset-0 bg-gray-900/50"></div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hacker dos Sonhos
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Uma experiência imersiva que une tecnologia e acessibilidade para
                transformar ideias em realidade.
                </p>
            </div>
        </section>

    
    );
}

export default mainService;