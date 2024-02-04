import styles from './wordcard.module.css';

export default function WordCard() {
    return (
        <a href="#">
            <div className={styles.wrapper} >
                <img className={styles.img} src={process.env.PUBLIC_URL + `${props.image}`}></img>
                <div div className={styles.foo} >
                    <p>{props.name}</p>
                    <p>{props.length}</p>
                </div>
            </div >
        </a >
    )
}
