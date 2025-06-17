import { Link } from "react-router";

const NavBar = () => {
    return (
        
        <header>
            <nav className="flex justify-between items-center w-full h-16
             mx-auto py-2 bg-gray-800 text-white">
                <div className=" p-4 text-2xl font-bold">
                        <Link className="hover:text-gray-500" to="/">Portfólio Maker</Link>
                </div>

                <ul className="flex px-2.5 flex-row md: flew-col gap-3.5 text-2xl"> 
                    <li>
                        <Link className="hover:text-gray-500" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-500" to="#">Sobre</Link>
                    </li>
                    <li>
                       <Link className="hover:text-gray-500" to="#">Projetos</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-500" to="#">Contato</Link>
                    </li>
                </ul>

                <div className="flex-row  text-2xl">
                    <Link className="hover:text-gray-500" to="Login">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                         </svg>
                        </Link>
                </div>

            </nav>
        </header>
    );
};

export { NavBar };