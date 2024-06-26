import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from '../Constants/CartConstant'
import axios from 'axios'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {

    let apilink = `https://apiecommerce-qpji.onrender.com/api/getallproductdetail/${id}`
    // let apilink='http://localhost:4000/api/getallproductdetail'
    const { data } = await axios.get(apilink)
    // console.log(data)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.image.url,
            stock: data.product.stock,
            quantity,
        },
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const RemoveCartItems = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
    console.log(data)
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };