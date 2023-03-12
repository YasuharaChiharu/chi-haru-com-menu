import Head from 'next/head'
import Link from 'next/link'

const Top = () => {
  return (
    <div>
      <Head>
        <title>C.H.I - 計算機と人の間に</title>
        <meta name="description" content="C.H.I WebPage" />
        <link rel="icon" href="/chi.png" />
      </Head>
      <h1> C.H.I </h1>
      <h2>計算機と人の間に</h2>
      <div className="main">
        <p>
          ソフトウエアで計算機と人を結びつける(Computer Human
          Interface)のがC.H.Iの仕事です。
        </p>
        <p>PCアプリ, Webアプリ その他何でもご相談ください。</p>
      </div>
      <Link href="/" replace>
        <h3 className="BackLink">戻る</h3>
      </Link>
    </div>
  )
}
export default Top
