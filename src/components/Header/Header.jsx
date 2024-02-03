import styles from './header.module.css';
import logo from '../../assets/images/header-logo.svg';
import userIcon from '../../assets/icons/user-icon_1.svg';
import arrowDown from '../../assets/icons/arrow_small_down.svg';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className="HeaderLogo">
                <img className={styles.logo} src={logo} alt="логотип" />
            </div>
            <nav className={styles.nav}>
                <li className={styles.li}><a className={styles.a} href="#">О нас</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Отзывы</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Контакты</a></li>
            </nav>
            <div className={styles.userPortrait}>
                <img src={userIcon} className={styles.userIcon} alt="иконка пользователя" />
                <img src={arrowDown} className={styles.arrowDown} alt="иконка пользователя" />
            </div>

        </header>
    )
}

