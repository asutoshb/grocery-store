import '../App.css';
function GroceryInput({value, handleChange, addGroceryList, addWishList})
{
    return (
        <div>
            <input value={value} onChange={handleChange} type="text" placeholder="Add Grocery"/>
            <button className="btn" onClick={addGroceryList}>Add to Grocery List</button>
            <button className="btn" onClick={addWishList}>Add to Wish List</button>
        </div>
    );
}

export {GroceryInput};