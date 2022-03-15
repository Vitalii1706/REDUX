import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const intialState = {
  productList: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productList: state.productList.concat(action.payload.productData),
      };

    case DELETE_PRODUCT: {
      const newList = state.productList.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        productList: newList,
      };
    }

    default:
      return state;
  }
};
export default productReducer;
