import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Le Blog Code.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Bienvenue sur Code.io
        </h1>

        <p className={styles.description}>
           Le blog communautaire des afficionados de développement web.
        </p>

        <div className={styles.grid}>
          <div  className={styles.card}>
            <h2>Lizez les articles </h2>
            <legend>Maximisez votre culture web</legend>
            <p>Chaque auteur tente de vous apporter le plus de valeur possible par article</p>
              <Link href="/Blog"><a>visiter le blog</a></Link>
          </div>

          <div  className={styles.card}>
            <h2>Faites un tour vers la liste de membres</h2>
            <legend>Faites vous des amis</legend>
            <p>Ajoutez invitez et discutez avec les différents membres</p>
              <Link href="#"><a>Découvrez la liste des membres</a></Link>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}