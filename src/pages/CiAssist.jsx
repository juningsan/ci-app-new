import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

import Header from "./Header";  
import Contentlist from "./contentlist";
import yunlist from "./pingshui";


function CiPaiSelector({ ciPais, currentCiPai, setCurrentCiPai }) {
    function onSelect(val) {
        setCurrentCiPai(val);
    };
    return (
        <div className="px-5 mt-3 h-[9rem] overflow-y-auto">
        <ul className="grid grid-cols-4 gap-4">
            {ciPais.map((val, key) => (
                <li key={key} className="text-center bg-white shadow rounded px-4 py-3 hover:bg-gray-100 text-gray-800 hover:text-gray-600 cursor-pointer" onClick={() => onSelect(val)}>
                        {val}                  
                </li>
            ))}
        </ul>   
        </div>      
    )

}

export default function CiAssist() {
    const ciPais = ['浣溪沙', '暗香', '菩萨蛮', '蝶恋花', '如梦令', '忆江南', '清平乐', '虞美人', '临江仙', '西江月', '水调歌头'];
    const [currentCiPai, setCurrentCiPai] = useState('浣溪沙');
    const currentContent = Contentlist[currentCiPai] || '';
    const [inputs, setInputs] = useState({});
    const [pingzeErrors, setPingzeErrors] = useState({});
    const [yunFlags, setYunFlags] = useState({});
    const [yunShu, setYunShu] = useState(1);
    const [yunZi, setYunZi] = useState([]);

    const handleInputChange = (index, event) => {
        const value = event.target.value;
        setInputs(prev => ({ ...prev, [index]: value }));
        checkPingze(value, index);
    };
    const checkPingze = (input, index) => {
        const patternLine = currentContent.split('\n')[index];
        if (!patternLine) return;

        const chars = input.trim().split('');
        const cleanedLine = patternLine
            .replace(/（.*?）/g, '');       // 移除“（韵）”等标注
        //   .replace(/[，。、！？]/g, ''); // 移除标点符号
        const pattern = cleanedLine.trim().split('');
        const errorMarks = [];

        // 新增：记录韵脚字索引位置
        const yunFlagLine = [];
        // 通过正则匹配所有带有“（韵）”标注的字的位置
        // 先去除标点，保留“（韵）”标注
        const rawLine = patternLine.trim().split('');
        // 遍历 rawLine，判断每个字后面是否紧跟“（韵）”
        // for (let i = 0, j = 0; i < rawLine.length; i++) {
        //     const char = rawLine[i];
        //     // 判断当前字符是否为“（”，并且后续字符为“韵）”
        //     if (char === '（' && rawLine.slice(i, i + 3) === '（韵）') {
        //         // 标记前一个字为韵脚
        //         if (j > 0) {
        //             yunFlagLine[j - 1] = true;
        //         }
        //         i += 3; // 跳过“（韵）”
        //     } else {
        //         // 普通字，标记为false默认
        //         if (yunFlagLine[j] === undefined) {
        //             yunFlagLine[j] = false;
        //         }
        //         j++;
        //     }
        // }

        for (let i = 0; i < rawLine.length; i++) {
            const char = rawLine[i];
            const nextThree = rawLine.slice(i + 1, i + 4).join('');
            if (nextThree === '（韵）') {
                yunFlagLine.push(true); // 当前字是韵脚


                // 接下来的“（韵）”跳过
                i += 3;
            }
            else if (char === '（' && rawLine.slice(i, i + 3).join('') === '（韵）') {
                i += 2; // 兼容保险处理
            }
            else {
                yunFlagLine.push(false); // 普通字
            }
        }

        const yunZiLine = [];
        for (let i = 0; i < yunFlagLine.length; i++) {
            if (yunFlagLine[i]) {
                if (input[i]) yunZiLine.push(input[i]);
            }
        }
        if (yunZiLine.length > 0) {
            setYunZi(prev => ({ ...prev, [index]: yunZiLine }));
        }

        for (let i = 0; i < pattern.length; i++) {
            const expected = pattern[i];
            const char = chars[i];
            if (!char) {
                errorMarks.push(false);
                continue;
            }
            if (!checkPz(char, expected)) {
                errorMarks.push(true);
            } else {
                errorMarks.push(false);
            }
        }



        setPingzeErrors(prev => ({ ...prev, [index]: errorMarks }));
        setYunFlags(prev => ({ ...prev, [index]: yunFlagLine }));
    };
    useEffect(() => {
        console.log('总韵字数组:', yunZi);
    }, [yunZi]);

    const checkYun = (word, index) => {
        const referenceYunZi = yunZi[index]?.[0];
        if (!referenceYunZi) return true; // 没有参考韵字，不判断

        for (const x in yunlist) {
            const yunSet = yunlist[x];
            const containsRef = yunSet.some(obj => obj.word.includes(referenceYunZi));
            const containsWord = yunSet.some(obj => obj.word.includes(word));
            if (containsRef && containsWord) {
                return true; // 两个字都在同一个韵部中 ✅ 押韵
            }
        }

        return false; // 没找到同韵 ❌
    };

    const checkPz = (word, pz) => {
        if (pz !== '平' && pz !== '仄') return true;
        let output = false;
        for (const x in yunlist) {
            if (pz === '平' && (x === 'shangping' || x === 'xiaping')) {
                if (yunlist[x].some(obj => obj.word.includes(word))) {
                    output = true;
                }
            }
            if (pz === '仄' && (x === 'qusheng' || x === 'shangsheng' || x === 'rusheng')) {
                if (yunlist[x].some(obj => obj.word.includes(word))) {
                    output = true;
                }
            }
        }
        if(output === false) {
            let count = 0;
            for (const x in yunlist) {
                if(!yunlist[x].some(obj => obj.word.includes(word) )){
                    count++;
                    }
            }
            if(count === 5) output = true; 
        }
    
        return output;
    };

    return (
        <>
        <Header />
        <div className="max-w-4xl mx-auto">
            <div className="pt-20 flex justify-center font-noto text-xl">
                选择词牌以开始
            </div>
            <CiPaiSelector ciPais={ciPais} currentCiPai={currentCiPai} setCurrentCiPai={setCurrentCiPai} />
            <div className="px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">当前词牌：{currentCiPai}</h2>
                {
                    typeof currentContent === 'string' && currentContent.trim() !== '' ? (
                        <div className="bg-white shadow p-6 rounded leading-loose">
                            {currentContent.split('\n').map((val, index) => {
                                // 先去除标点符号，保留“（韵）”标注，用于遍历
                                const rawLine = val;
                                const spans = [];
                                for (let i = 0; i < rawLine.length; i++) {
                                    const char = rawLine[i];
                                    if (char === '（' && rawLine.slice(i, i + 3) === '（韵）') {
                                        // skip the marker itself
                                        continue;
                                    }
                                    // 判断当前字后是否紧跟“（韵）”
                                    const isYun = rawLine.slice(i + 1, i + 4) === '（韵）';
                                    spans.push(
                                        <span key={i} className={isYun ? 'text-blue-600' : ''}>
                                            {char}
                                        </span>
                                    );
                                    if (isYun) {
                                        i += 3; // 跳过“（韵）”
                                    }
                                }
                                return (
                                    <div key={index} className="line-container mb-6">
                                        <div className="whitespace-pre-line">{spans}</div>
                                        <div>
                                            <input
                                                type="text"
                                                value={inputs[index] || ''}
                                                onChange={e => handleInputChange(index, e)}
                                                className="w-full mt-2 px-3 py-2 border rounded focus:outline-none focus:ring bg-gray-50"
                                            />
                                        </div>
                                        <div className="mt-2 text-lg tracking-wide">
                                            {(inputs[index] || '').split('').map((char, i) => (
                                                <span
                                                    key={i}
                                                    className={
                                                        pingzeErrors[index]?.[i]
                                                            ? 'text-red-600'
                                                            : yunFlags[index]?.[i] && checkYun(char, index)
                                                            ? 'text-green-600'
                                                            : ''
                                                    }
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-500">暂无内容</p>
                    )
                }
            </div>
            <footer className="w-screen absolute bottom-7 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500 pt-6">
                © 2025 Eliot Hongtuo · 以词为舟，泛古今
            </footer>
        </div>
        </>
    )
}