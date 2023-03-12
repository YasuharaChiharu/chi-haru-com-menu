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
          Interface)は、計算機と人を結びつけるのソフトウエアを作っています。
        </div>

        <p>設立：平成１８年２月</p>
        <p>代表：安原知春</p>
        <div>
          組み込みファームウェア、Webアプリ、スマホアプリとと様々なソフトウエアを開発しています。
        </div>
      </div>
      <ReturnBtn />
    </div>
  )
}
export default Top
