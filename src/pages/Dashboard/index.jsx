import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { ItemsLoader } from "../../loaders/ItemsLoader";
import styles from "./Dashboard.module.css"

export function Dashboard(){
    const {items} = ItemsLoader()
    return(
        <>
            <h1>Dashboard</h1>
            <section className="cardsContainer">
                <Card text="Itens Diversos" number={items.length}/>
                <Card text="Total de Itens" number={items.reduce((acc,item) => acc + item.quantity,0)}/>
                <Card text="Itens sobrando" number={items.filter(item => item.quantity >= 10).length}/>
                <Card text="Itens acabando" number={items.filter(item => item.quantity < 10).length}/>
            </section>
            <section className={styles.listContainer}>
                <List title="Itens Sobrando" items={items.filter(item => item.quantity >= 10)}/>
                <List title="Itens Acabando" items={items.filter(item => item.quantity < 10)}/>
            </section>
        </>
    )
}