import React from 'react';
import './styles.css';
import graphPNG from "./images/graph.png";
import settingsPNG from "./images/settings.png";
import helpPNG from "./images/help.png";

const Header = () => {
    return (
        <div className="Header">
            <img src={helpPNG} alt="help icon" className="help" width="20px" height="20px"></img>
            <h2 className="name">Slatle</h2>
            <div className="headerContainer">
                <img src={graphPNG} alt="stats icon" className="stats" width="20px" height="20px"></img>
                <img src={settingsPNG} alt="settings icon" className="settings" width="20px" height="20px"></img>
            </div>
        </div>
    )
}

export default Header;