import React, { useState } from 'react';
import '../App.css';

function GroceryList({grocery, handleDelete, toggle})
{
    const {title, status, id} = grocery;
    const blue = "#b3ffff";
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
        <div style={{textDecoration : chng, marginLeft: "10px"}}>
           <h2> {title} </h2>
        </div>
        <div>
            <button className="btn1" onClick={() =>{toggle(id); bgchange(); textChange();}}>Purchased</button>
            <button className="btn1" onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    </div>
}

export default GroceryList;