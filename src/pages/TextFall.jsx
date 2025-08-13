import React, { useEffect } from 'react';

export default function TextFall({ color, content }) {
    const textList = [];
    const text = content.split('\n').join('').trim();
    for (let i = 0, j = 0; i < 6; i++, j += 60) {
        textList.push(
            text.slice(j, j+60)
        );
    }
    useEffect(() => {
        const cols = document.querySelectorAll('.matrix-column');
        cols.forEach((el,idx) => {
            if( idx % 2 === 0) {
                el.setAttribute('data-content', textList[1] ?? '');
            }
            else if( idx % 3 === 0) {
                el.setAttribute('data-content', textList[2] ?? '');
            }
            else if( idx % 4 === 0) {
                el.setAttribute('data-content', textList[3] ?? '');
            }
            else if( idx % 5 === 0) {
                el.setAttribute('data-content', textList[4] ?? '');
            }
            else {
                el.setAttribute('data-content', textList[0] ?? '');
            }
        });
    }, [content]);
    return (
        // <!-- From Uiverse.io by whoisyourdeadie --> 
    <>
    <div className="matrix-container" style={{ background: color }}>
    <div className="matrix-pattern">
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
  </div>
  <div className="matrix-pattern">
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
  </div>
  <div className="matrix-pattern">
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
  </div>
  <div className="matrix-pattern">
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
  </div>
  <div className="matrix-pattern">
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
    <div className="matrix-column"></div>
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
</>
    );
}