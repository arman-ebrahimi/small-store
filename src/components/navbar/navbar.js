import {CartList} from "../cart";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const cartProducts = useSelector(state => state.cart);
    const navigate = useNavigate();
    const showCartList = () => {
        setShowCart(!showCart);
    }
    const goHome = () => {
        setShowCart(false)
        navigate("/")
    }

    useEffect(() => {
        const target = document.getElementById('cart-anima');
        target.classList.remove("show-anima2");
        if(cartProducts.length > 1){
            void target.offsetWidth;
            target.classList.add("show-anima2");
        }
    }, [cartProducts.length])

    return(
        <div className="position-sticky top-0 d-flex bg-white py-4 ps-4 menu">
            <div className="btn-home" onClick={goHome}>Home</div>
            <div>Web shop</div>
            <div>contact</div>
            <div className="ms-auto position-relative">
                <span id="cart-anima" className={`cart-anima ${cartProducts.length === 1 && "show-anima1"}`}>{cartProducts.length}</span>
                <img width="30" height="30" src={cartProducts.length === 0 ? "/cart2.png" : "/cart1.png"} alt="cart" onClick={showCartList} />
                <CartList showCart={showCart} cartProducts={cartProducts} />
            </div>
        </div>
    )
}