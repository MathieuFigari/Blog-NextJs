import styles from '../../styles/Home.module.css'


export default function user(props) {

    const user = props.currentUser

  return (
    <div className="container">

<table className={styles.table}>
        <thead>
            <tr>{user.name}</tr>
            <tr>Username : {user.username}</tr>
        </thead>

          <tbody className={styles.bodyTable}>
            
              
                <tr>Username : {user.username}</tr>
                <tr>Email : {user.email}</tr>
                <tr>Site Web : {user.website}</tr>
                <tr>Téléphone : {user.phone}</tr>
              
            
          </tbody>
        </table>
      
    </div>
  )
}

export async function getStaticProps(context){

    const myUser = context.params.user

    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    const preData = await data.json();

    

    const currentUser = preData.find(user => user.id.toString() === myUser)

    

    return{
        props: {
            currentUser: currentUser
        }
    }

   
}

export async function getStaticPaths(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    const myData = await data.json();


    const paths =  myData.map(user => ({
        params: {user: user.id.toString()}
    }))

    return {
        // paths: [
        //     {
        //         params: { liste: "words"}
        //     }
        // ],
        paths,
        fallback: false
    }
}