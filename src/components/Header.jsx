import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="w-screen fixed top-0">
            <h3>{`${props.userLogged.username} Gold: ${props.userLogged.gold}`}</h3>
            <Link to="/">Characters</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/game">Game</Link>
        </div>
    )
}

export default Header