import Head from "next/head"
import Image from "next/image"

const name = "Mako Code";
export const siteTitle = "Next.js blog";

export const Layout = (props) => {

  const { children } = props;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src={`/images/profile.png`} alt={`プロフィール`} width={100} height={100} />
        <h1>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}