import { useEffect, useState } from 'react'
import WordCloud from 'react-d3-cloud'
import Header from 'components/Header'
import ReturnBtn from 'components/ReturnBtn'
import Title from 'components/Title'

const Skills = () => {
  const languages = [
    { text: 'C/C++', value: 1000 },
    { text: 'Objective-C', value: 200 },
    { text: 'Swift', value: 200 },
    { text: 'kotlin', value: 100 },
    { text: 'Java', value: 1000 },
    { text: 'Jasmin', value: 600 },
    { text: 'PHP', value: 1000 },
    { text: 'python', value: 50 },
    { text: 'ruby', value: 10 },
    { text: 'perl', value: 40 },
    { text: 'lisp', value: 5 },
    { text: 'Occam2', value: 100 },
    { text: 'Z80/Assembly', value: 100 },
    { text: '680x0/Assembly', value: 150 },
    { text: 'Javascript', value: 1000 },
    { text: 'Typescript', value: 1500 },
    { text: 'twig', value: 500 },
    { text: 'HTML', value: 1500 },
    { text: 'CSS', value: 1500 },
    { text: 'LaTeX', value: 500 },
  ]
  const oss = [
    { text: 'MS-DOS', value: 2000 },
    { text: 'Human-68k', value: 1000 },
    { text: 'FreeBSD', value: 1000 },
    { text: 'Linux', value: 4000 },
    { text: 'Windows', value: 1000 },
    { text: 'macOSX', value: 1000 },
    { text: 'iOS', value: 100 },
    { text: 'Android', value: 50 },
    { text: 'PDOS', value: 50 },
  ]

  const frameworks = [
    { text: 'CokePHP', value: 1050 },
    { text: 'React', value: 1000 },
    { text: 'jQuery', value: 1000 },
    { text: 'Xlinx', value: 500 },
  ]
  const data = [...languages, ...oss, ...frameworks]

  const [displaied, setDisplay] = useState(false)
  const [redrow, setRedrow] = useState(false)
  useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <div>
      <Header />
      <Title />
      <div className="skill-content">
        これまでの業務で使用した言語/OS/フレームワークを WordCloud 表示
      </div>
      {/* <div className='skill-content'>
        <button
          onClick={() => {
            setRedrow(!redrow)
          }}
        >
          BTN
        </button>
      </div> */}
      {displaied && (
        <div className="skill-wordcloud">
          <WordCloud
            data={data}
            height={300}
            font="Helvetica"
            onWordMouseOver={() => {
              setRedrow(!redrow)
            }}
          />
        </div>
      )}
      <ReturnBtn />
    </div>
  )
}
export default Skills
