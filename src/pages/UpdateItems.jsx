import { useState } from "react"
import { ItemsLoader } from "../loaders/ItemsLoader"
import { ItemLoader } from "../loaders/ItemLoader"
import { Link, useNavigate } from "react-router-dom"

export function UpdateItem(){

    const item = ItemLoader()
    const { updateItem } = ItemsLoader()
    const navigation = useNavigate()

    const [name, setName] = useState(item.name) 
    const [quantity, setQuantity] = useState(item.quantity)
    const [price, setPrice] = useState(item.price)
    const [category, setCategory] = useState(item.category)
    const [description, setDescription] = useState(item.description)


    const handleSubmit = (ev) =>{
        ev.preventDefault()
        updateItem(item.id,name,Number(quantity),Number(price),category,description)
        navigation("/itens")
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Atualizar - {item.name}</h2>
                <section className="inputsContainer" >
                    <div className="inputs">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" required value={name} onChange={(ev) => setName(ev.target.value)}/>
                    </div>
                            <div className="inputs">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" id="quantity" required value={quantity} onChange={(ev) => setQuantity(ev.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="price">Preço</label>
                        <input type="number" id="price" required value={price} onChange={(ev) => setPrice(ev.target.value)}/>
                    </div>
                    <div className="inputs">
                        <label htmlFor="category">Categoria</label>
                        <select className="inputs" id="category" required value={category} onChange={(ev) => setCategory(ev.target.value)}>
                            <option value="" disabled>Qual categoria</option>
                            <option value="eletronicos">Eletronicos</option>
                            <option value="roupas">Roupas</option>
                            <option value="alimentos">Alimentos</option>
                            <option value="livros">Livros</option>
                            <option value="material">Material</option>
                        </select>
                    </div>
                </section>
            <textarea name="Description" id="description" rows="10" placeholder="faça uma breve descrição" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>

            <button className="btnConfirmation">Salvar</button>
        </form>
    )
}