import React from "react";

function Navbar({...props}) {console.log(props);
    const color = props.gameOver ? '#900' : 'green';
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li style={{color: `${color}`, background: 'rgba(0,0,0,0.4)'}}>
                    {props.headline}
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.topscore}
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
