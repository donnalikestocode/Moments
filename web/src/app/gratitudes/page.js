'use client'

import React, {useEffect, useState} from 'react';
import GratitudeCard from './GratitudeCard.jsx'
import {GratitudeData} from './GratitudeTestData.jsx'
import styles from '/styles/gratitudes.module.css'
import { database } from "../../../firebase/firebase.js";
import {
  collection,
  getDocs
} from "firebase/firestore";


function Gratitudes() {

  const [gratitudes, setGratitudes] = useState(GratitudeData);

  useEffect(() => {

    // async function fetchGratitudes() {
    //   const data = []
    //   const querySnapshot = await getDocs(collection(database, "gratitudes"))
    //   querySnapshot.forEach((doc) => {
    //     data.push(doc.data())
    //   });

    //   setGratitudes(data)
    // }

    // fetchGratitudes();

  },[])
  return (
    <div className={styles.gratitudes}>
      <div className={styles.title}>Collection of gratitudes</div>
      <div className={styles.gratitudes_gallery}>
        {gratitudes.map((val,key) => (
          <GratitudeCard gratitude={val}/>
        ))}
      </div>
    </div>
  )
}

export default Gratitudes;