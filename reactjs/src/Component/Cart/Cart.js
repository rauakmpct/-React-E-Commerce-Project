import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RemoveCartItems, addItemToCart } from '../../Redux/Action/CartAction'
import MetaData from '../layoutes/MetaData'


function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems } = useSelector(state => state.cart)
    // console.log(cartItems);
    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1
        if (stock <= quantity) {
            return alert('This product is out of Stock')
        }
        dispatch(addItemToCart(id, newQty))
    }
    const decreaseQty = (id, quantity) => {
        const newQty = quantity - 1
        if (1 >= quantity) {
            return alert('Quantity cannot be less than 1')
        }
        dispatch(addItemToCart(id, newQty))
    }
    const removeCartHandler = (id) => {
        dispatch(RemoveCartItems(id))
    }
    const checkOutHandler = () => {
        navigate('/shipping')
    }

    return (
        <>
            <MetaData title="Cart | Ecommerce" />

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                            <Link className="breadcrumb-item text-dark" to="/">Shop</Link>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {
                                    cartItems.map((item, key) => (
                                        <>
                                            <tr>
                                                <td className="align-middle"><img src={item.image} alt="" style={{ width: '50px' }} />{item.name}</td>
                                                <td className="align-middle">Rs.{item.price}</td>
                                                <td className="align-middle">
                                                    <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                                        <div className="input-group-btn">
                                                            <button onClick={() => decreaseQty(item.product, item.quantity)} className="btn btn-sm btn-primary btn-minus" >
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={item.quantity} />
                                                        <div className="input-group-btn">
                                                            <button onClick={() => increaseQty(item.product, item.quantity, item.stock)} className="btn btn-sm btn-primary btn-plus">
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">Rs.{item.price * item.quantity}</td>
                                                <td className="align-middle">
                                                    <button onClick={() => removeCartHandler(item.product)} className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                            </tr>
                                        </>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-30" action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>{`₹${cartItems.reduce(
                                        (acc, val) => acc + val.quantity * val.price,
                                        0
                                    ).toFixed(2)}`}</h6>
                                </div>
                                {/* <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div> */}
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>{`₹${cartItems.reduce(
                                        (acc, val) => acc + val.quantity * val.price,
                                        0
                                    ).toFixed(2)}`}</h5>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={checkOutHandler}
                                >Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart