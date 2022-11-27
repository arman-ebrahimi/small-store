import {useDispatch} from "react-redux";

import {BillPage} from "./billPage";

export const CartList = ({showCart, cartProducts}) => {
    const dispatch = useDispatch();

    const totalPrices = () => {
        let total = 0;
        cartProducts.forEach(function (value){
            total += Number(value.price.replace(/[$]/, "")) * value.count;
        })
        return total.toFixed(2);
    }
    const clearCart = () => {
        dispatch({type: "cart/clearCart"})
    }
    const removeProduct = (index) => {
        dispatch({type: "cart/removeProduct", payload: index})
    }
    const changeCount = (e, index) => {
        if(Number(e.target.value) > cartProducts[index].quantity){
            return alert("Your order is more than the product's quantity");
        }
        dispatch({type: "cart/changeCount", payload: {count: Number(e.target.value), index: index}})
    }
    const finalOrder = () => {
        document.getElementById("bill").classList.add("show-bill");
    }
    const closeBill = () => {
        document.getElementById("bill").classList.remove("show-bill");
    }

    return(
        <div className={showCart ? "open-list" : "close-list"}>
            {cartProducts.length === 0 ?
                <span className="align-self-center fw-bold">empty</span> :
                <>
                    <ul>
                        {cartProducts.map((item, index) => {
                                return(
                                    <li className="d-flex justify-content-between" key={index}>
                                        <span><button className="d-product" onClick={() => removeProduct(index)}>&#128473;</button>{item.shortName}</span>
                                        <input onChange={(e) => changeCount(e,index)} type="text" value={item.count} />
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <p className="total-price">Total Prices: ${totalPrices()}</p>
                    <div className="d-flex justify-content-around mt-2">
                        <button className="order" onClick={finalOrder}>Order</button>
                        <button className="cancel-order" onClick={clearCart}>Cancel</button>
                    </div>
                    <div id="bill" className="bill-page">
                        <BillPage totalPrice={Number(totalPrices())} closeBill={closeBill} />
                    </div>
                </>
            }
        </div>
    )
}