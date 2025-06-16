import { Card } from '../../Components';

import Img1 from '../../Images/Img1.png';


const Inicial = () => {
    
    return (
        <>
            <div className="App">
                <div className="h-dvw">
                    <Card tipo="inteiro" id="Home" className="mt-8 p-6 bg-rose-300  shadow-lg rounded-lg">
                        <div className="flex items-center gap-8">
                            <div className="Img flex-shrink-0">
                                <img src={Img1} alt="Menino expressando felicidade" className="w-200 h-auto rounded-lg mb-4" />
                            </div>
                            <div className='text-center'>
                                <h1 className="text-4xl font-bold ">Portfólio Maker</h1>
                                <hr />
                                <p className="text-2xl  text-gray-700 mb-4">
                                    O Portfólio Maker é uma ferramenta inovadora que permite a criação de portfólios personalizados de forma rápida e intuitiva.
                                    Com uma interface amigável, você pode adicionar suas informações, projetos e experiências profissionais em poucos cliques.
                                </p>
                            </div>
                        </div>
                    </Card>   
                </div>
            </div>
        </>
    );
}

export { Inicial };