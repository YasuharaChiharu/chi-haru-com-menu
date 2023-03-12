import Header from 'components/Header'
import ReturnBtn from 'components/ReturnBtn'
import Title from 'components/Title'

const Work = () => {
  return (
    <div>
      <Header />
      <Title />
      <div className="work">
        <div className="work-title">Work</div>
        <ul>
          <li>
            <div className="work-classify">組み込みファームウェア</div>
            <ul>
              <li>業務用デジタルカメラ制御ファーム&nbsp;(組み込みLinux/C++)</li>
              <li>ワンセグ制御ファーム&nbsp;(組み込みLinux/C)</li>
              <li>Felicaリーダライタファーム&nbsp;(OSなし/C++)</li>
              <li> Arduinoサーボ制御&nbsp;(OSなし/C)</li>
              <li>その他 組み込みOS移植、組み込みJavaChip開発 &nbsp; 等々</li>
            </ul>
          </li>
          <li>
            <div className="work-classify">デバイスドライバ</div>
            <ul>
              <li>ネットワークドライバ(Linux(C)/Windows(C)/MacOSX(C++))</li>
              <li>専用ハードウエア用ドライバ(MacOSX/C++)</li>
            </ul>
          </li>
          <li>
            <div className="work-classify">PCアプリ</div>
            <ul>
              <li>画像処理ソフト(Windows/VC++,MMX)</li>
              <li>クレーン制御シミュレータ(Windows/VC++)</li>
              <li>動画編集ソフト(MacOSX/Obj-C)</li>
              <li>USBデバイステストアプリ(Windows/VC++)</li>
              <li>デジタルサイネージ(Windows/VC++)</li>
            </ul>
          </li>
          <li>
            <div className="work-classify">スマホアプリ</div>
            <ul>
              <li>iPhone向けFX取引(iOS/Obj-C)</li>
              <li>iPhone向け株取引(iOS/Obj-C)</li>
              <li>iPad向け株取引(iOS/Obj-C)</li>
              <li>ドライブレコーダー(iOS/Obj-C)</li>
              <li>農業支援アプリ(Android/Java)</li>
              <li>動画編集アプリ(Android/iOS[Unity]/C#)</li>
            </ul>
          </li>
          <li>
            <div className="work-classify">Webアプリ</div>
            <ul>
              <li>医療用求人サイト(PHP+PostgreSQL)</li>
              <li>ファイル交換管理サイト(CakePHP+MySQL)</li>
              <li>社内向けグループウエア(Anguler2)</li>
              <li>社内向けグループウエア(NextJS/AWS)</li>
            </ul>
          </li>
        </ul>
      </div>
      <ReturnBtn />
    </div>
  )
}

export default Work
