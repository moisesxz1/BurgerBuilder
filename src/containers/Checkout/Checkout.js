import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
//import * as actions from '../../store/actions/index';

class Checkout extends Component {

    

    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // };

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search); // extract the queryParams
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) { // loop through the different queryParams and convert every queryParam into an array
    //         //['salad', '1'] 
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {

    //             ingredients[param[0]] = +param[1]; // updating the ingredients object with the queryParams
    //         }
    //     }

    //     this.setState({ ingredients: ingredients, totalPrice: price });
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        let summary = <Redirect to="/" />

        if (this.props.ings) {
            const purchasedRedirdct = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirdct}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route path={this.props.match.path + '/contact-data'}
                        // render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
                        component={ContactData} />
                </div>
            )
        }
        return summary;
            
        
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased

    }
};



export default connect(mapStateToProps)(Checkout);