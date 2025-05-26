import { NavLink, Outlet } from "react-router-dom";

export function ItemsLayout(){
    return(
        <>
            <h1>Stock Items</h1>
            <nav className="itemNavigation">
                <NavLink className="link linkItems" end to="/itens">Todos os itens</NavLink>
                <NavLink className="link linkItems" to="/itens/newItens">Novo item</NavLink>
            </nav>
            <hr />
            <section>
                <Outlet/>
            </section>
        </>
    )
}