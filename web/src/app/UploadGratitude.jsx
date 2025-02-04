import React, { useState, useEffect } from 'react';
import styles from '/styles/uploadgratitude.module.css'
import { database } from "../../firebase/firebase";
import {
  addDoc,
  collection
} from "firebase/firestore";


function UploadGratitude() {

  const [formData, setFormData] = useState({
    picture: null,
    gratitude:'',
    prompt:''
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  const [submittedData, setSubmittedData] = useState(null)
  const [formVisible, setFormVisible] = useState(true);
  // const [imgFormVisible, setImgFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // if an image is uploaded
    if (type === 'file') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        picture: file,
      });

      // Update the image preview
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('image-preview').src = event.target.result;
      };
      reader.readAsDataURL(file);
      // setImgFormVisible(false)
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

  };

  const handleBlur = () => {
    if (formData.prompt === '') {
      setFormData({...formData, prompt:'Today, I am grateful for'}); // Set the default text if the input is empty
    }
  };

  useEffect(() => {
    // Update the current date when the component mounts
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayNumber = currentDate.getDate();
  const year = currentDate.getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    const gratitudeText = formData.prompt || 'Today, I am grateful for';
    setSubmittedData({ ...formData, prompt: gratitudeText });
    console.log('submittedData',submittedData);
    addDoc(collection(database, 'gratitudes'), {
      date: dayOfWeek + ' ' + month + ' ' + dayNumber + ' ' + year,
      title: formData.prompt || 'Today, I am grateful for',
      caption: formData.gratitude
    })
    setFormVisible(false); // Hide the form after submission
  };

  return (
    <div className={styles.GratitudeUpload}>
      <h1 className={styles.HomeTitle}>Note to yourself:</h1>
      <div className={styles.HomeSubtitle}>
        <p className={styles.date}>{dayOfWeek} {month} {dayNumber} {year}</p>
      </div>
      <hr  className={styles.GratitudeUploadLine}
        style={{
            color: '#8B8B8B',
            backgroundColor: '#8B8B8B',
            height: .5,
            width: 450,
            borderColor : '#8B8B8B'
        }}
      />
      <div className={styles.HomeImageContainer}>
        <img className={styles.HomePic} src={'/images/Home.jpg'} alt="Today" ></img>
        <div className={styles.HomeTextOverlay}>shine like the whole universe is yours. ✨</div>
      </div>
      {formVisible && (
        <form className={styles.GratitudeUploadForm} onSubmit={handleSubmit}>

          <div className={styles.GratitudeUploadPrompt}>
            <label htmlFor="prompt"></label>
            <textarea
              type="text"
              id="prompt"
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Today, I am grateful for"
            />
          </div>
          <div className={styles.GratitudeUploadText}>
            <label htmlFor="gratitude"></label>
            <textarea
              id="gratitude"
              name="gratitude"
              value={formData.gratitude}
              onChange={handleChange}
              placeholder="write here..."
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submittedData && (
        <div className={styles.GratitudeUploadForm}>
          <div className={styles.GratitudeUploadPrompt}>{submittedData.prompt}</div>
          <div className={styles.GratitudeUploadText}>{submittedData.gratitude}</div>
        </div>
      )}
    </div>
  );
}

export default UploadGratitude