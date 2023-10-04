import React, { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../helpers/checkWinner";
import './Grid.css';

function Grid({ numberofCards }) {
    const [board, setBoard] = useState(Array(numberofCards).fill(""));
    const [turn, setTurn] = useState(true); // true=>O, false =>X
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] === "" && !winner) {
            board[index] = turn ? "O" : "X";
            const win = isWinner(board, turn ? "O" : "X");
            if (win) {
                setWinner(win);
            }
            setBoard([...board]);
            setTurn(!turn);
        }
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberofCards).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            {!winner && (
                <h1 className="turn-highlight">Current turn: {turn ? 'O' : 'X'}</h1>
            )}
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} gameEnd={!!winner} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    );
}

export default Grid;
