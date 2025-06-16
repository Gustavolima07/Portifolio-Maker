import { Outlet } from 'react-router';
import { NavBar, Conteudo, Footer } from '../../Components';


const LayoutPadrao = () => {
    return (
        <>
            <NavBar />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Footer />

        </>
    )
}

export { LayoutPadrao };