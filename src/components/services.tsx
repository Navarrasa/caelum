import { servicesData } from '@/data/services/servicesData'
import Image from 'next/image';

function Services() {

    return (
    <section id='IDservicos' className="flex w-full h-auto sm:p-8 md:p-6 p-4 bg-gradient-to-bl from-blue-600 via-blue-500 to-blue-300 text-white">
      <div className="flex flex-col items-center justify-center w-full sm:p-8 md:p-4 p-4 mb-32 mt-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
                <div
                key={service.id}
                className="relative flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                style={{ height: "400px" }} // altura mais alta
                >
                {/* Imagem de fundo */}
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover h-full w-full"
                />

                {/* Overlay acinzentado */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col justify-between items-center text-center sm:p-6 md:p-3 p-2 h-full text-white">
                    <h3 className="text-xl sm:text-3xl md:text-3xl font-bold mb-12">{service.title}</h3>
                    <p className="text-xl sm:text-2xl md:text-xl mb-12">{service.description}</p>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Services;