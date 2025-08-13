import { Link } from "react-router-dom";
import poems from "./poems.js";
import Header from "./Header.jsx";
import TextFall from "./TextFall.jsx";
import "./styles/Poems.css"
import "./styles/TextFall.css";
import { useRef, useState } from "react";

export default function Poems() {
    const poemCards = [
        { color: "142, 249, 252", },
        { color: "142, 252, 204", },
        { color: "142, 252, 157", },
        { color: "215, 252, 142", },
        { color: "252, 252, 142", },
        { color: "252, 208, 142", },
        { color: "252, 142, 142", },
        { color: "252, 142, 239", },
        { color: "204, 142, 252", },
        { color: "142, 202, 252", }
    ];
    if (poems && Object.keys(poems).length > 0) {
        Object.keys(poems).forEach((key, index) => {
            if (index >= poemCards.length) return;
            poemCards[index].title = key;
            poemCards[index].content = poems[key];
        });
    }

    const [hovered, setHovered] = useState(null);
    const [current, setCurrent] = useState(0); // 当前卡片索引
    const total = 10; // 卡片总数
    // 切换到下一个卡片
    const next = () => setCurrent((prev) => (prev + 1) % total);
    // 切换到上一个卡片
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

    const start = useRef({ x: 0, y: 0, locked: null });
    const dragging = useRef(false);
    const moveEnough = useRef(false);
    const downTime = useRef(0);
    const [dir, setDir] = useState('-');
    const THRESHOLD = 1; // 阈值,过滤抖动

    const getDirection = (dx, dy) => {
        if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return null;
        const horiz = Math.abs(dx) > Math.abs(dy);
        if (horiz) {
            return dx > 0 ? 'right' : 'left';
        } else {
            return dy > 0 ? 'down' : 'up';
        }
    }

    const onPointerDown = (e) => {
        // e.currentTarget.setPointerCapture?.(e.pointerId);
        e.currentTarget.setPointerCapture?.(e.pointerId);
        // window.addEventListener('pointermove', onPointerMove);
        // window.addEventListener('pointerup', onPointerUp);
        start.current = { x: e.clientX, y: e.clientY, locked: null };
        dragging.current = true;
        downTime.current = Date.now();
        setDir('-');

        
    }

    const onPointerMove = (e) => {
        if (start.current.x === 0 && start.current.y === 0) return;
        const dx = e.clientX - start.current.x;
        const dy = e.clientY - start.current.y;

        const direction = getDirection(dx, dy);
        if (direction) {
            setDir(direction);
        }

        if (Math.abs(dx) > THRESHOLD || Math.abs(dy) > THRESHOLD) {
            moveEnough.current = true;
        }

        console.log('Direction:', direction, 'dx:', dx, 'dy:', dy);
    }

    const onPointerUp = () => {
        if (!dragging.current) return;
        if (moveEnough.current) {
            console.log(dir,current);
            if (dir === 'left') {
                next();
            }
            else if (dir === 'right') {
                prev();
            }
        }
        // window.removeEventListener('pointermove', onPointerMove);
        // window.removeEventListener('pointerup', onPointerUp);  

        dragging.current = false;
        start.current = { x: 0, y: 0, locked: null };
        setDir('-');
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
        setCurrent(index % total);
    };

    return (
        <>
            <Header />
            {/* From Uiverse.io by ilkhoeri */}
            <div className="wrapper">
                <div className="inner" style={{ "--quantity": total, transform: `perspective(1000px) rotateX(-15deg) rotateY(-${current * 36}deg)` }}>
                    {/* 生成卡片 */}
                    {poemCards.map((poem, index) => (
                        index < 10 && (
                            <div
                                className="card"
                                key={index}
                                style={{ "--index": index, "--color-card": poem.color, touchAction: 'none' }}
                                onMouseEnter={() => { handleSelect(); setHovered(index); setCurrent(index); }}
                                onMouseLeave={() => { handleDeselect(); setHovered(null); }}
                                onPointerDown={(e) => onPointerDown(e)}
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
                            <li key={idx}>
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