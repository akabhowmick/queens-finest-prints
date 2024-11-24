import React from "react";
import "./Cart.css";
import LabelAndInput from "./LabelAndInput";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: this.props.data.price * this.props.data.quantity,
      quantity: 1,
      error: false,
    };
  }

  // fix
  handleCustomInput = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    this.setState({ [field]: value });
    if (e.target.name === "filename") {
      console.log(e.target.files, URL.createObjectURL(e.target.files[0]));
      value = e.target.files[0];
    }
    this.props.addReqField(field, value, this.props.data.id);
  };

  handleQuantityChange = (e) => {
    let item = this.props.data;
    if (e.target.value <= item.inventory) {
      this.setState({
        error: false,
        quantity: e.target.value,
        totalPrice: e.target.value * item.price,
      });
      this.props.updateCart("quantity", e.target.id, e.target.value);
      this.props.totalCartCost();
    } else {
      this.setState({ error: true });
    }
  };

  handleDeleteBtn = (e) => {
    this.props.updateCart("quantity", parseInt(e.target.id, 10), 1);
    this.props.updateCart("remove", parseInt(e.target.id, 10), 1);
  };

  render() {
    let item = this.props.data;
    let arrayReqFields = Object.entries(item.requiredCustomizations);
    let reqFields = [];
    for (const reqField in item.requiredFields) {
      if (!reqFields.includes(arrayReqFields[reqField][1].name)) {
        reqFields.push(arrayReqFields[reqField][1].name);
      }
    }
    let addReqField = this.props.addReqField;
    return (
      <div className="cart-items">
        <div className="cart-item-product">
          <div className="cart-image">
            <img src={item.img} alt="card-sale" />
          </div>
          <div className="cart-product-info">
            <div>
              <i
                id={item.id}
                className="fas fa-times-circle"
                onClick={(e) => this.handleDeleteBtn(e)}
              ></i>
            </div>
            <div className="item-name">{item.name}</div>
          </div>
        </div>
        <div className="cart-table-item">Unit Price Estimate: ${item.price}.00</div>
        <div className="cart-table-item quantity-box">
          <p>Enter quantity:</p>
          <select
            defaultValue={this.props.data.quantity}
            id={item.id}
            onChange={(e) => this.handleQuantityChange(e)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {this.state.error && (
            <div className="error-message-field-text">
              <p style={{ margin: "0.25rem", color: "red" }}>Please enter a valid quantity</p>
            </div>
          )}
        </div>
        <div className="cart-table-item">
          Total Price Estimate: ${item.price * item.quantity}.00
        </div>
        {reqFields.map(function (reqField, index) {
          return (
            <div key={index} id={item.id} className="cart-table-item requirements">
              <LabelAndInput addReqField={addReqField} reqField={reqField} itemId={item.id} />
            </div>
          );
        })}
        {/* <div className="cart-table-item requirements">
          <label className="label" htmlFor="name">Upload Image *optional</label>
          <input onChange={(e)=>this.handleCustomInput(e)} type="file" id="myFile" name="filename" accept="image/png, image/jpeg" />
        </div> */}
      </div>
    );
  }
}

export default CartItem;
