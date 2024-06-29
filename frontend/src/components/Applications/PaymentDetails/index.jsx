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
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const inputStyle = { backgroundColor: store.theme.backBgColor, border: '1px solid #88888840', outline: 'none', width: '100%', padding: '10px 20px', borderRadius: '5px', color: store.theme.textColor }

    return (
        <>
            <div className="payment-details-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="payment-details-content">
                    <div className="top">
                        <h3>Payment Details</h3>
                        <PathToTab parent={'ECommerce'} tab={'PaymentDetails'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="credit-card" style={cardStyle}>
                                <div className="left">
                                    <h4>Credit card</h4>
                                    <div className="inputs">
                                        <input type="text" style={inputStyle} placeholder='Card Number' />
                                        <input type="text" style={inputStyle} placeholder='First Name' />
                                        <input type="date" style={inputStyle} />
                                        <input type="text" style={inputStyle} placeholder='Name on card' />
                                        <select name="" id="" style={inputStyle}>
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
                            <div className="debit-card" style={cardStyle}>
                                <h4>Debit card</h4>
                                <div className="fullname-card">
                                    <input type="text" style={inputStyle} placeholder='Full name here' />
                                    <input type="text" style={inputStyle} placeholder='Card number' />
                                </div>
                                <div className="cvv-cvc-number">
                                    <input type="text" style={inputStyle} placeholder='CVV number' />
                                    <input type="text" style={inputStyle} placeholder='CVC' />
                                </div>
                                <h4>Exripation Date</h4>
                                <div className="select-year-month">
                                    <select name="" id="" style={inputStyle}>
                                        <option value="select_moth">Select Month</option>
                                        <option value="jan">Jan</option>
                                        <option value="fab">Fab</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
                                    </select>
                                    <select name="" id="" style={inputStyle}>
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
                            <div className="cod-card" style={cardStyle}>
                                <h4>COD</h4>
                                <div className="first-last-name">
                                    <input type="text" style={inputStyle} placeholder='First name' />
                                    <input type="text" style={inputStyle} placeholder='Last name' />
                                </div>
                                <div className="pin-mobile-number">
                                    <input type="text" style={inputStyle} placeholder='Pincode' />
                                    <input type="text" style={inputStyle} placeholder='Enter mobile number' />
                                </div>
                                <div className="state-city">
                                    <input type="text" style={inputStyle} placeholder='State' />
                                    <input type="text" style={inputStyle} placeholder='City' />
                                </div>
                                <textarea  name="" id="" style={inputStyle} placeholder='Address'>

                                </textarea>
                                <div>
                                    <button className="blue-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className="emi-card" style={cardStyle}>
                                <h4>EMI</h4>
                                <div className="first-last-name">
                                    <input type="text" style={inputStyle} placeholder='First name' />
                                    <input type="text" style={inputStyle} placeholder='Last name' />
                                </div>
                                <div className="pin-mobile-number">
                                    <input type="text" style={inputStyle} placeholder='Pincode' />
                                   <select name="" id="" style={inputStyle}>
                                    <option value="bank_name">Bank Name</option>
                                    <option value="sbi">SBI</option>
                                    <option value="icici">ICICI</option>
                                    <option value="kotak">KOTAK</option>
                                    <option value="BOB">BOB</option>
                                   </select>
                                </div>
                                    <select name="" id="" style={inputStyle}>
                                        <option value="select_card">Select Card</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <select name="" id="" style={inputStyle}>
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
                            <div className="net-banking" style={cardStyle}>
                                <h4>Net Banking</h4>
                                <input type="text" style={inputStyle} placeholder='AC Holder name' />
                                <input type="text" style={inputStyle} placeholder='Account number' />
                                <div className="bank-icfc-code">
                                <select name="" id="" style={inputStyle}>
                                    <option value="bank_name">Bank Name</option>
                                    <option value="sbi">SBI</option>
                                    <option value="icici">ICICI</option>
                                    <option value="kotak">KOTAK</option>
                                    <option value="BOB">BOB</option>
                                   </select>
                                   <input type="text" style={inputStyle} placeholder='ICFC code' />
                                </div>
                                <input type="text" style={inputStyle} placeholder='Enter mobile number'/>
                                <input type="text" style={inputStyle} placeholder='Other Details'/>
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