'use client'
import React, {useState, useEffect} from 'react';
import {ImagesData} from './ImagesData.jsx';
import Modal from './Modal.jsx';
import styles from '/styles/moments.module.css'

function MomentsDetailed() {

  const [imageDetail, setImageDetail] = useState({});
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log('closed')
    setModal(false)
  }

  // Add or remove the 'active-modal' class when the modal state changes
  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('active-modal');
    };
  }, [modal]);

  const handleClickImage = (imageDetail) => {
    setImageDetail(imageDetail)
    setModal(true)
  }

  return (
    <>
      <div className={styles.MomentsDetailed}>
        <div className={styles.title}>enjoy the little things</div>
        <div className={styles.moments_images}>
          {ImagesData.map((val, key) => (
              <div className={styles.moments_card}>
              <div className={styles.content}
              onClick={() => handleClickImage(val)}>
                <img className={styles.moment_image_center} src={val.image} alt="Moment"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        imageDetail = {imageDetail}
        handleClickImage ={handleClickImage}
        modal = {modal}
        toggleModal = {toggleModal}
      />
    </>
  )

}

export default MomentsDetailed;