import './styles/Card.css'
export default function Card({text, width, height}) {

    return (
        <div className="visual-card" style={{width : `${width}`, height : `${height}`}}>
            <p className="heading">
                 {text}
            </p>
            
        </div>

    )
}