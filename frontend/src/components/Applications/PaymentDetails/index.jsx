import './style.scss'
import { useContext } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import Card from '../../../assets/images/card.png'
import Visa from '../../../assets/images/visa.png'
import MasterCard from '../../../assets/images/mastercard.png'
import PayPal from '../../../assets/images/paypal_2.png'
import {useTranslation} from 'react-i18next'
function PaymentDetails() {
    const { store, setStore } = useContext(context)
    const {t} = useTranslation()

    return (
        <>
            <div className={"payment-details-wrapper "+store.theme+'-bg'}    > 
                <div className="payment-details-content">
                    <div className="top">
                        <h3>{t('payment_details.title')}</h3>
                        <PathToTab parent={t('payment_details.path_to_tab.parent')} tab={t('payment_details.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"credit-card "+store.theme+'-cardd'} >
                                <div className="left">
                                    <h4>{t('payment_details.credit_card.title')}</h4>
                                    <div className="inputs">
                                        <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.credit_card.placeholders.0')} />
                                        <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.credit_card.placeholders.1')} />
                                        <input  className={store.theme+'-input'} type="date"  />
                                        <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.credit_card.placeholders.2')} />
                                        <select className={store.theme+'-input'} name="" id="" >
                                            <option value="select_type">Select Type</option>
                                            <option value="master">Master</option>
                                            <option value="visa">Visa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={Card} alt="" />
                                </div>
                            </div>
                            <div className={"debit-card "+store.theme+'-cardd'} >
                                <h4>{t('payment_details.debit_card.title')}</h4>
                                <div className="fullname-card">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.debit_card.placeholders.0')}/>
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.debit_card.placeholders.1')}/>
                                </div>
                                <div className="cvv-cvc-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.debit_card.placeholders.2')}/>
                                    <input  className={store.theme+'-input'} type="text"  placeholder='CVC' />
                                </div>
                                <h4>{t('payment_details.debit_card.exripation_date.0')}</h4>
                                <div className="select-year-month">
                                    <select className={store.theme+'-input'} name="" id="" >
                                        <option value="select_moth">Select Month</option>
                                        <option value="jan">{t('payment_details.debit_card.exripation_date.1')}</option>
                                        <option value="fab">{t('payment_details.debit_card.exripation_date.2')}</option>
                                        <option value="march">{t('payment_details.debit_card.exripation_date.3')}</option>
                                        <option value="april">{t('payment_details.debit_card.exripation_date.4')}</option>
                                    </select>
                                    <select className={store.theme+'-input'} name="" id="" >
                                        <option value="select_year">Select Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2023">2023</option>
                                        <option value="2023">2023</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="blue-btn">{t('payment_details.submit')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"cod-card "+store.theme+'-cardd'} >
                                <h4>COD</h4>
                                <div className="first-last-name">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.0')} />
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.1')} />
                                </div>
                                <div className="pin-mobile-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.2')} />
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.3')} />
                                </div>
                                <div className="state-city">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.4')} />
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.cod_card.placeholders.5')} />
                                </div>
                                <textarea className={store.theme+'-input'}  name="" id=""  placeholder={t('payment_details.cod_card.placeholders.6')}>

                                </textarea>
                                <div>
                                    <button className="blue-btn">
                                    {t('payment_details.submit')}
                                    </button>
                                </div>
                            </div>
                            <div className={"emi-card "+store.theme+'-cardd'} >
                                <h4>EMI</h4>
                                <div className="first-last-name">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.emi_card.placeholders.0')} />
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.emi_card.placeholders.1')} />
                                </div>
                                <div className="pin-mobile-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.emi_card.placeholders.2')} />
                                   <select className={store.theme+'-input'} name="" id="" >
                                    <option value="bank_name">Bank Name</option>
                                    <option value="sbi">SBI</option>
                                    <option value="icici">ICICI</option>
                                    <option value="kotak">KOTAK</option>
                                    <option value="BOB">BOB</option>
                                   </select>
                                </div>
                                    <select className={store.theme+'-input'} name="" id="" >
                                        <option value="select_card">Select Card</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <select className={store.theme+'-input'} name="" id="" >
                                        <option value="select_card">Select Duration</option>
                                        <option value="2023-2023">2023-2023</option>
                                        <option value="2023-2023">2023-2023</option>
                                        <option value="2023-2023">2023-2023</option>
                                        <option value="2023-2023">2023-2023</option>
                                    </select>
                                    <div className="cards-logo">
                                        <div>
                                            <img src={MasterCard} alt="" />
                                        </div>
                                        <div>
                                            <img src={Visa} alt="" />
                                        </div>
                                        <div>
                                            <img src={PayPal} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="blue-btn">
                                        {t('payment_details.submit')}
                                        </button>
                                        </div>
                            </div>
                            <div className={"net-banking "+store.theme+'-cardd'} >
                                <h4>{t('payment_details.net_banking.title')}</h4>
                                <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.net_banking.placeholders.0')} />
                                <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.net_banking.placeholders.1')} />
                                <div className="bank-icfc-code">
                                <select className={store.theme+'-input'} name="" id="" >
                                    <option value="bank_name">Bank Name</option>
                                    <option value="sbi">SBI</option>
                                    <option value="icici">ICICI</option>
                                    <option value="kotak">KOTAK</option>
                                    <option value="BOB">BOB</option>
                                   </select>
                                   <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.net_banking.placeholders.2')} />
                                </div>
                                <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.net_banking.placeholders.3')}/>
                                <input  className={store.theme+'-input'} type="text"  placeholder={t('payment_details.net_banking.placeholders.4')}/>
                                <div><button className="blue-btn">{t('payment_details.submit')}</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentDetails;