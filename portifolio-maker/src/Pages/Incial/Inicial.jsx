const Inicial = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Portfólio Maker!</h1>
        <p className="text-lg text-gray-700 mb-8">Crie seu portfólio de forma fácil e rápida.</p>
        <a
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
            Começar
        </a>
        </div>
    );
}

export { Inicial };