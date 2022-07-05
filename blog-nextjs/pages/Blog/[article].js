import styles from '../../styles/Home.module.css'

export default function article(props) {


console.log(props);
  return (
    <div className="container">
       <h1 className={styles.h1}>{props.currentList.title}</h1>
            <p className={styles.p}>{props.currentList.title}</p>
    </div>
  )
}

export async function getStaticProps(context){

    const myArticle = context.params.article

    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const preData = await data.json();

    

    const currentList = preData.find(art => art.id.toString() === myArticle)

    

    return{
        props: {
            currentList: currentList
        }
    }

   
}

export async function getStaticPaths(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const myData = await data.json();


    const paths =  myData.map(item => ({
        params: {article: item.id.toString()}
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