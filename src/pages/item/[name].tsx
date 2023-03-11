import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

type AppProps = { name: string }
const oortApp = (props: AppProps) => {
  const {name} = props
  useEffect(() => {
    window.location.href = '/'
   },[])

  return (
    <div className='App'>
      {name}
    </div>
  )
}
export default oortApp

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: context.query }
}
