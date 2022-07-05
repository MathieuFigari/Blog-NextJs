import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from "next/link"


export default function Blog(props) {

    
  return (
    <div className="container">
        <h1 className={styles.h1}>Bienvenue sur le Blog</h1>
            <p className={styles.p}>Voici les articles</p>
    

    <main>
    <div className={styles.grid}>
        {

            props.articles.map(art => (

                <div key={art.id} className={styles.card}>
                <h2>{art.title} </h2>
                <legend>{art.title}</legend>
                <Link href={`/Blog/${art.id}`}><a>Lire cet Article</a></Link>
                </div>

            ) )

            
        }

          


          </div>
    </main>
    </div> 
  )
}



export async function  getStaticProps(){
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const articles = await data.json();
  
  
  
    return{
      props: {
        articles
      }
    }
  }