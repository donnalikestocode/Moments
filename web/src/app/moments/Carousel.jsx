import React, {useState, useEffect} from 'react';
import {ImagesData} from './ImagesData';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import styles from '/styles/carousel.module.css'

function Carousel({imageDetail, handleClickImage }) {

  const [image, setImage] = useState(imageDetail.image);
  const [caption, setCaption] =useState(imageDetail.caption)
  const [index, setIndex] =useState(imageDetail.index)
  const [date, setDate] = useState(imageDetail.date)


  useEffect(() => {
      setImage(imageDetail.image)
      setCaption(imageDetail.caption)
      setIndex(imageDetail.index)
      setDate(imageDetail.date)
  }, [index, caption, image, date, imageDetail])

  const rightIndex = (currIndex) => {

    if (currIndex < ImagesData.length-1) {
      handleClickImage(ImagesData[currIndex+1])
    }
  }

  const leftIndex = (currIndex) => {
    if (currIndex > 0) {
      handleClickImage(ImagesData[currIndex-1])
    }
  }

  return(
    <div className={styles.carousel}>
      <div className={styles.left_button} onClick={() => leftIndex(index)}>  <KeyboardArrowLeftOutlinedIcon/></div>
        <div className={styles.carousel__main}>
          <div className={styles.carousel_date}>{date}</div>
          <img className={styles.carousel__img} src={image} alt="Carousel"></img>
          <div className={styles.carousel__caption}>{caption}</div>
        </div>
      <div className={styles.right_button} onClick={() => rightIndex(index)}> <KeyboardArrowRightOutlinedIcon /></div>
    </div>
  )
}

export default Carousel;