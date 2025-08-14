function ServicesInfo() {

    return(
        
        <section id="IDabout" className="flex flex-col bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400 text-white w-full h-auto sm:p-14 p-4 gap-4">
            <div className="flex flex-col mt-16">
                <div className="sm:text-3xl text-2xl font-bold mb-2 drop-shadow-lg text-center sm:text-start">
                    <h2>O que é o Hacker dos Sonhos?</h2>
                </div>
                <div className=" text-xl w-full sm:w-6/12 text-center sm:text-justify">
                    <p>
                        Hacker dos Sonhos visa desenvolver uma tecnologia que, por meio de sensores biométricos e estímulos controlados
                        durante o sono, induza emoções específicas para tratar traumas e bloqueios emocionais, unindo neurociência, psicologia, tecnologia e ética
                    </p>
                </div>
            </div>
            <div className="flex flex-col c sm:items-end">
                <div className="sm:text-3xl text-2xl font-bold mb-2 mt-8 drop-shadow-lg text-center sm:text-justify">
                    <h2>Quem é a Caelum?</h2>
                </div>
                <div className="text-xl w-full sm:w-6/12 text-justify">
                    <p>
                        A Caelum propõe o desenvolvimento de soluções terapêuticas inovadoras por meio da análise de parâmetros fisiológicos, 
                        como batimentos cardíacos e padrões respiratórios, para induzir emoções específicas durante o sono. Esta técnica visa facilitar 
                        o tratamento de traumas e bloqueios emocionais ao permitir intervenções terapêuticas em níveis profundos do subconsciente. 
                        A proposta sugere a criação de uma nova profissão, 
                        o Hacker dos Sonhos, que integra conhecimentos de neurociência, psicologia e tecnologia para promover saúde mental e bem-estar.
                    </p>
                </div>
            </div>
            <div className="flex flex-col mb-16 mt-8 sm:items-start">
                <div className="sm:text-3xl text-2xl font-bold mb-2 drop-shadow-lg text-justify">
                    <h2>Entre em contato conosco!</h2>
                </div>
                <div className=" text-xl w-full sm:w-6/12 text-justify">
                    <p>
                        Para mais informações sobre nossos serviços ou para agendar uma consulta, entre em contato conosco através do nosso site ou pelas redes sociais.
                        <br />
                        <br />
                        <span className="sm:text-bold text-xl transform hover:scale-120 transition duration-300 ease-in-out">caelum@gmail.com</span>
                        <br />
                        <span className="sm:text-bold text-xl transform hover:scale-120 transition duration-300 ease-in-out">19 9999-9999</span>
                    </p>
                </div>
            </div>
        </section>
    
    );
}

export default ServicesInfo;