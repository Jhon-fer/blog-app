import Link from "next/link"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import styles from '../../styles/post.module.css'

export default function Post({ data }) {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.paragraph}>{data.body}</p>

          <Link href='/'><p className={styles.goBack}>Go back</p></Link>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths = data.map(({ id }) => ({ params: { id: `${id}`}}))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

