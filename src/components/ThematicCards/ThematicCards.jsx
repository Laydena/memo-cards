import styles from './thematiccards.module.css';
import WordCard from '../WordCard/WordCard.jsx';

import data from '../../data/Data.json';

export default function ThematicCards() {
    console.log(data.fruits.words);
    return (
        <>
            <div className={styles.title_block}>
                <button className={styles.yellow_button}>Учить</button>
                <div className={styles.theme_name}>
                    <p className={styles.title_text}>Фрукты</p>
                    <p className={styles.subtitle_text}>список слов</p>
                </div>
                <button className={styles.orange_button}>Квиз</button>
            </div>

            <div className={styles.words_list}>
                {Object.keys(data.fruits.words).map((item, index) => (
                    <WordCard
                        english={data.fruits.words[item].english}
                        russian={data.fruits.words[item].russian}
                        transcription={data.fruits.words[item].transcription}
                        key={index} className=""
                    >


                    </WordCard>
                ))}
            </div>
        </>

    )
}