import React from 'react';
import "./Cart.css";

class LabelAndInput extends React.Component{

  handleCustomInput = (e) =>{
    let field = e.target.name;
    let value = e.target.value;
    this.setState({[field]: value});
    this.props.addReqField(field, value, this.props.itemId);
  }

  render(){
    let reqField = this.props.reqField;
    return(
      <div className="cart-table-item requirements">
        <label htmlFor={reqField}>{reqField}</label>
        <input type="text" name={reqField} onChange={(e)=>this.handleCustomInput(e)} placeholder="Enter appropriate values here" required/>
      </div>
    )

  }


}

export default LabelAndInput;