import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import { GroceryInput } from "./GroceryInput"
import GroceryList from './GroceryList';
import WishList from './WishList';
import '../App.css';

const Grocery = () => {

    const [text, setText] = useState('');
    const [groceryList, setGroceryList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [gorw, serGorw] = useState(true);
    const [c, setC] = useState(true);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const addGroceryList = () => {
        const payload = {status: false, title: text, id: uuid()};
        setGroceryList([...groceryList, payload]);
        setText('');
    }

    const addWishList = () => {
        const payload = {status: false, title: text, id: uuid()};
        setWishList([...wishList, payload]);
        setText('');
    }

    const handleDelete = (id) => {
        let updatedList = groceryList.filter((item) => item.id !== id);
        setGroceryList(updatedList);
    }
      const handleDelete1 = (id) => {
        let updatedList = wishList.filter((item) => item.id !== id);
        setWishList(updatedList);
    }

    const toggle = (id) => {
        const updatedList = groceryList.map(el =>
            el.id === id ? {...el, status: ! el.status} : el);
            setGroceryList(updatedList);
    }

    const wishlistupdate = (id) => {
        let temp;

            wishList.forEach(el => {
                if(el.id === id) {
                    temp = el;
                }
            })

            
            setGroceryList([...groceryList, temp]);
    }

    return <div>
        <h1>Grocery Store</h1>
        <GroceryInput value={text} handleChange={handleChange} addGroceryList={addGroceryList} addWishList={addWishList}/>

        <div>
            <button className="showall" onClick={()=>{serGorw(!gorw);setC(false)}}>{gorw ? "Show Final List" : "Show Wish List"}</button>
        </div>

         <div>
            {gorw ?( c ? <div></div> : wishList.map((e) => <WishList handleDelete1={handleDelete1} wishlistupdate={wishlistupdate} key={e.id} grocery={e} />)) : groceryList.map((e) => <GroceryList toggle={toggle} handleDelete={handleDelete} key={e.id} grocery={e} />)}
        </div>
    </div>

}

export default Grocery;