import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-screen fixed top-0">
            <Link to="/">Characters</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/game">Game</Link>
        </div>
    )
}

export default Header