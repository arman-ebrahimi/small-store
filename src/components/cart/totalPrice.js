import {useSelector} from "react-redux";


export const useTotalPrice = () => {
    const cartProducts = useSelector(state => state.cart);
    let total = 0;
    cartProducts.forEach(function (value){
        total += Number(value.price.replace(/[$]/, "")) * value.count;
    })
    return total;
}

