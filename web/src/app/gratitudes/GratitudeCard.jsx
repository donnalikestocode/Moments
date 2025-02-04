import React from 'react';
import styles from '/styles/gratitudes.module.css'

function GratitudeCard ({gratitude}) {

  const title = gratitude.title;
  const date = gratitude.date;
  const caption = gratitude.caption;

  return(
    <div className={styles.gratitude_card}>
      <div className={styles.gratitude_card_line}></div>
      <div className={styles.gratitude_card_title}>{title}</div>
      <div className={styles.gratitude_card_caption} >
        <p className={styles.gratitude_card_caption_word}>
          {caption}
        </p></div>
      <div className={styles.gratitude_card_date}>{date}</div>
    </div>
  )
}

export default GratitudeCard;