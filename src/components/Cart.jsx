import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subQuantity} from '../store/actions/cartAction'
import Recipe from './Recipe'

class Cart extends React.Component {

    handleRemoveItem = id => {
        this.props.removeItem(id);
    }

    handleAddQuantity = id => {
        this.props.addQuantity(id);
    }

    handleSubQuantity = id => {
        this.props.subQuantity(id);
    }

    render(){
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item => {
                return (
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.title} className=""/>
                        </div>
                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p>
                                <b>Price: {item.price}$</b>
                            </p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to='/cart'>
                                    <i onClick={() => this.handleAddQuantity(item.id)} className="material-icons">arrow_drop_up</i>
                                </Link>
                                <Link to='/cart'>
                                    <i onClick={() => this.handleSubQuantity(item.id)} className="material-icons">arrow_drop_down</i>
                                </Link>
                            </div>
                            <button onClick={() => this.handleRemoveItem(item.id)} className="waves-effect waves-light btn pink remove">
                                Remove
                            </button>
                        </div>
                    </li> 
                )
            })
        ):
        (
            <p> Here is nothing</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subQuantity: (id) => { dispatch(subQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);