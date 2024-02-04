import styles from './themecard.module.css';
import FruitPage from '../Fruitpage/FruitPage.jsx';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function ThemeCard(props) {
    return (
        <Router>
            <Link to={props.link}>
                <div className={styles.wrapper} >
                    <img className={styles.img} alt={`картинка на тему "${props.name}" `} src={process.env.PUBLIC_URL + `${props.image}`}></img>
                    <div div className={styles.foo} >
                        <p>{props.name}</p>
                        <p>{props.length}</p>
                    </div>
                </div >
            </Link>
            <Routes><Route path={props.link} element={<FruitPage />} /></Routes>
        </Router>
    )
}

