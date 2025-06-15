import { Outlet } from 'react-router';
import { NavBar, Conteudo } from '../../Components';


const LayoutPadrao = () => {
    return (
        <>
            <NavBar />
            <Conteudo>
                <Outlet />
            </Conteudo>
        </>
    )
}

export { LayoutPadrao };