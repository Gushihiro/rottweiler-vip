import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Rotweiller Protection Services</title>
      </Head>
      <h2>
        We are a Black and Veteran owned business established in 2014 with the vision of providing Security, 
        Personal Protection, and Escorts to meet the needs of our client(s), while helping the United States Government preserve and protect our borders through 
        anti-terrorism and counter-terrorism measures.
      </h2>
    </Layout>
  )
}

export default Home
