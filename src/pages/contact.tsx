import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      Contact
      <Link href="/" replace>
        <h3 className="BackLink">戻る</h3>
      </Link>
    </div>
  )
}
export default Contact
