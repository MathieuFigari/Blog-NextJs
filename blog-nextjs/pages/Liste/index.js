import styles from '../../styles/Home.module.css'
import Link from "next/link"

export default function Users(props) {

  return (
    <>
    <h1 className={styles.h1}>La liste des Utilisateurs</h1>
    <div className={styles.users}>
{

props.users.map(user => (
  <div key={user.id} className={styles.usersCard}>
          <p>{user.username}</p>
          <Link href={`/Liste/${user.id}`}><a>Contacter</a></Link>
      </div>

))

}
      
      
      
    </div>
    </>
  )
}

export async function  getStaticProps(){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await data.json();
  
  
  
    return{
      props: {
        users
      }
    }
  }


