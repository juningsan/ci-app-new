import { Link } from "react-router-dom";
import poems from "./poems.js";
import Header from "./Header.jsx";
import TextFall from "./TextFall.jsx";
import "./styles/Poems.css"
import "./styles/TextFall.css";
import { useRef, useState, useEffect } from "react";

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
    const [poemCards, setPoemCards] =  useState(poems && Object.keys(poems).length > 0 ? Object.keys(poems).map((key, index) => ({
        title: key,
        content: poems[key],
        color: colors[index % colors.length]
    })) : []);
    const [cardOffset, setCardOffset] = useState(0);


    const [hovered, setHovered] = useState(null);
    const [current, setCurrent] = useState(0); // 当前卡片索引
    const total = poemCards.length > 10 ? poemCards.length : 10; // 卡片总数
    // const [cycle, setCycle] = useState(0);
    // 切换到下一个卡片
    // const next = () => setCurrent((prev) => (prev + 1) % total);
    const next = () => setCurrent((prev) => (prev + 1));
    // 切换到上一个卡片
    // const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const prev = () => setCurrent((prev) => (prev - 1));

    useEffect(() => {
        if (Math.abs((current % total) / total) > 0.2 && Math.abs((current % total) / total) < 0.3 || Math.abs((current % total) / total) > 0.7 && Math.abs((current % total) / total) < 0.8) {
            console.log('Point reached a special position!', Math.abs((current % total) / total));
            if (Math.abs((current % total) / total) > 0.2 && Math.abs((current % total) / total) < 0.3) {
                if ((current % total) / total > 0) {
                    let currentIdx = current;
                    let count = 0;
                    
                    while ((currentIdx % total) / total < 0.3) {
                        currentIdx++;
                        count++;
                    }
                    setCardOffset((prev) => prev + count);
                    if (currentIdx !== current) {
                        let currentCards = [];
                        for(let i = 0; i < poemCards.length; i++){
                            if(i < count) currentCards.push(poemCards[i - count + poemCards.length])
                            else currentCards.push(poemCards[i-count]);
                        }
                        console.log(currentCards);
                        setPoemCards(currentCards);
                        setCurrent(currentIdx);
                    }
                }
                else {

                }
                
            }
            else if (Math.abs((current % total) / total) > 0.7 && Math.abs((current % total) / total)) {
                if ((current % total) / total > 0) {

                }
                else {

                }
            }
        };
    console.log('Current card index:', current, Math.abs((current % total) / total));
}, [current, poemCards]);

const start = useRef({ x: 0, y: 0, locked: null });
const dragging = useRef(false);
const moveEnough = useRef(false);
const dir = useRef('-');
const activeIndex = useRef(null);
const THRESHOLD = 8; // 阈值,过滤抖动

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
    // window.addEventListener('pointermove', onPointerMove);
    // window.addEventListener('pointerup', onPointerUp);
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

const onPointerUp = () => {
    if (!dragging.current) return;
    if (moveEnough.current) {
        if (dir.current === 'left') {
            next();
        } else if (dir.current === 'right') {
            prev();
        }
    } else {
        // 视为点击：在松手时才执行选择/旋转，避免按下时布局变化打断 click 合成
        if (activeIndex.current != null) {
            gotoCard(activeIndex.current);
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


const gotoCard = (index) => {
    const inner = document.querySelector('.inner');
    if (inner) {
        inner.style.animation = 'none'; // 移除动画
        // 触发重绘
        //   void inner.offsetWidth;
        //   inner.style.animation = ''; // 恢复动画
    }
    index = index - cardOffset < 0 ? index + cardOffset + total : index + cardOffset;
    // 使用函数式更新，避免闭包里的 current 过期；并将取模归一到 [0, total)
    console.log('gotoCard: ', index, cardOffset);
    setCurrent((prev) => {
        if (!Number.isFinite(total) || total <= 0) return prev;
        const currentMod = ((prev % total) + total) % total; // 始终非负
        let offset = index - currentMod;
        if (offset > total / 2) offset -= total;    // 走最短路径（顺时针）
        if (offset < -total / 2) offset += total;   // 走最短路径（逆时针）
        return prev + offset;
    });
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
                            onPointerUp={() => onPointerUp()}
                            onPointerCancel={() => onPointerUp()}
                        >
                            <Link to={`/poems/${encodeURIComponent(poem.title)}`} className="text-blue-500"
                                onClick={(e) => {

                                    if (moveEnough.current) {

                                        e.preventDefault();
                                        moveEnough.current = false; // 重置移动状态
                                    }
                                }}>
                                <div className="img relative">
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
        </div>

        <div className="relative z-100">
            <button onClick={prev}>上一张</button>
            <button onClick={next}>下一张</button>

        </div>
        <div className="relative max-w-4xl mx-auto p-4 mt-10 z-100">
            {/* <h1 className="text-4xl font-bold mb-8">诗词列表</h1> */}
            <ul className=" flex justify-center items-center space-x-4">
                {poems && Object.keys(poems).length > 0 ? (
                    Object.keys(poems).map((x, idx) => (
                        <li key={idx} className="w-[10px]">
                            <Link to={`/poems/${encodeURIComponent(x)}`} className="text-blue-500 hover:no-underline" onMouseEnter={() => gotoCard(idx)}>
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