import styles from './themecard.module.css';

export default function ThemeCard(props) {
    return (
        <a href="#">
            <div className={styles.wrapper} style={{ backgroundImage: `url(${props.image})` }} >
                <div div className={styles.foo} >
                    <p>{props.name}</p>
                    <p>{props.length}</p>
                </div>
            </div >
        </a>
    )
}