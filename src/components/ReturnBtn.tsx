import Link from 'next/link'

const ReturnBtn = () => {
  return (
    <Link href="/" replace>
      <h3 className="BackLink">戻る</h3>
    </Link>
  )
}
export default ReturnBtn
