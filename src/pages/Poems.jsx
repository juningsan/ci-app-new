import { Link } from "react-router-dom";
import poems from "./poems.js";
import Header from "./Header.jsx";
import TextFall from "./TextFall.jsx";
import "./styles/Poems.css"
import "./styles/TextFall.css";
import { useState } from "react";

export default function Poems() {
    const poemCards = [
        {color: "142, 249, 252",},
        {color: "142, 252, 204",},
        {color: "142, 252, 157",},
        {color: "215, 252, 142",},
        {color: "252, 252, 142",},
        {color: "252, 208, 142",},
        {color: "252, 142, 142",},
        {color: "252, 142, 239",},
        {color: "204, 142, 252",},
        {color: "142, 202, 252",}
    ];
    if (poems && Object.keys(poems).length > 0) {
        Object.keys(poems).forEach((key, index) => {
            if (index >= poemCards.length) return; 
            poemCards[index].title = key;
            poemCards[index].content = poems[key]; 
        });
    }

    const handleSelect = () => {
      const inner = document.querySelector('.inner');
      if (inner) inner.style.animationPlayState = 'paused';
    };

    const handleDeselect = () => {
      const inner = document.querySelector('.inner');
      if (inner) inner.style.animationPlayState = 'running';
    };

  const [hovered, setHovered] = useState(null);

    return (
        <>
            <Header />
            {/* From Uiverse.io by ilkhoeri */}
            <div className="wrapper">
                <div className="inner" style={{ "--quantity": 10 }}>
                    {/* 生成卡片 */}
                    {poemCards.map((poem, index) => (
                        index < 10 && (
                        <div
                          className="card"
                          key={index}
                          style={{ "--index": index, "--color-card": poem.color }}
                          onMouseEnter={() => { handleSelect(); setHovered(index); }}
                          onMouseLeave={() => { handleDeselect(); setHovered(null); }}
                        >
                            <Link to={`/poems/${encodeURIComponent(poem.title)}`} className="text-blue-500">
                                <div className="img relative">
                                    {poem.title}
                                    {hovered === index && (
                                      <div className="pointer-events-none absolute inset-0">
                                        <TextFall color = {`rgb(${poem.color})`} content = {poem.content} />
                                      </div>
                                    )}
                                </div>
                            </Link>
                        </div>)
                    ))}


                </div>
            </div>


            <div className="max-w-4xl mx-auto p-4 mt-20">
                {/* <h1 className="text-4xl font-bold mb-8">诗词列表</h1> */}
                <ul className="flex justify-center items-center space-x-4">
                    {poems && Object.keys(poems).length > 0 ? (
                        Object.keys(poems).map((x) => (
                            <li key={x}>
                                <Link to={`/poems/${encodeURIComponent(x)}`} className="text-blue-500 hover:underline">
                                    {x}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>暂无词集数据</li>
                    )}
                </ul>
            </div>
        </>
    );
}