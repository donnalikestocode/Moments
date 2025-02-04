'use client';
import React, { useEffect } from "react";
import { signIn } from 'next-auth/react'
import { UserAuth } from "/context/AuthContext.js"
import styles from '/styles/login.module.css'
import { useRouter } from 'next/navigation'


function Login() {

  const router = useRouter();

  const { user, googleSignIn, logout, signInWithGoogleRedirect } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      router.push('/')

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      {!user ?
        (
          <div className={styles.main} >
            <div className={styles.box}>
              <h1 className={styles.title}>moments</h1>
              <button className={styles.button} onClick={handleSignIn}>Log in with Google</button>
              <p className={styles.subtitle}>Don't have an account?</p>
              <button className={styles.button}  >Sign Up</button>
            </div>

            <p className={styles.quote}> “Enjoy the little things, for one day you may look back and realize they were the big things.” </p>
            <p className={styles.author}>Robert Brault</p>

          </div>
        ):<></>
      }
    </>
  )
}

export default Login;