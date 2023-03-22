import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/iphoneApp.module.css'
import Header from 'components/Header'
import ReturnBtn from 'components/ReturnBtn'
import Title from 'components/Title'

const IphoneApp = () => {
  type AppInfoType = {
    title: string
    icon: string
    description: string
    url: string
  }

  const AppInfo = (props: AppInfoType) => {
    const { title, icon, description, url } = props
    return (
      <div className={styles.app}>
        <Image
          className={styles.appImg}
          src={icon}
          alt={title}
          width={100}
          height={100}
        />
        <div className={styles.h2}>{title}</div>
        <p className={styles.appP}>{description}</p>
        {url ? (
          <Link
            className={styles.appA}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            AppStore
          </Link>
        ) : (
          <div className={styles.appN}>AppStore</div>
        )}
      </div>
    )
  }

  const appList: AppInfoType[] = [
    {
      title: '今日ニャン歳？',
      icon: 'appIcon/catAge.png',
      description:
        '2010年9月リリース 猫の生年月日から、人間換算の年齢を計算します。iOS2.0に対応、最新OSに未対応により削除',
      url: '',
    },
    {
      title: '神器羅針盤',
      icon: 'appIcon/jingi.png',
      description:
        '世界中どこにいても三種の神器が今どの方向にあるかを表示します。2021年6月リリース',
      url: 'https://apps.apple.com/jp/app/神器羅針盤/id1571603819',
    },
    {
      title: 'じゃんけんアシスタント',
      icon: 'appIcon/janken.png',
      description:
        'AppleWatchで、ジャンケンの次に出す手を提案してくれます。2021年5月リリース',
      url: 'https://apps.apple.com/th/app/じゃんけんアシスタント/id1568054019',
    },
    {
      title: '男は読経！女も読経！',
      icon: 'appIcon/dokyo.png',
      description:
        'いつでもどこでも、AppleWatchで般若心経を唱えることができます。2021年7月リリース',
      url: 'https://apps.apple.com/th/app/男は読経-女も読経/id1574287143',
    },
  ]

  return (
    <div>
      <Header />
      <Title />
      <h1 className={styles.h1}>iPhoneアプリ一覧</h1>
      <div className={styles.appList}>
        {appList.map((app, i) => (
          <AppInfo
            key={i}
            title={app.title}
            icon={app.icon}
            description={app.description}
            url={app.url}
          />
        ))}
      </div>
      <ReturnBtn />
    </div>
  )
}
export default IphoneApp
