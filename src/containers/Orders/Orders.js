import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    // state = {
    //     orders: [],
    //     loading: true
    // }

    //FETCH THE ORDERS FROM THE SERVER
    componentDidMount() {
        console.log(this.props.token)
        this.props.onFetchOrders(this.props.token);
        // axios.get('/orders.json')
        //     .then(res => {

        //         const fetchedOrders = [];

        //         for (let key in res.data) { //https://prnt.sc/qx1svr the value of each key is the order object

        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             })
        //         }
        //         //fetchedOrders = Array of orders
        //         this.setState({ loading: false, orders: fetchedOrders })
        //         console.log(this.state.orders);
        //     })
        //     .catch(err => {
        //         this.setState({ loading: false })
        //     });
    }

    render() {

        let orders = <Spinner />
        if (!this.props.loading) {

            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        };

        return (
            <div>
                {orders}
            </div>

        );

    };
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
