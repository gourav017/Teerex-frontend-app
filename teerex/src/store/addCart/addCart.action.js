import { ADD_TO_CART, REMOVE, REMOVEONE } from "./addCart.types"

export const addProduct = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const removeOneProduct = (product) => {
    return {
        type: REMOVEONE,
        payload: product
    }
}
export const removeProduct = (product) => {
    return {
        type: REMOVE,
        payload: product
    }
}



