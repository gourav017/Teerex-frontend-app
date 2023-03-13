import { ADD_TO_CART, REMOVE, REMOVEONE } from "./addCart.types";

const initialState = {
  cart: [],
};

export const addCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const productIndex = state.cart.findIndex(
        (index) => index.id === payload.id
      );
      if (productIndex >= 0) {
        state.cart[productIndex].product.count += 1;
        return {
          ...state,
        };
      } else {
        const product = { ...payload.product, count: 1 };
        return {
          ...state,
          cart: [...state.cart, { ...payload, product }],
        };
      }
    }

    case REMOVEONE: {
      const productIndex = state.cart.findIndex(
        (index) => index.id === payload.id
      );
      if (productIndex >= 0) {
        state.cart[productIndex].product.count -= 1;
      }
      return {
        ...state,
      };
    }

    case REMOVE: {
      state.cart = state.cart.filter((index) => index.id !== payload.id);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
