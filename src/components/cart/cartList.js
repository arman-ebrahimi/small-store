import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {useTotalPrice} from "./totalPrice";

export const CartList = ({showCart, setShow, cartProducts}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = useTotalPrice();
    const clearCart = () => {
        dispatch({type: "cart/clearCart"})
        setShow(false)
    }
    const removeProduct = (index) => {
        dispatch({type: "cart/removeProduct", payload: index})
    }
    const changeCount = (e, index) => {
        if(isNaN(Number(e.target.value))){
            return alert("Please enter a number!");
        }
        if(Number(e.target.value) > cartProducts[index].quantity){
            return alert("Your order is more than the product's quantity");
        }
        dispatch({type: "cart/changeCount", payload: {count: Number(e.target.value), index: index}})
    }
    const finalOrder = () => {
        setShow(false)
        navigate("/order");
    }

    const consideredElement1 = document.getElementById("cart-list");
    document.addEventListener("mouseup", (e) => {
        if(consideredElement1.contains(e.target)){
        }
        else {
            setShow(false)
        }
    })

    return(
        <div id="cart-list" className={showCart ? "open-list" : "close-list"}>
            {cartProducts.length === 0 ?
                <span className="align-self-center fw-bold">empty</span> :
                <>
                    <ul>
                        {cartProducts.map((item, index) => {
                                return(
                                    <li className="d-flex justify-content-between" key={index}>
                                        <span><button className="dt-product fa fa-trash-o" onClick={() => removeProduct(index)}></button>{item.shortName}</span>
                                        <input onChange={(e) => changeCount(e,index)} type="text" value={item.count} />
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <p className="total-price">Total Prices: ${total.toFixed(2)}</p>
                    <div className="d-flex justify-content-around mt-2">
                        <button className="order" onClick={finalOrder}>Order</button>
                        <button className="cancel-order" onClick={clearCart}>Cancel</button>
                    </div>
                </>
            }
        </div>
    )
}