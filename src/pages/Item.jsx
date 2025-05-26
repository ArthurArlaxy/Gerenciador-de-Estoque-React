
import { Link } from "react-router-dom";
import { ItemLoader } from "../loaders/ItemLoader";
import { CardItem } from "../components/Card";
import { ItemsLoader } from "../loaders/ItemsLoader";

export function Item(){
    const item = ItemLoader()
    const { removeItem } = ItemsLoader()

    return(
        <>
            <section className="mainUpdateSection">
                <h2>{item.name}</h2>
                <nav>
                    <Link  to="/itens"><button className="btnExcluir" onClick={() => removeItem(item.id)}>Excluir</button></Link>
                    <Link to={`/itens/update/${item.id}`}><button >Atualizar</button></Link>
                </nav>
            </section>
            <section className="cardsContainer">
                <CardItem text={`Categoria: ${item.category}`}/>
                <CardItem text={`Quantidade em estoque: ${item.quantity}`}/>
                <CardItem text={`Preço: R$${item.price.toFixed(2)}`}/>
            </section>
            <p className="description">{item.description}</p>
            <section className="dates">
                <p>{`Cadastrado em: ${item.date}`}</p>
                <p>{`Atualizado em: ${item.updateDate}`}</p>
            </section>
        </>
    )
}