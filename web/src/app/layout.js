'use client'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '/config/theme.tsx';
import createEmotionCache from '/config/createEmotionCache.tsx';
import localFont from 'next/font/local'
import { AuthContextProvider, UserAuth } from "/context/AuthContext.js";

const clientSideEmotionCache = createEmotionCache();
const myFont = localFont({ src: '/fonts/AnticDidone-Regular.ttf' })

import Login from "./Login.jsx"
import Home from "./home/page"

export default function RootLayout ({children}) {

  const emotionCache = clientSideEmotionCache;

  return (

    <html>
      <CacheProvider value={emotionCache}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta charset="utf-8" />
        </head>

        <ThemeProvider theme={theme}>
          <AuthContextProvider>
          <body className={myFont.className}>
            <Login/>
            <Home children={children}/>
          </body>
          </AuthContextProvider>
        </ThemeProvider>

      </CacheProvider>
    </html>
  )
}