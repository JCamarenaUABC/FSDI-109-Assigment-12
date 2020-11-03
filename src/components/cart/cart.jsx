import React, { Component } from 'react';
import {connect} from "react-redux";
//import { incrementCartCounter } from "../../store/reducers/cartCounters";
import { incrementCartCounter } from "../../store/actions/actions";


class Cart extends Component {
    //state = {  }
    render() { 
        return (
            <div>
                <h1>Cart</h1>
                <button className="btn btn-warning" onClick={this.Myfunction}> Click me</button>
            </div>
          );
    }

    Myfunction = () => {
        console.log("termianl");
        this.props.incrementCartCounter(); //dispatch the action
    };
}
 
export default connect(null, { incrementCartCounter })(Cart);



