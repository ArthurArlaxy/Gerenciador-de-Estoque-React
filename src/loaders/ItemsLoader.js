import { useState } from "react"


export function ItemsLoader(){
    const [items, setItems] = useState(() =>{
        const storedItems = localStorage.getItem("stock-items")
        if (!storedItems || storedItems === "undefined"){
            return []
        }
        const itemsLoads = JSON.parse(storedItems)
        return itemsLoads
    })

    const addItem = ( name, quantity, price, category, description) =>{
        const id = Math.floor(Math.random()*100000)
        const date = new Date().toLocaleDateString("pt-BR")
        const updateDate = date
        const item = {id,name, quantity, price,category, date, updateDate, description }
        setItems(state =>{
            const newItems = [item,...state]
            localStorage.setItem("stock-items", JSON.stringify(newItems))
            return newItems
        })
    }
    
    const removeItem = (id) =>{
        const confirmado = confirm(`Deseja mesmo excluir ${items.find(item => item.id === id).name}`)
        if (!confirmado){
            return 
        }
        setItems(state => {
            const newItems = state.filter(item => item.id !== id)
            localStorage.setItem("stock-items", JSON.stringify(newItems))
            return newItems
        })
    }
    
    const updateItem = (id,name, quantity, price, category, description ) => {
        const updateDate = new Date().toLocaleDateString("pt-BR")
        setItems(state => {
            const newItems = state.map(item => item.id === id ? {
            ...item,
            name,
            quantity,
            price,
            category,
            updateDate,
            description
        }
            :item)
        
        localStorage.setItem("stock-items", JSON.stringify(newItems))
        return newItems
        })
    }

    return { items , addItem, removeItem, updateItem}
}

