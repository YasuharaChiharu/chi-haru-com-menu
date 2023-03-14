import Image from 'next/image'
import Link from 'next/link'
import Header from 'components/Header'
import ReturnBtn from 'components/ReturnBtn'
import Title from 'components/Title'

const Top = () => {
  return (
    <div>
      <Header />
      <Title />
      <div className="main">
        <div>
          C.H.I(Computer Human
          Interface)は、コンピュータと人をつなぐ架け橋となるソフトウエアを開発します。
        </div>
        <p className="name">
          代表： <a href="mailto:yasu-hara@chi-haru.com">安原 知春</a>
          <Image
            src="/yasuhara.png"
            alt="YAS"
            width={30}
            height={30}
            style={{
              opacity: 0.6,
              position: 'relative',
              left: '-4px',
              top: '10px',
              transform: 'rotate(-17deg)',
            }}
          />
        </p>
        <p>居住地：東京都周辺</p>
        <p>職務経歴</p>
        <dl>
          <dt>大手メーカー</dt>
          <dd>
            5年間勤務（主にVMEボード関連のファームウェア開発・組み込みOS移植など）
          </dd>
          <dt>公益財団法人</dt>
          <dd>7年間勤務（エレクトロニクス研究室 研究員として IPA案件など）</dd>
          <dt>C.H.I</dt>
          <dd>
            平成18(2006)年 2月より開業（<Link href={'/work'}>主な開発案件</Link>
            ）
          </dd>
        </dl>
        <p>その他(外部サイト)</p>
        <div className="etc-link-frame">
          <div className="etc-link">
            <Link href={'https://github.com/YasuharaChiharu'}>GitHub</Link>
          </div>
          <div className="etc-link">
            <Link href={'https://qiita.com/chi_soft_dev'}>Qiita</Link>
          </div>
        </div>
      </div>
      <ReturnBtn />
    </div>
  )
}
export default Top
