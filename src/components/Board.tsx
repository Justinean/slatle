import React from 'react'

const Board = () => {
    let board = [];
    for (let i = 0; i < 30; i++) {
        board.push("");
    }
    return (
        <div className="Board">
            <div className="tileContainer">
                {board.map(() => <div className="tile"></div>)}
            </div>
        </div>
    )
}

export default Board