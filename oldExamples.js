// case actionTypes.REMOVE_INGREDIENT:
//             return {
//                 ...state,
//                 ingredients: {
//                     ...state.ingredients,
//                     [action.ingredientName]: state.ingredients[action.ingredientName] - 1
//                 },
//                 totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
//             };
//         case actionTypes.SET_INGREDIENTS:
//             return {
//                 ...state,
//                 ingredients: {
//                     meat: action.ingredients.meat,
//                     cheese: action.ingredients.cheese,
//                     salad: action.ingredients.salad,
//                     bacon: action.ingredients.bacon
//                 },
//                 totalPrice: 4,
//                 error: false
//             };
//         case actionTypes.FETCH_INGREDIENTS_FAILED:
//             return {
//                 ...state,
//                 error: true
//             }
//         default:
//             return state;
//     }


// };

// export default reducer;

// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//     orders: [],
//     loading: false,
//     purchased: false
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.PURCHASE_INIT:
//             return {
//                 ...state,
//                 purchased: false
//             }
//         case actionTypes.PURCHASE_BURGER_START:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case actionTypes.PURCHASE_BURGER_SUCCESS:
//             const newOrder = {
//                 ...action.orderData,
//                 id: action.orderId  
//             };
//             return {
//                 ...state,
//                 loading: false,
//                 purchased: true,
//                 orders: state.orders.concat(newOrder)//concat returns a new array and therefore we add object immutably
//             };
//         case actionTypes.PURCHASE_BURGER_FAIL:
//             return {
//                 ...state,
//                 loading: false
                
//             };
//         case actionTypes.FETCH_ORDERS_START:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case actionTypes.FETCH_ORDERS_SUCCESS:
//             return {
//                 ...state,
//                 orders: action.orders,
//                 loading: false
//             }
//         case actionTypes.FETCH_ORDERS_FAIL:
//             return {
//                 ...state,
//                 loading: false
//             }
//         default:
//             return state;
//     }
// };

// export default reducer;