import {useTotalPrice} from "./totalPrice";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const BillPage = () => {
    const cartProducts = useSelector(state => state.cart);
    const total = useTotalPrice();

    return(
            cartProducts.length > 0 ?
                <div className="bill-page">
                    <div className="emoji"><span>&#128077;</span></div>
                    <h4 className="text-center">Please complete your order</h4><br />
                    <p><span>Total of your products' price: </span><span>${total.toFixed(2)}</span></p>
                    <p><span>Tax: </span><span>3%</span></p>
                    <p><span>Transport cost: </span><span>$2</span></p>
                    <p className="text-center"><span className="left-arrow">{"-->"}</span> Final price: ${(total + total * 0.03 + 2).toFixed(2)} <span className="right-arrow">{"<--"}</span></p>
                    <form>
                        <label>Full Name:</label><br />
                        <input type="text" /><br /><br />
                        <label>Please enter your address and postal code:</label>
                        <textarea className="w-75 mt-1"></textarea>
                    </form><br />
                    <button className="btn btn-success">Payment</button>
                </div>:
                <h2 className="empty-bill">
                    There isn't any order by you<br /><br />
                    Go on <Link to="/" className="home-link">home page</Link> for a new order
                </h2>
    )
}