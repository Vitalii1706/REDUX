import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const intialState = {
  products: [],
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };

    case REMOVE_PRODUCT: {
      const newList = state.products.filter(product => product.id !== action.payload.id);
      return {
        ...state,
        products: newList,
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
