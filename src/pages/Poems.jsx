import { Link, Navigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import poems from "./poems.js"
import Header from "./Header.jsx"
import TextFall from "./TextFall.jsx"
import Card from "./Card.jsx"
import "./styles/Poems.css"
import "./styles/TextFall.css";



export default function Poems() {
    const colors = [
        "142, 249, 252",
        "142, 252, 204",
        "142, 252, 157",
        "215, 252, 142",
        "252, 252, 142",
        "252, 208, 142",
        "252, 142, 142",
        "252, 142, 239",
        "204, 142, 252",
        "142, 202, 252"
    ];
    const [poemCards, setPoemCards] = useState(poems && Object.keys(poems).length > 0 ? Object.keys(poems).map((key, index) => ({
        title: key,
        content: poems[key],
        color: colors[index % colors.length]
    })) : []);
    const [cardOffset, setCardOffset] = useState(0);
    const navigate = useNavigate();

    const [hovered, setHovered] = useState(null);
    const [current, setCurrent] = useState(null); // 当前卡片索引
    const prevCurrent = useRef(current);
    const total = poemCards.length > 10 ? poemCards.length : 10; // 卡片总数
    // 切换到下一张卡片
    const next = () => {
        const inner = document.querySelector('.inner');
        if (inner) {
            inner.style.animation = 'none'; // 移除动画
            // 触发重绘
            //   void inner.offsetWidth;
            //   inner.style.animation = ''; // 恢复动画
        }
        setCurrent((prev) => {
            if (prev === null) return 0;
            return (prev + 1)
        });
    }
    // 切换到上一个卡片
    const prev = () => {
        const inner = document.querySelector('.inner');
        if (inner) {
            inner.style.animation = 'none'; // 移除动画
            // 触发重绘
            //   void inner.offsetWidth;
            //   inner.style.animation = ''; // 恢复动画
        }
        setCurrent((prev) => {
            if (prev === null) return 0;
            return (prev - 1)
        });
    }

    function rotateArray(arr, count) {
        if (!Array.isArray(arr) || arr.length === 0) return arr;
        const n = arr.length;
        const k = ((count % n) + n) % n; // 归一化到 [0, n)
        return arr.slice(-k).concat(arr.slice(0, -k));
    }

    useEffect(() => {
        let currentIdx = current % total;
        if (Math.abs(currentIdx / total) > 0.2 && Math.abs(currentIdx / total) < 0.3) {
            console.log('Point reached a special position!', current, Math.abs((current % total) / total));
            let count = 0;

            console.log('prev', prevCurrent.current, 'current', current)

            if (prevCurrent.current < current) {

                while (Math.abs(currentIdx / total) < 0.3) {
                    if (currentIdx > 0) {
                        currentIdx++;
                    }
                    else {
                        currentIdx--;
                    }
                    count++;
                    setCardOffset((prev) => prev + count);
                }
                if (currentIdx !== current) {
                    let currentCards = rotateArray(poemCards, count);
                    console.log(currentCards);
                    setPoemCards(currentCards);
                    setCurrent((prev) => prev + count);
                }
            }
            else {
                console.log('reversed')
                while (Math.abs(currentIdx / total) > 0.2) {
                    if (currentIdx > 0) {
                        currentIdx--;
                    }
                    else {
                        currentIdx++;
                    }
                    count++;
                    setCardOffset((prev) => prev - count);
                }
                if (currentIdx !== current) {
                    let currentCards = rotateArray(poemCards, -count);
                    console.log(currentCards);
                    setPoemCards(currentCards);
                    setCurrent((prev) => prev - count);

                }
            }
        }
        else if (Math.abs(currentIdx / total) > 0.7 && Math.abs(currentIdx / total) < 0.8) {
            console.log('Point reached a special position!', current, Math.abs((current % total) / total));
            let count = 0;
            let currentIdx = current % total;
            console.log('prev', prevCurrent.current, 'current', current)

            if (prevCurrent.current < current) {

                while (Math.abs(currentIdx / total) < 0.8) {
                    if (currentIdx > 0) {
                        currentIdx++;
                    }
                    else {
                        currentIdx--;
                    }
                    count++;
                }
                setCardOffset((prev) => prev + count);
                // setCardOffset(count);
                if (currentIdx !== current) {
                    let currentCards = rotateArray(poemCards, count);
                    console.log(currentCards);
                    setPoemCards(currentCards);
                    setCurrent((prev) => prev + count);
                }
            }
            else {
                console.log('reversed')
                while (Math.abs(currentIdx / total) > 0.7) {
                    if (currentIdx > 0) {
                        currentIdx--;
                    }
                    else {
                        currentIdx++;
                    }
                    count++;
                    setCardOffset((prev) => prev - count);
                }
                if (currentIdx !== current) {
                    let currentCards = rotateArray(poemCards, -count);
                    console.log(currentCards);
                    setPoemCards(currentCards);
                    setCurrent((prev) => prev - count);
                }
            }
        }
    }, [current, cardOffset, poemCards]);

    const gotoCard = (index) => {
        const inner = document.querySelector('.inner');
        if (inner) {
            inner.style.animation = 'none'; // 移除动画
            // 触发重绘
            //   void inner.offsetWidth;
            //   inner.style.animation = ''; // 恢复动画
        }
        console.log('index', index, 'cardOffset', cardOffset);
        setCurrent((prev) => {
            let idx = index + cardOffset;
            let offset = idx - prev;
            if (offset > total / 2) offset -= total;    // 走最短路径（顺时针）
            if (offset < -total / 2) offset += total;   // 走最短路径（逆时针）
            console.log('offset', offset);
            return prev + offset;
        });
    };

    useEffect(() => {
        console.log('prev', prevCurrent.current, 'current', current, 'offset', cardOffset)
        prevCurrent.current = current;
    }, [current, cardOffset]);

    const start = useRef({ x: 0, y: 0, locked: null });
    const dragging = useRef(false);
    const moveEnough = useRef(false);
    const dir = useRef('-');
    const activeIndex = useRef(null);
    const THRESHOLD = 2; // 阈值,过滤抖动

    const getDirection = (dx, dy) => {
        if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return null;
        const horiz = Math.abs(dx) > Math.abs(dy);
        if (horiz) {
            return dx > 0 ? 'right' : 'left';
        } else {
            return dy > 0 ? 'down' : 'up';
        }
    }

    const onPointerDown = (e, index) => {

        moveEnough.current = false;
        try {
            if (e.currentTarget.setPointerCapture) {
                e.currentTarget.setPointerCapture(e.pointerId);
            }
        } catch (err) {
            console.warn('setPointerCapture failed:', err);
        }
        start.current = { x: e.clientX, y: e.clientY, locked: null };
        dragging.current = true;
        dir.current = '-';
        activeIndex.current = index;
    }

    const onPointerMove = (e) => {
        if (start.current.x === 0 && start.current.y === 0) return;
        const dx = e.clientX - start.current.x;
        const dy = e.clientY - start.current.y;

        const direction = getDirection(dx, dy);
        if (direction) {
            dir.current = direction;
        }

        if (Math.abs(dx) > THRESHOLD || Math.abs(dy) > THRESHOLD) {
            moveEnough.current = true;
        }

    }

    const onPointerUp = (index) => {
        if (!dragging.current) return;
        if ((current % total + total) % total === index) {
            console.log('current selected');
            navigate(`/poems/${encodeURIComponent(poemCards[index].title)}`);
            return;
        }
        if (moveEnough.current) {
            if (dir.current === 'left') {
                next();
            } else if (dir.current === 'right') {
                prev();
            }
        } else {
            // 视为点击：在松手时才执行选择/旋转，避免按下时布局变化打断 click 合成
            if (activeIndex.current != null) {
                gotoCard(activeIndex.current - cardOffset);
            }
        }

        dragging.current = false;
        start.current = { x: 0, y: 0, locked: null };
        dir.current = '-';
        moveEnough.current = false;
        activeIndex.current = null;
    };


    const handleSelect = () => {
        const inner = document.querySelector('.inner');
        if (inner) inner.style.animationPlayState = 'paused';
    };

    const handleDeselect = () => {
        const inner = document.querySelector('.inner');
        if (inner) inner.style.animationPlayState = 'running';
    };

    return (
        <>
            <Header />
            {/* From Uiverse.io by ilkhoeri */}
            <div className="wrapper" style={{}}>
                <div className="inner" style={{ "--quantity": total, transform: `perspective(1000px) rotateX(-15deg) rotateY(${-current * 360 / total}deg)` }}>
                    {/* 生成卡片 */}
                    {poemCards.map((poem, index) => (
                        (
                            <div
                                className="card"

                                key={index}
                                style={{ "--index": index, "--color-card": poem.color, touchAction: 'none' }}
                                onMouseEnter={() => { handleSelect(); setHovered(index); }}
                                onMouseLeave={() => { handleDeselect(); setHovered(null); }}
                                onPointerDown={(e) => onPointerDown(e, index)}
                                onPointerMove={(e) => onPointerMove(e)}
                                onPointerUp={() => onPointerUp(index)}
                                onPointerCancel={() => onPointerUp()}
                            >
                                <Link to={`/poems/${encodeURIComponent(poem.title)}`} className="text-blue-500"
                                    onClick={(e) => {
                                        if (moveEnough.current) {

                                            e.preventDefault();
                                            moveEnough.current = false; // 重置移动状态
                                        }
                                    }
                                    }>
                                    <div className="img relative text-[#355c7d]">
                                        {poem.title}
                                        {hovered === index && (
                                            <div className="pointer-events-none absolute inset-0">
                                                <TextFall color={`rgb(${poem.color})`} content={poem.content} />
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </div>)
                    ))}
                </div>
                <div onClick={prev} className='absolute hidden md:block left-[25vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="#355c7d"
                        className="w-10 h-10 text-white/80 hover:text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div onClick={next} className='absolute hidden md:block right-[25vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="#355c7d"
                        className="w-10 h-10 text-white/80 hover:text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>


            <div className="relative max-w-[50vw] md-max-w-4xl mx-auto p-4 mt-10 md:mt-20 z-100">
                <ul className=" flex justify-center items-start space-x-1 md-space-x-4">
                    {poems && Object.keys(poems).length > 0 ? (
                        Object.keys(poems).map((x, idx) => (
                            <Link key={idx} className="flex items-center md-h-[75px] md-hover:h-[90px] py-2 
                            bg-cover hover:no-underline border-[#355c7d] border border-solid shadow rounded"
                                style={{backgroundImage: 'url(assets/bamboo-surface.jpg)'}}
                                to={`/poems/${encodeURIComponent(x)}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundImage = 'none';
                                    e.currentTarget.style.backgroundColor = `rgb(${colors[idx % colors.length]})`; gotoCard(idx)
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundImage = 'url(assets/bamboo-surface.jpg)'
                                }}
                            >

                                <li className=' text-center text-[#355c7d] bg-sky-500/20'
                                    style={{
                                        // backgroundColor: `rgb(${colors[idx % colors.length]})`,
                                        writingMode: "vertical-rl", textOrientation: "upright"
                                    }}>

                                    {x}
                                </li>
                            </Link>
                        ))
                    ) : (
                        <li>暂无词集数据</li>
                    )}
                </ul>
            </div>
        </>
    );
}