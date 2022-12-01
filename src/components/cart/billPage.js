

export const BillPage = ({totalPrice, closeBill}) => {

    return(
        <>
            <button className="close-bill" onClick={closeBill}>&#x2715;</button>
            <div className="emoji"><span>&#128077;</span></div>
            <h4 className="text-center">Please complete your order</h4><br />
            <p><span>Total of your products' price: </span><span>${totalPrice}</span></p>
            <p><span>Tax: </span><span>3%</span></p>
            <p><span>Transport cost: </span><span>$2</span></p>
            <p className="text-center"><span className="left-arrow">{"-->"}</span> Final price: ${(totalPrice + totalPrice * 0.03 + 2).toFixed(2)} <span className="right-arrow">{"<--"}</span></p>
            <form>
                <label>Full Name:</label><br />
                <input type="text" /><br />
                <label>Please enter your address and postal code:</label>
                <textarea className="w-75 mt-1"></textarea>
            </form><br />
            <button className="btn btn-success">Payment</button>
        </>
    )
}