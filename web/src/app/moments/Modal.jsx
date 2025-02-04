import React from 'react';
import Carousel from './Carousel'
import styles from '/styles/modal.module.css'

function Modal ({imageDetail, handleClickImage, modal, toggleModal}) {

  return (

    <>
    {modal && (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className = {styles.modalContent}>
        <Carousel
          imageDetail = {imageDetail}
          handleClickImage ={handleClickImage}
          />
          <button className={styles.closeModal} onClick={toggleModal}>
          X
          </button>
      </div>
    </div>
  )}
  </>

  )
}

export default Modal