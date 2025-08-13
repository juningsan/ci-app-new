import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './styles/Header.css'; 

export default function Header() {
    const location = useLocation();
    const path = location.pathname.split('/')[1]; 
    return (
        <>
        <div className="w-full fixed left-1/2 -translate-x-1/2 z-100 wave-container">
        <header className="max-w-4xl mx-auto mb-0 flex justify-start px-3 font-bold bg-gray-100/70 text-opacity-80 shadow">
            <Link to="/" className="pb-1 text-2xl text-gray-600 hover:text-gray-800 text-bold">宋词札记</Link>
            <nav className="flex self-end">
                <div className={path === 'poems'? 'pb-1 ml-4 border-b-2 border-gray-800' : 'pb-1 ml-4'}>
                <Link to="/poems" className="text-gray-600 hover:text-gray-800">词集索引</Link>
                </div>
                <div className={path === 'tools'? 'pb-1 ml-4 border-b-2 border-gray-800' : 'pb-1 ml-4'}>
                <Link to="/tools" className="text-gray-600 hover:text-gray-800">词牌助手</Link>
                </div>
            </nav>
        </header>
        </div>
        </>
    )
}