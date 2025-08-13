import React, { useEffect } from 'react';

export default function TextFall({ color, content }) {
    const textList = [];
    const text = content.split('\n').join('').trim();
    for (let i = 0; i < text.length; i += 60) {
        textList.push(
            text.slice(i, i + 60)
        );
    }
    useEffect(() => {
        const cols = document.querySelectorAll('.matrix-column');
        cols.forEach((el, idx) => {
            const randIdx = Math.floor(Math.random() * textList.length);
            el.setAttribute('data-content', textList[randIdx] ?? '');
        });
    }, [content]);
    return (
        // <!-- From Uiverse.io by whoisyourdeadie --> 

        <div className="matrix-container" style={{ 'background': color }}>
            <div className="matrix-pattern">
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
                <div className="matrix-column"></div>
            </div>
        </div>
    )


}