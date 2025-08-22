import './styles/Card.css'
export default function Card({text, width, height, className}) {

    return (
        <div className={`visual-card ${className}`} style={{width : `${width}`, height : `${height}`}}>
            <p className="heading">
                 {text}
            </p>
            
        </div>

    )
}