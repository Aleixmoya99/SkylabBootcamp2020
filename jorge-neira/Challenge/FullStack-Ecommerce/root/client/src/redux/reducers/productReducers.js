import actionTypes from '../actions/actionsTypes';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LAPTOP_LIST:
      return { ...state, productList: action.productslist };
    default:
      return state;
  }
}
