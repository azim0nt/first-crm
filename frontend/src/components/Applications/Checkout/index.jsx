import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import PayPal from '../../../assets/images/paypal.png'
import {useTranslation} from 'react-i18next'
function Checkout() {
    const {store, setStore} = useContext(context)
    const {t} = useTranslation()
    return ( 
        <>
        <div className={"checkout-wrapper "+store.theme+'-bg'}  >
            <div className="checkout-content">
                <div className="top">
                    <h3>{t('checkout.title')}</h3>
                    <PathToTab parent={t('checkout.path_to_tab.parent')} tab={t('checkout.path_to_tab.tab')}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className={"billing-details-card "+store.theme+'-cardd'} >
                            <h4>{t('checkout.billing_details.title')}</h4>
                            <div className="content">
                            <div className="left">
                                <div className="firstname-lastname">
                                    <div className="firstname">
                                        <h4>{t('checkout.billing_details.placeholders.0')}</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                    <div className="lastname">
                                        <h4>{t('checkout.billing_details.placeholders.1')}</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                </div>
                                <div className="phone-email">
                                    <div className="phone">
                                        <h4>{t('checkout.billing_details.placeholders.2')}</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                    <div className="email">
                                        <h4>{t('checkout.billing_details.placeholders.3')}</h4>
                                        <input  className={store.theme+'-input'} type="text"/>
                                    </div>
                                </div>
                                <div className="country">
                                    <h4>{t('checkout.billing_details.placeholders.4')}</h4>
                                    <select className={store.theme+'-input'} name="" id="">
                                        <option value="choose...">Choose...</option>
                                        <option value="...">...</option>
                                    </select>
                                </div>
                                <div className="address">
                                    <h4>{t('checkout.billing_details.placeholders.5')}</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="town-city">
                                    <h4>{t('checkout.billing_details.placeholders.6')}</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="state-country">
                                    <h4>{t('checkout.billing_details.placeholders.7')}</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="postal-code">
                                    <h4>{t('checkout.billing_details.placeholders.8')}</h4>
                                    <input  className={store.theme+'-input'} type="text"/>
                                </div>
                                <div className="checkbox">
                                    
                                   <div>
                                    <input  className={store.theme+'-input'} type="checkbox"/>
                                    </div> <p>{t('checkout.billing_details.placeholders.9')}</p>
                                </div>
                            </div>
                            <div className={"right "+store.theme+'-bg'}>
                                <div className="defails"    >
                                    <div className='product-title'>
                                        <h3>{t('checkout.billing_details.defails.0')}</h3> <h3>{t('checkout.billing_details.defails.1')}</h3>
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
                                            <p>{t('checkout.billing_details.defails.2')}</p>
                                            <p>$380.10</p>
                                        </div>
                                        <div>
                                            <p>
                                        {t('checkout.billing_details.defails.3')}
                                            </p>
                                            <span>
                                                <span><input  className={store.theme+'-input'} type="checkbox" /><p>Option 1</p></span>
                                                <span><input  className={store.theme+'-input'} type="checkbox" /><p>Option 2</p></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <p>{t('checkout.billing_details.defails.1')}</p> <p>$620.00</p>
                                    </div>
                                    <div className="pay">
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio"  /><p>{t('checkout.billing_details.defails.4')}</p></span>
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio" /><p>{t('checkout.billing_details.defails.5')}</p></span>
                                        <span><input  className={store.theme+'-input'} name='payment' type="radio" /><img src={PayPal} width={'30%'} alt="" /></span>
                                    </div>
                                    <div className='btn'>
                                    <button className="blue-btn">
                                        {t('checkout.billing_details.defails.6')}
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