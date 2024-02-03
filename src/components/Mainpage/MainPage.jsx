import ThemeList from '../ThemeList/ThemeList.jsx';
import styles from '../../styles/pages.module.css';




export default function MainPage() {

    return (
        <div className={styles.wrapper}>
            <p>Выбор темы</p>
            <ThemeList></ThemeList>
        </div>

    )
}
