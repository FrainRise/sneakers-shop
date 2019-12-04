import { ADD_TO_USER_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from './cart-actions-types'

export const addToUserCart = (id) => {
    return {
        type: ADD_TO_USER_CART,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const subQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const addShipping = (id) => {
    return {
        type: ADD_SHIPPING,
        id
    }
}

export const subShupping = (id) => {
    return {
        type: SUB_SHIPPING,
        id
    }
}