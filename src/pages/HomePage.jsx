import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ciCollection from './poems.js';
import Header from './Header.jsx';
import Card from './Card.jsx';

const poems = [
    {
        title: '《菩萨蛮》',
        content: `海连时浊时清水，推移爱恨扶一醉。自傲五千年，吹呵障眼前。\n始知夷狄昧，泫下秦王泪。何日九州平，匏瓜悬中庭。`
    },
    {
        title: '《浣溪沙》',
        content: `霸业浇离五丈原，龙吟星野按烽烟，碣石西去魏武鞭。\n烂煮兵戈邀琼露，不辞明主落玉盘。月缘涩谷入蜀天。`
    },
    {
        title: '《踏莎行》',
        content: `月系高枝，花含早露。两三宿鸟逢人语。逢人语道圣明朝，一团红日凭空举。\n具遣风云，随支天物。仰兹民力开今古。古今时变汇于兹，任君南北东西路。`
    }
];

export default function HomePage() {
    const [imgUrl, setImgUrl] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // 1) Try local cache first
        const cached = localStorage.getItem('bingWallpapers');
        const staleAt = localStorage.getItem('bingWallpapers:staleAt');
        const now = Date.now();

        if (cached && staleAt && now < Number(staleAt)) {
            const urls = JSON.parse(cached);
            setImgUrl(urls);
            // Warm the browser cache in the background
            urls.forEach(u => { const i = new Image(); i.src = u; });
            return; // skip network fetch
        }

        // 2) Fetch fresh, then persist
        fetch('http://localhost:3001/api/bing-image')
            .then(res => res.json())
            .then(data => {
                const urls = data.images.map(img => "https://www.bing.com" + img.url);
                setImgUrl(urls);

                // Save for later sessions (e.g. valid for 24h)
                localStorage.setItem('bingWallpapers', JSON.stringify(urls));
                localStorage.setItem('bingWallpapers:staleAt', String(now + 24 * 60 * 60 * 1000));

                // Warm the cache
                urls.forEach(u => { const i = new Image(); i.src = u; });
            })
            .catch(err => {
                // Fallback to local/public assets (these will be cacheable by the browser too)
                const urls = ['/assets/img1.jpg', '/assets/img2.jpg', '/assets/img3.jpg'];
                setImgUrl(urls);
                localStorage.setItem('bingWallpapers', JSON.stringify(urls));
                localStorage.setItem('bingWallpapers:staleAt', String(now + 24 * 60 * 60 * 1000));
                window.__bingWallpapers = urls;
                urls.forEach(u => { const i = new Image(); i.src = u; });
                console.error('壁纸加载失败', err);
            });
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/api/bing-image')
    //         .then(res => res.json())
    //         .then(data => {
    //             const urls = data.images.map(img => "https://bing.com" + img.url)
    //             setImgUrl(urls);
    //         })
    //         .catch(err => {
    //             setImgUrl(['/assets/img1.jpg', '/assets/img2.jpg', '/assets/img3.jpg']);
    //             console.error('壁纸加载失败', err)});
    // }, []);

    const prevIndex = (index + poems.length - 1) % poems.length;
    const nextIndex = (index + 1) % poems.length;

    return (
        <>
            {/* <Header /> */}
            {/* 背景图 */}
            <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[-1]">
                {/* 左侧虚化背景 */}
                <div
                    className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-center blur-sm opacity-30"
                    style={imgUrl[prevIndex] ? { backgroundImage: `url(${imgUrl[prevIndex]})` } : undefined}
                />
                {/* 中间背景 */}
                <div
                    className="absolute top-0 left-1/3 w-1/3 h-full bg-cover bg-center opacity-30"
                    style={imgUrl[index] ? { backgroundImage: `url(${imgUrl[index]})` } : undefined}
                />
                {/* 右侧虚化背景 */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full bg-cover bg-center blur-sm opacity-30"
                    style={imgUrl[nextIndex] ? { backgroundImage: `url(${imgUrl[nextIndex]})` } : undefined}
                />
                {/* 全屏暗色遮罩（可选） */}
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div onClick={() => setIndex(prevIndex)} className="fixed left-0 top-0 w-1/5 h-full z-0 cursor-pointer" />
            <div onClick={() => setIndex(nextIndex)} className="fixed right-0 top-0 w-1/5 h-full z-0 cursor-pointer" />

            {/* 主页面 */}
            <div className="flex items-center justify-center min-h-screen">
                <main className="relative z-100 overflow-hidden min-h-[80vh] max-w-[60vw] w-full bg-[rgba(253,253,245,0.5)] backdrop-blur-md shadow-xl rounded-xl px-6 py-10">

                    {/* 网站标题区 */}
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-bold mb-2">宋词札记</h1>
                        <p className="text-base text-gray-500 tracking-wide">记忆与感知的流动</p>
                    </header>

                    {/* 随机词展示区 */}

                    <section className="mb-12">
                        <article key={index} className="relative bg-[#fefcf7] border border-gray-300 shadow-inner rounded-xl p-6 md:p-8 transition-opacity duration-700 ease-in-out"
                            style={imgUrl[index] ? { backgroundImage: `url(${imgUrl[index]})` } : undefined}
                        >
                            {/* 指示箭头 */}
                            <div onClick={() => setIndex(prevIndex)} className='absolute left-4 top-1/2 -translate-y-1/2 z-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor"
                                    className="w-10 h-10 text-white/80 hover:text-white cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <div onClick={() => setIndex(nextIndex)} className='absolute right-4 top-1/2 -translate-y-1/2 z-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor"
                                    className="w-10 h-10 text-white/80 hover:text-white cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* 词内容 */}
                            <div className="absolute inset-0 bg-black/40 z-0 rounded-xl" />
                            <div key={index} className="relative flex items-center justify-center flex-col z-90 overflow-hidden transition-all duration-700 ease-out transform opacity-0 translate-y-4 animate-fadeIn">
                                <h3 className="text-xl font-bold mb-4 text-gray-200/50 text-center">{poems[index].title}</h3>
                                <p className="whitespace-pre-line text-lg leading-loose text-gray-200/50 text-center">
                                    {poems[index].content}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* 分类导航区 */}
                    <section className="mb-12">
                        <Link to='/poems' className="inline-flex items-center gap-1 text-inherit no-underline text-2xl font-semibold">词集索引
                            <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" strokeWidth={2}
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-900">
                            {
                                Object.keys(ciCollection).map((collection, idx) => (
                                    idx < 9 ?
                                        <Link key={idx} to={`/poems/${collection}`} className='mx-auto'>

                                            <Card text={collection} width={'250px'} height={'55px'} />
                                        </Link>
                                        : null
                                ))
                            }
                        </div>
                    </section>

                    {/* 最近更新区 */}
                    {/* <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">📝 最近更新</h2>
            <ul className="space-y-4">
              <li className="border-l-4 border-gray-300 pl-4">
                2025/7/25 · 《蝶恋花·梦回西湖夜泊》 by Eliot
              </li>
              <li className="border-l-4 border-gray-300 pl-4">
                2025/7/20 · 《忆江南·雨过苏堤草色新》 by Eliot
              </li>
            </ul>
          </section> */}

                    {/* 填词助手入口 */}
                    <section className="mb-16 mb-10 text-center z-100">
                        <h2 className="text-xl font-semibold mb-2">✍️ 想试试自己填一首词？</h2>
                        <Link to="/tools" className="inline-block mt-2 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                            打开填词助手
                        </Link>
                    </section>
                </main>

                {/* 页脚 */}
                <footer className="fixed z-200 bottom-4 text-center text-sm text-gray-500  pt-6">
                    © 2025 Eliot Hongtuo · 以词为舟，泛古今之思。
                </footer>
            </div>
        </>
    )
}