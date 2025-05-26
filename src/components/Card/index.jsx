import styles from "./Card.module.css"

export function Card({ text, number = null  }){
    return(
        <div className={styles.card}>
            <p>{text}</p>   
            <h3>{number}</h3>
        </div>
    )
}

export function CardItem({ text }){
    return(
        <div className={styles.cardItem}>
            <p>{text}</p>   
        </div>
    )
}

