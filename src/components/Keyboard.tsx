import React from 'react'

const Keyboard = () => {
    let keys = "qwertyuiopasdfghjkl".split("");
    keys.push("enter");
    for (let i = 0; i < "zxcvbnm".length; i++) {
        keys.push("zxcvbnm".split("")[i])
    }
    keys.push("delete")
    return (
        <div className="Keyboard">
            <div className="keyContainer">
                {keys.map((v) => v === "enter" || v === "delete" ? v === "delete" ? <div className="key wideWidth"><img src="https://cdn-icons-png.flaticon.com/512/2087/2087825.png" alt="delete icon" width="20px" height="20px"></img></div> : <div className='key wideWidth'>{v}</div> : <div className='key normalWidth'>{v}</div>)}
            </div>
        </div>
    )
}

export default Keyboard