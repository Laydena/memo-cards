import styles from './themelist.module.css';

import data from '../../data/Data.json';
import ThemeCard from '../ThemeCard/ThemeCard';


export default function ThemeList() {

    return (
        <div className={styles.themesWrapper}>
            {Object.keys(data).map((item, index) => (
                <ThemeCard
                    name={data[item].name}
                    length={data[item].words.length + ` слов`}
                    image={data[item].image}
                    key={index} className="">

                </ThemeCard>
            ))}
        </div>
    )
}