import { Link } from "react-router-dom"
import styles from "./List.module.css"


export function List({ title,items }){
    return(
        <table className={styles.itemsContainer}>
            <thead className={styles.list}>
                <tr>
                    <th>{title}</th>
                    <th>Qtd.</th>
                    <th>ações</th>
                </tr>
            </thead>
            <tbody>
                {items.length != 0 ? items.map(item => 
                    <tr className={styles.list} key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td><Link to={`/itens/${item.id}`}><button>Ver</button></Link></td>
                    </tr>
                ): <tr className="addItemText"><td >Adicione itens no estoque</td></tr> }
            </tbody>
        </table>
    )
}

export function ListItems({ items,func }){

    return(
        <table className={styles.itemsContainer}>
            <thead className={styles.list}>
                <tr>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.length != 0 ? items.map(item => 
                    <tr className={styles.list} key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.category}</td>
                        <td>{item.date}</td>
                        <td>
                            <div className={styles.actions}>
                                <Link to={`/itens/${item.id}`}><button >Ver</button></Link>
                                <Link><button className="btnExcluir" onClick={()=> func(item.id)}>Excluir</button></Link>
                                <Link to={`/itens/update/${item.id}`}><button >Atualizar</button></Link>
                            </div>
                        </td>
                    </tr>
                ): <h2 className="addItemText">Adicione itens ao estoque</h2>} 
            </tbody>
        </table>
    )
}