

export const QuickView = ({isShow, product, handleClose}) => {
    return(
        <div className={`detail-page ${isShow && "show-detail"}`}>
            <button className="close" onClick={handleClose}>&#x2715;</button>
            <h6 className="w-75">{product.name}</h6>
            <ul>
                {product.desc.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div className="d-flex justify-content-around">
                <img src={product.thumbnails[0]} alt="image1" />
                <img src={product.thumbnails[1]} alt="image2" />
                <img src={product.thumbnails[2]} alt="image3" />
            </div>
        </div>
    )
}