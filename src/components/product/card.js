import {useDispatch} from "react-redux";

export const Card = ({product, showProductSlide}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({type: "cart/addToCart", payload: product})
    }

    return(
        <div className="card item border-0 overflow-hidden">
            <div className="img-box">
                <img src={product.pic} className="card-img-top" alt="..." />
                <div className="triangle"></div>
            </div>
                <div className="card-body d-flex flex-column justify-content-between bg-secondary text-white">
                    <p className="card-text">{product.shortName}</p>
                    <div className="d-flex justify-content-between">
                        <p>Quantity: <span style={product.quantity < 5 ? {color: 'red', padding: '0 3px', border: '1px solid red'} : {}}>{product.quantity}</span></p>
                        <p className="card-text text-end fw-bold">{product.price}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-sm bg-transparent text-white" onClick={showProductSlide}><span className="q-mark me-1">?</span>Quick-view</button>
                        <button className="btn btn-sm bg-transparent btn-cart text-nowrap" onClick={addToCart}>Add to cart<div><span>+</span></div></button>
                    </div>
                </div>
        </div>
    )
}