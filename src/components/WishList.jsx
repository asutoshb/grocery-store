import '../App.css';
import React, { useState } from 'react';

function WishList({grocery, wishlistupdate, handleDelete1})
{
    const {title, status, id} = grocery;

    const blue = "#ffff99";
    const [bg, setBg] = useState(blue);
    const [chng, setLine] = useState("none");

     const bgchange = () => {
        let newBg = "#00ff00";
        setBg(newBg);
    }

    const textChange = () => {
        let chng = "line-through";
        setLine(chng);
    }

    return <div className="list" style={{backgroundColor:  bg}}>
        <div style={{textDecoration : chng,marginLeft: "10px"}}>
            <h2> {title} </h2>
        </div>
        <div>
            <button className="btn1" onClick={() =>{wishlistupdate(id); bgchange(); textChange(); handleDelete1(id)}}>Add to Final List</button>
        </div>
    </div>
}

export default WishList;