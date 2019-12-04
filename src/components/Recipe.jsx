import React from 'react'
import { connect } from 'react-redux'

class Recipe extends React.Component {

    componentDidMount(){
        if(this.refs.shipping.checked){
            this.props.subShipping()
        }
    }

    handleCheck = e => {
        if(e.target.checked){
            this.props.addShipping()
        } else {
            this.props.subShipping()
        }
    }

    render(){
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input onChange={this.handleCheck} type="checkbox" ref="shipping"/>
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item">
                        <b>Total: {this.props.total}$</b>
                    </li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addedItems: state.addedItem,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addShipping: () => {dispatch({ type: "ADD_SHIPPING"})},
        subShipping: () => {dispatch({ type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)