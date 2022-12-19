// library
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// style
import styles from '../styles/Home.module.css'
import util from "../styles/utils.module.css"

// components
import { Layout } from "../components/Layout";
import { getPostsData } from "../lib/post";

export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({allPostsData}: any) {
  return (
    <Layout>
      <section className={util.headingMd}>
        <p>俺がまこだ。思い知ったか</p>
      </section>

      <div>
        {allPostsData.map(({id, title, date, thumbnail}: any) => (
          <article key={id}>
            <Link href={`/posts/${id}/`}>
              <Image src={`${thumbnail}`} alt="thumbnail" width="100" height="100" className={`${styles.thumbnailImage}`} />
              <p>hogehoge1</p>
            </Link>
            <Link href={`/posts/${id}/`} className={`${util.boldText}`}>
              {title}
            </Link>
            <br />
            <small className={`${util.lightText}`}>{date}</small>
          </article>
        ))}
      </div>
    </Layout>
  )
}
