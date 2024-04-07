import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import MetaData from '../layoutes/MetaData';
import CheckoutSteps from './CheckoutStep';

function ConfirmOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const countriesList = Object.value(countries)
  const { shippingInfo, cartItems } = useSelector(state => state.cart)
  // console.log(cartItems)
  const { user } = useSelector(state => state.auth)

  //calculate order Prices
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0.05)
  const shippingPrice = itemsPrice > 200 ? 0 : 25
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

  const processToPayment = () => {
    const data = {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalPrice
    }
    sessionStorage.setItem('orderInfo', JSON.stringify(data))
    navigate('/payment')
  }
  return (
    <>
      <MetaData title={'Confirm-Order | Ecommerce'} />
      <CheckoutSteps shipping confirmOrder />

    </>
  )
}

export default ConfirmOrder;
