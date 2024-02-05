import styles from './wordcard.module.css';

export default function WordCard(props) {
    return (

        <div className={styles.word_string}>
            <input type="checkbox"></input>
            <div className={styles.word_cell}>
                <span>{props.english}</span>
            </div>
            <div className={styles.word_cell}>
                <span>{props.russian}</span>
            </div>
            <div className={styles.word_cell}>
                <span>{props.transcription}</span>
            </div>
        </div>


    )
}
