import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Top App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpeg" />
        <meta property="og:locale" content="en_En" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
