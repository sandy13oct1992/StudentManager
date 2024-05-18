import ReactDOM from "react-dom";
import './Cart.css';
const Cart = (props) => {

    return ReactDOM.createPortal(
        <div className="CContainer">
            <div className="Cart-Box">
            <label>Name:</label>
            <input type='text' ></input>
            <label>Mobile Number:</label>
            <input type='number' ></input>
            <label>Add:</label>
            <input type='text' />
            <button>Add</button>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>,document.getElementById("root1")
    )
}
export default Cart;