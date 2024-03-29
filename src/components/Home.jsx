import React from 'react'
import { addToUserCart } from '../store/actions/cartAction'
import { connect } from 'react-redux'

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToUserCart(id);
    }
    
    render(){
        let itemsList = this.props.items.map(item => {
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span onClick={() => this.handleClick(item.id)}className="btn-floating halfway-fab waves-effect waves-light red"> 
                            <i className="material-icons">add</i>
                        </span>
                    </div>
                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        }) 
        return(
            <div className="container">
                <h3 className="center">Our Items</h3>
                <div className="box">
                    {itemsList}
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToUserCart: (id) => {dispatch(addToUserCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);