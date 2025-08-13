import { useParams } from 'react-router-dom'
import poems from './poems'
import Header from "./Header";  

export default function PoemPage() {
  const { title } = useParams();
  const poemData = poems[title];
  const paragraphs = poemData ? poemData.split('\n\n') : [];

  if (!poemData) return <div>未找到对应词集：{title}</div>

  return (
    <>
    <Header />
    <div className="max-w-[60vw] mx-auto p-4 pt-20">
    
      <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>
      <div className="space-y-6">
        {paragraphs.map((para, idx) => (
          <div key={idx} className="leading-relaxed">
            {para.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}