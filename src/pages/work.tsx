import Link from 'next/link'

const Work = () => {
  return (
    <div>
      Work
      <Link href="/" replace>
        <h3 className="BackLink">戻る</h3>
      </Link>
    </div>
  )
}

export default Work
