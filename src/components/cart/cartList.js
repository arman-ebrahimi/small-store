import {useDispatch} from "react-redux";

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
        dispatch({type: "cart/clearCart", payload: ""})
    }

    return(
        <div className={showCart ? "open-list" : "close-list"}>
            {cartProducts.length === 0 ?
                <span className="align-self-center">empty</span> :
                <>
                    <ul>
                        {cartProducts.map((item, index) => {
                                return(
                                    <li className="d-flex justify-content-between" key={index}>
                                        <span>{item.shortName}</span><span>{item.count}</span>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <p className="total-price">Total Amounts: {totalPrices()}</p>
                    <button onClick={clearCart}>Cancel order</button>
                </>
            }
        </div>
    )
}