import './style.scss'
import { useContext,useState } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import LongTop from '../../../assets/images/long_top.png'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import FancyWatch from '../../../assets/images/fancy_watch.png'
import ManShoes from '../../../assets/images/man_shoes.png'
function Cart() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgColor}
    const [product1, setProduct1] = useState(0)
    const [product2, setProduct2] = useState(0)
    const [product3, setProduct3] = useState(0)
    return ( 
        <>
        <div className="cart-wrapper"  >
            <div className="cart-content">
                <div className="top">
                    <h3>Cart</h3>
                    <PathToTab parent={'ECommerce'} tab={'Cart'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className="cart-card" style={cardStyle}>
                            <h4>Cart</h4>
                            <table>
                                <thead    >
                                    <tr>
                                        <th><p>Prdouct</p></th>
                                        <th><p>Prdouct Name</p></th>
                                        <th><p>Price</p></th>
                                        <th><p>Quantity</p></th>
                                        <th><p>Action</p></th>
                                        <th><p>Total</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={LongTop} alt="" />
                                        </td>
                                        <td>
                                            <p>
                                            Long Top
                                            </p>
                                        </td>
                                        <td>
                                            <p>$21</p>
                                        </td>
                                        <td>
                                            <div className='counter'>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct1(product1 > 0 ? product1 -1 : product1)}}>
                                                    <FaMinus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product1}
                                                </div>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct1(product1 + 1)}}>
                                                    <FaPlus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <MdCancel/>
                                        </td>
                                        <td>
                                        $12456
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={FancyWatch} alt="" />
                                        </td>
                                        <td>
                                            <p>
                                            Fancy Watch
                                            </p>
                                        </td>
                                        <td>
                                            <p>$50</p>
                                        </td>
                                        <td>
                                            <div className='counter'>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct2(product2 > 0 ? product2 -1 : product2)}}>
                                                    <FaMinus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product2}
                                                </div>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct2(product2 + 1)}}>
                                                    <FaPlus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <MdCancel/>
                                        </td>
                                        <td>
                                        $12456
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={ManShoes} alt="" />
                                        </td>
                                        <td>
                                            <p>
                                            Man Shoes
                                            </p>
                                        </td>
                                        <td>
                                            <p>$50</p>
                                        </td>
                                        <td>
                                            <div className='counter'>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct3(product3 > 0 ? product3 -1 : product2)}}>
                                                    <FaMinus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product3}
                                                </div>
                                                <div style={{backgroundColor: store.theme.backBgColor}}>
                                                    <button onClick={()=> {setProduct3(product3 + 1)}}>
                                                    <FaPlus color={store.theme.textColor}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <MdCancel/>
                                        </td>
                                        <td>
                                        $12456
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}>
                                        <div className="coupan">
                                            <input type="text" placeholder='Enter coupan code'    /> <button className='blue-btn'>Apply</button>
                                        </div>
                                        </td>
                                        <td>
                                            <h3>
                                                TotalPrice
                                            </h3>
                                        </td>
                                        <td>
                                            <p>$6935.00</p>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td colSpan={5}>
                                            <div className='btn'>
                                                <button className="orange-btn">
                                                    Continue Shopping
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='btn-green'>
                                                <button className="green-btn">
                                                    Check out
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Cart;