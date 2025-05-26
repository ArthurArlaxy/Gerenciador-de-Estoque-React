import { useState } from "react"
import { ItemsLoader } from "../loaders/ItemsLoader"

export function NewItem(){
    const [name, setName] = useState("") 
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const { addItem } = ItemsLoader()
    

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        addItem(name,Number(quantity),Number(price),category,description)
        setName("")
        setQuantity("")
        setPrice("")
        setCategory("")
        setDescription("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <section className="inputsContainer">
                <div className="inputs">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" required value={name} onChange={(ev) => setName(ev.target.value)}/>
                </div >
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
                    <select id="category" required value={category} onChange={(ev) => setCategory(ev.target.value)}>
                        <option value="" disabled>Qual categoria</option>
                        <option value="eletronicos">Eletronicos</option>
                        <option value="roupas">Roupas</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="livros">Livros</option>
                    </select>
                </div>
            </section>
            <textarea name="Description" id="description" rows="10" placeholder="faça uma breve descrição" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>

            <button className="btnConfirmation">Salvar</button>
        </form>
    )
}