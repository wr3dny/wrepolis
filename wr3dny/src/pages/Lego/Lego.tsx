
import { LegoWishlis } from '../../const/lego'
import styles from './Lego.module.css'

export const Lego = () => {
    return (
        <div className={styles.container}>
            {LegoWishlis.map((set, index) => (
                <div key={index} className={styles.card}>
                    <a href={set.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src={set.image} alt={set.setNumber.toString()} className={styles.img} />
                    </a>
                </div>
            ))}
        </div>
    );
};