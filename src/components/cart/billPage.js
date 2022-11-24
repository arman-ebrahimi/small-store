

export const BillPage = ({totalPrice, closeBill}) => {

    return(
        <>
            <button className="close-bill" onClick={closeBill}>&#x2715;</button>
            <h2 className="text-center">Please complete your order</h2><br />
            <p><span>Total of your products' price: </span><span>${totalPrice}</span></p>
            <p><span>Tax: </span><span>3%</span></p>
            <p><span>Transport cost: </span><span>$2</span></p>
            <p className="text-center">Final price: ${(totalPrice + totalPrice * 0.03 + 2).toFixed(2)}</p>
            <form className="d-flex justify-content-between align-items-center">
                <label>Please enter your address:</label>
                <textarea rows="3" cols="30"></textarea>
            </form><br />
            <button className="btn btn-success">Payment</button>
        </>
    )
}