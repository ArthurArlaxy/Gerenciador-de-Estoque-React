import { NavLink, Outlet } from "react-router-dom";

export function MainLayout(){
    return(
        <>
            <header>
                <h2> 📦React Arthur Stock</h2>
                <nav>
                    <NavLink className="link mainNavigation" to="/">Início</NavLink>
                    <NavLink className="link mainNavigation" to="/itens">Itens</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Feito com React e React Router, por Arthur Albuquerque </p>
            </footer>
        </>
    )
}