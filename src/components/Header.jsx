import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header flex justify-around items-center w-screen fixed top-0 left-0">
            <h1 className="titleHeader">Torch Night</h1>
            <div className="flex">
                <Link to="/">Characters</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/game">Game</Link>
            </div>
            <h3>{`${props.userLogged.username} Gold: ${props.userLogged.gold}`}</h3>
        </div>
    )
}

export default Header