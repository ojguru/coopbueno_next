import { Global } from '@emotion/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import globalStyle from 'styles/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
