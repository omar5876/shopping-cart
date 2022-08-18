import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const ShoppingCart = () =>{
    const [cart, setCart] = useContext(ShoppingCartContext)
    let totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    return ( 
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Total price </h2>
                <p className="card-text"> {totalPrice}</p>
                <h2 className="card-title"></h2>
            </div>
            <div className="d-flex flex-wrap justify-content-around align-items-center">

            {!cart.length ? <div>There's no items</div>: cart.map(e => (
                <div key={e.id}>
                    <h2>{e.title}</h2>
                    <img src={e.img}/>
                    <h3>{e.price}</h3>
                    <h1>{e.id}</h1>
                    <button className="btn btn-danger" onClick={() => setCart(cart.filter(i => i.id !== e.id))}>Delete Item</button>
                </div>
            ))}
            </div>
        </div>
     );
}

export default ShoppingCart;