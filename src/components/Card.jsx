import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const Card = ({title, img, price, id}) =>{
    const [cart, setCart] = useContext(ShoppingCartContext)
    const [amount, setAmount] = useState(1)
    
    const addToCart = () => {
        if(!cart.some(e => e.id === id)){

            const newItem = {title, img, price: price * amount, id}
            setCart([...cart, newItem])

            
        }
    }
    return ( 
        <div className="card" style={{width: '18rem', margin: '30px'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Amount: {amount}</p>
    {amount > 1 &&<button className="btn btn-danger" onClick={() => setAmount(amount - 1)}>menos</button>}
    <button className="btn btn-success" onClick={() => setAmount(amount + 1)}>mas</button>
    <p className="card-text">Price: {price * amount}</p>
    <a href="#" className="btn btn-primary" onClick={addToCart} >Add</a>
  </div>
</div>
     );
}

export default Card;