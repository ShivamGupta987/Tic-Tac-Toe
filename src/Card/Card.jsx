import React from 'react';
import Icon from "../Icon/Icon.jsx";
import './Card.css';
import PropTypes from 'prop-types'

function Card({ gameEnd, player, onPlay, index }) {
    let icon = <Icon />;
    if (player === 'X') {
        icon = <Icon name="cross" />;
    } else if (player === 'O') {
        icon = <Icon name="circle" />;
    }

    const handleClick = () => {
        if (!gameEnd && player !== "") {
            onPlay(index);
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {icon}
        </div>
    );
}

export default Card;
