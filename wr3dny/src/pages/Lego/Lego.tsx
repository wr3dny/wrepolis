import { LEGO } from "../../const/lego"
import styles from './Lego.module.css'

export const Lego = () => {
    return (
        <div>
        {LEGO.map((set, index) => (
            <div key={index} >
                <div className={styles.img}/>
                <div>{set.set_number}</div>
                <a href={set.url}>View Set</a>
            </div>
        ))}
    </div>
    )
} 