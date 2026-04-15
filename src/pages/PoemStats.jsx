import './styles/PoemStats.css'; 

export default function PoemStats({ currentCard }) {
    const poemData = currentCard?.content;
    const paragraphs = poemData ? poemData.split('\n\n') : [];
    const titles = paragraphs.map((para, idx) => idx === 0 ? para.split('\n')[1] : para.split('\n')[0]);
    // console.log(titles);
    for (let i = 1; i < titles.length; i++) {
        if (titles[i] === '又') {
            titles[i] = titles[i - 1];
        }
    };

    const count = titles.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    let sortedEntries = Object.entries(count)
        .sort((a, b) => b[1] - a[1])

    const total = sortedEntries.reduce((acc, cur) => acc + cur[1], 0);

    let displayEntries = sortedEntries.slice(0, 5);
    let dislayTotal = displayEntries.reduce((acc, cur) => acc + cur[1], 0);
    displayEntries = displayEntries.map(([title, count],idx) => {
        return [title, count / total] ;
    });
    // displayEntries.push(['其他', 1 - dislayTotal / total]);
    console.log(displayEntries);


    return (
        <div className="poem-stats flex justify-center items-end  gap-2 overflow-hidden">
            {
                displayEntries.map(([title, count], idx) => (
                    <div key={idx} 
                    className="[container-type:inline-size] poem-stats-item  p-1 text-center hover: hover:text-xl hover:scale-125  transition-all duration-300 hover:brightness-110" style={{"flexGrow": count,"backgroundColor": `rgb(${currentCard.color})`, border: "1px solid rgb(36, 134, 19)", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
                        <p className="poem-stats-title text-[20cqw]">{title}</p>
                        <p className="poem-stats-count text-[20cqw]">{(count * 100).toFixed(1)}%</p>
                    </div>
                ))
            }
        </div>
    )
}