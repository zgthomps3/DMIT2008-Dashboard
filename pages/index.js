import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout pageName={"Homepage"}>
      <p>This is the main body</p>
    </Layout>
  )
}
