import { ListItems } from "../components/List";
import { ItemsLoader } from "../loaders/ItemsLoader";

export function Items(){
    const {items, removeItem} = ItemsLoader()
    
    return(
        <ListItems items={items} func={removeItem}/>
    )
}