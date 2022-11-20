import {useState} from "react";

import {products} from "./productsData";
import {Card} from "./card";
import {QuickView} from "./quickView";

export const ProductsPage = () => {

    const allProducts = products;
    const [showProduct, setShowProduct] = useState({
        isShow: false,
        index: 0
    });

    const handleClick = (index) => {
        setShowProduct({
            isShow: true,
            index: index
        })
    }
    const handleClose = () => {
        setShowProduct({...showProduct, isShow: false})
    }

    return (
            <div className="grid m-5">
                {allProducts.map((product, index) =>
                    <Card product={product} key={index} showProductSlide={() => handleClick(index)} />
                )}
                <QuickView isShow={showProduct.isShow} product={allProducts[showProduct.index]} handleClose={handleClose} />
            </div>
        )
}