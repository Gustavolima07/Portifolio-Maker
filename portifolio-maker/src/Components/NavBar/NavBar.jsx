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

            </nav>
        </header>
    );
};

export { NavBar };