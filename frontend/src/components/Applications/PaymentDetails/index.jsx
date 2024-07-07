import './style.scss'
import { useContext } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import Card from '../../../assets/images/card.png'
import Visa from '../../../assets/images/visa.png'
import MasterCard from '../../../assets/images/mastercard.png'
import PayPal from '../../../assets/images/paypal_2.png'
function PaymentDetails() {
    const { store, setStore } = useContext(context)
   

    return (
        <>
            <div className={"payment-details-wrapper "+store.theme+'-bg'}    > 
                <div className="payment-details-content">
                    <div className="top">
                        <h3>Payment Details</h3>
                        <PathToTab parent={'ECommerce'} tab={'PaymentDetails'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"credit-card "+store.theme+'-cardd'} >
                                <div className="left">
                                    <h4>Credit card</h4>
                                    <div className="inputs">
                                        <input  className={store.theme+'-input'} type="text"  placeholder='Card Number' />
                                        <input  className={store.theme+'-input'} type="text"  placeholder='First Name' />
                                        <input  className={store.theme+'-input'} type="date"  />
                                        <input  className={store.theme+'-input'} type="text"  placeholder='Name on card' />
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
                                <h4>Debit card</h4>
                                <div className="fullname-card">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Full name here' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Card number' />
                                </div>
                                <div className="cvv-cvc-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='CVV number' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='CVC' />
                                </div>
                                <h4>Exripation Date</h4>
                                <div className="select-year-month">
                                    <select className={store.theme+'-input'} name="" id="" >
                                        <option value="select_moth">Select Month</option>
                                        <option value="jan">Jan</option>
                                        <option value="fab">Fab</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
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
                                    <button className="blue-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"cod-card "+store.theme+'-cardd'} >
                                <h4>COD</h4>
                                <div className="first-last-name">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='First name' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Last name' />
                                </div>
                                <div className="pin-mobile-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Pincode' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Enter mobile number' />
                                </div>
                                <div className="state-city">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='State' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='City' />
                                </div>
                                <textarea className={store.theme+'-input'}  name="" id=""  placeholder='Address'>

                                </textarea>
                                <div>
                                    <button className="blue-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className={"emi-card "+store.theme+'-cardd'} >
                                <h4>EMI</h4>
                                <div className="first-last-name">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='First name' />
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Last name' />
                                </div>
                                <div className="pin-mobile-number">
                                    <input  className={store.theme+'-input'} type="text"  placeholder='Pincode' />
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
                                            Submit
                                        </button>
                                        </div>
                            </div>
                            <div className={"net-banking "+store.theme+'-cardd'} >
                                <h4>Net Banking</h4>
                                <input  className={store.theme+'-input'} type="text"  placeholder='AC Holder name' />
                                <input  className={store.theme+'-input'} type="text"  placeholder='Account number' />
                                <div className="bank-icfc-code">
                                <select className={store.theme+'-input'} name="" id="" >
                                    <option value="bank_name">Bank Name</option>
                                    <option value="sbi">SBI</option>
                                    <option value="icici">ICICI</option>
                                    <option value="kotak">KOTAK</option>
                                    <option value="BOB">BOB</option>
                                   </select>
                                   <input  className={store.theme+'-input'} type="text"  placeholder='ICFC code' />
                                </div>
                                <input  className={store.theme+'-input'} type="text"  placeholder='Enter mobile number'/>
                                <input  className={store.theme+'-input'} type="text"  placeholder='Other Details'/>
                                <div><button className="blue-btn">Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentDetails;