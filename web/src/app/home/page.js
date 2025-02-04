"use client"
import '/styles/global.css';

import Navigation from "/src/components/Navigation.jsx"
import { UserAuth } from "/context/AuthContext.js"

export default function Home({children}) {

  const { user, googleSignIn, logout } = UserAuth();

return (
  <>
    {user ?
    (<div className='App'>
        <Navigation className='nav'/>
        <div className='content'>
          {children}
        </div>
      </div>
      ):<></>
    }
  </>
  )
}