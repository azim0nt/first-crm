import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import PayPal from '../../../assets/images/paypal.png'
function Checkout() {
    const {store, setStore} = useContext(context)
    return ( 
        <>
        <div className={"checkout-wrapper "+store.theme+'-bg'}  >
            <div className="checkout-content">
                <div className="top">
                    <h3>Checkout</h3>
                    <PathToTab parent={'ECommerce'} tab={'Checkout'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className={"billing-details-card "+store.theme+'-cardd'} >
                            <h4>Billing Details</h4>
                            <div className="content">
                            <div className="left">
                                <div className="firstname-lastname">
                                    <div className="firstname">
                                        <h4>First Name</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                    <div className="lastname">
                                        <h4>Last Name</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                </div>
                                <div className="phone-email">
                                    <div className="phone">
                                        <h4>Phone</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                    <div className="email">
                                        <h4>Email Address</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                </div>
                                <div className="country">
                                    <h4>Country</h4>
                                    <select className={store.theme+'-input'} name="" id="">
                                        <option value="choose...">Choose...</option>
                                        <option value="...">...</option>
                                    </select>
                                </div>
                                <div className="address">
                                    <h4>Address</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="town-city">
                                    <h4>Town/City</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="state-country">
                                    <h4>State/Country</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="postal-code">
                                    <h4>Postal Code</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="checkbox">
                                    
                                   <div>
                                    <input  className={store.theme+'-input'} type="checkbox"/>
                                    </div> <p>Check me out</p>
                                </div>
                            </div>
                            <div className={"right "+store.theme+'-bg'}>
                                <div className="defails"    >
                                    <div className='product-title'>
                                        <h3>Product</h3> <h3>Total</h3>
                                    </div>
                                    <div className="products">
                                        <div>
                                            <p>Pink Slim Shirt × 1</p>
                                            <p>$25.10</p>
                                        </div>
                                        <div>
                                            <p>SLim Fit Jeans × 1</p>
                                            <p>$555.00</p>
                                        </div>
                                    </div>
                                    <div className="sub-total">
                                        <div>
                                            <p>Subtotal</p>
                                            <p>$380.10</p>
                                        </div>
                                        <div>
                                            <p>
                                        Shipping
                                            </p>
                                            <span>
                                                <span><input  className={store.theme+'-input'} type="checkbox" /><p>Option 1</p></span>
                                                <span><input  className={store.theme+'-input'} type="checkbox" /><p>Option 2</p></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <p>Total</p> <p>$620.00</p>
                                    </div>
                                    <div className="pay">
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio"  /><p>Check Payments</p></span>
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio" /><p>Cash On Delivery</p></span>
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio" /><img src={PayPal} width={'30%'} alt="" /></span>
                                    </div>
                                    <div className='btn'>
                                    <button className="blue-btn">
                                        Place Order
                                    </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Checkout;