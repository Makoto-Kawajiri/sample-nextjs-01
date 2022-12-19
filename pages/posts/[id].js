import { Layout } from "../../components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/post";
import util from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({postData}) {
  return (
    <Layout>
      <article>
        <h1 className={util.headingX1}>{postData.title}</h1>
        <div className={util.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  )
}