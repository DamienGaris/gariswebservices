import Head from 'next/head'
import Header from '../components/Header'
import Cover from '../components/Cover'
import HomeContent1 from '../components/HomeContent1'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Garis Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/g.ico" />
      </Head>
      <Header/>
      <Cover />
      <HomeContent1 />
      <Pricing />
    </div>
  )
}
