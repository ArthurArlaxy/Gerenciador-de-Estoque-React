import { useParams } from "react-router-dom"
import { ItemsLoader } from "./ItemsLoader"

export function ItemLoader(){
    const { items } = ItemsLoader()
    const { itemId } = useParams()
    
    const findItem = items.find(item => item.id === +itemId)
    
    return findItem
}