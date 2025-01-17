import './style.scss'
import { useContext,useState } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import LongTop from '../../../assets/images/long_top.png'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import FancyWatch from '../../../assets/images/fancy_watch.png'
import ManShoes from '../../../assets/images/man_shoes.png'
import {useTranslation} from 'react-i18next'
function Cart() {
    const {store, setStore} = useContext(context)
    const {t} = useTranslation()
    const [product1, setProduct1] = useState(0)
    const [product2, setProduct2] = useState(0)
    const [product3, setProduct3] = useState(0)
    return ( 
        <>
        <div className={"cart-wrapper "+store.theme+'-bg'}  >  
            <div className="cart-content">
                <div className="top">
                    <h3>{t('cart.title')}</h3>
                    <PathToTab parent={t('cart.path_to_tab.parent')} tab={t('cart.path_to_tab.tab')}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className={"cart-card "+store.theme+'-cardd'}>
                            <h4>{t('cart.title')}</h4>
                            <table>
                                <thead  className={store.theme+'-input'}>
                                    <tr>
                                        <th><p>{t('cart.category.0')}</p></th>
                                        <th><p>{t('cart.category.1')}</p></th>
                                        <th><p>{t('cart.category.2')}</p></th>
                                        <th><p>{t('cart.category.3')}</p></th>
                                        <th><p>{t('cart.category.4')}</p></th>
                                        <th><p>{t('cart.category.5')}</p></th>
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
                                                <div>
                                                    <button onClick={()=> {setProduct1(product1 > 0 ? product1 -1 : product1)}}>
                                                    <FaMinus  className={store.theme+'-input'}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product1}
                                                </div>
                                                <div>
                                                    <button onClick={()=> {setProduct1(product1 + 1)}}>
                                                    <FaPlus  className={store.theme+'-input'}/>
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
                                                <div>
                                                    <button onClick={()=> {setProduct2(product2 > 0 ? product2 -1 : product2)}}>
                                                    <FaMinus  className={store.theme+'-input'}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product2}
                                                </div>
                                                <div>
                                                    <button onClick={()=> {setProduct2(product2 + 1)}}>
                                                    <FaPlus  className={store.theme+'-input'}/>
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
                                                <div>
                                                    <button onClick={()=> {setProduct3(product3 > 0 ? product3 -1 : product2)}}>
                                                    <FaMinus  className={store.theme+'-input'}/>
                                                    </button>
                                                </div>
                                                <div>
                                                    {product3}
                                                </div>
                                                <div>
                                                    <button onClick={()=> {setProduct3(product3 + 1)}}>
                                                    <FaPlus  className={store.theme+'-input'}/>
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
                                            <input  className={store.theme+'-bg'} type="text" placeholder={t('cart.coupan.0')}   /> <button className='blue-btn'>{t('cart.coupan.1')}</button>
                                        </div>
                                        </td>
                                        <td>
                                            <h3>
                                                {t('cart.total_price')}
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
                                                {t('cart.continue_shopping')}
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='btn-green'>
                                                <button className="green-btn">
                                                {t('cart.check_out')}
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