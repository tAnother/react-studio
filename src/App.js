import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  /* add your cart state code here */
  const [myCart, setMyCart] = useState([]);
  const addToCart = (item)  => {
    setMyCart([...myCart, item]);
  }
  const clearCart = () => {
    setMyCart([]);
  };

  return (
    <div className="App">
      <h1>My Bakery argggghhh -- minimal personalization</h1> {/* TODO: personalize your bakery (if you want) */}
      <h5>Click on the item to add it to cart!</h5>

      {bakeryData.map((item, index) => (
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item={item} onClick={addToCart} />
      ))}

      <div>
        <h2>Cart</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <button onClick={clearCart}>Clear</button>
          </tr>
          {myCart.map((item, index) => ( 
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
