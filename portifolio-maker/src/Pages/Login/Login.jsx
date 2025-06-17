import { Link } from "react-router";
import Img2 from '../../Images/img2.jpg'

const Login = () => {
    return (
        <section className="min-h-screen flex items-center justify-center 
        bg-gradient-to-r from-purple-900 from-10% to-purple-500 to-90% via-50%
        to sky-900">
            <div className="flex shadow-2xl">
                <form className="flex flex-col items-center justify-center text-center p-20 gap-8
                bg-white rounded-2xl
                
                xl:rounded-tr-none xl:rounded-br-none">
                    <h1 className="text-5xl font-bold">Bem vindo</h1>

                    <div className="flex flex-col text-2xl text-left gap-1">
                        <span>Email</span>
                        <input type="email" className="rounded-md p-1 border-2 outline-none
                         focus:border-violet-400 focus:bg-slate-50" />
                    </div>

                    <div className="flex flex-col text-2xl text-left gap-1">
                        <span>Senha</span>
                        <input type="password" className="rounded-md p-1 border-2 outline-none
                         focus:border-violet-400 focus:bg-slate-50" />
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" className="" />
                        <span className="text-base">Lembrar-me da Senha</span>
                    </div>

                    <button className="px-10 py-2 text-2xl text-white bg-violet-800 rounded-md
                    hover:bg-purple-700 transition-colors duration-300">Login
                    </button>

                    <p className="text-2xl">Não tem uma conta? <Link className="font-bold underline-offset-1 hover:text-gray-500"
                        to="/">Cadastra-se!
                    </Link>
                    </p>
                </form>
                <img src={Img2} alt="" className="w-[450px] object-cover
                xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"/>
            </div>

        </section>
        
    );
};

export { Login };