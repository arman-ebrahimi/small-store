import {useState} from "react";

export const QuickView = ({isShow, product, handleClose}) => {
    const [bigImage, setBigImage] = useState({show: false, index: 0});

    const handleShowImage = (index) => {
        setBigImage({show: true, index: index});
    }
    const closeImage = () => {
        setBigImage({...bigImage, show: false});
    }
    return(
        <div className={`detail-page ${isShow && "show-detail"}`}>
            <button className="close-detail" onClick={handleClose}>&#x2715;</button>
            <h6 className="me-3">{product.name}</h6>
            <ul>
                {product.desc.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div className="d-flex justify-content-around">
                {product.thumbnails.map((item, index) => {
                    return(
                        <img className="thumb-img" src={item} alt="" onMouseOver={() => handleShowImage(index)} onMouseOut={closeImage} />
                    )
                })}
            </div>
            <div className={`focused-img ${bigImage.show && "show-focused-img"}`}>
                <img src={product.thumbnails[bigImage.index]} width="100%" height="100%" alt="" />
            </div>
        </div>
    )
}