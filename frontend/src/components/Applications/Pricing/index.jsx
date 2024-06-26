import './style.scss'
import { useContext } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
function Pricing() {
    const { store, setStore } = useContext(context)
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const darkCardStyle = {
        backgroundColor: store.theme.backBgColor === '#f2f5fa' ? '#fff' : store.theme.backBgColor
    };

    return (
        <>
            <div className="pricing-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="pricing-content">
                    <div className="top">
                        <h3>Pricing</h3>
                        <PathToTab parent={'ECommerce'} tab={'Pricing'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="become-member-card" style={{ backgroundColor: store.theme.bgColor === '#FFFFFF' ? '#FCFCFC' : store.theme.bgColor }}>
                                <h4>
                                    Become member
                                </h4>
                                <div className="cards">
                                    <div className="card" style={darkCardStyle}>
                                        <div className="circle n-1"></div>
                                        <div className="circle n-2"></div>
                                        <div className="title">
                                            <h3>STANDARD</h3>
                                        </div>
                                        <div className="price">
                                            <p>$</p><p>10</p><p>/mo</p>
                                        </div>
                                        <div className="included">
                                            <ul>
                                                <li>50GB Disk Space</li>
                                                <li>50 Email Accounts</li>
                                                <li>Maintenance</li>
                                                <li>15 Subdomains</li>
                                            </ul>
                                        </div>
                                        <div className="btn">
                                            <button className="blue-btn">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card" style={darkCardStyle}>
                                        <div className="circle n-1"></div>
                                        <div className="circle n-2"></div>
                                        <div className="title">
                                            <h3>PREMIUM</h3>
                                        </div>
                                        <div className="price">
                                            <p>$</p><p>20</p><p>/mo</p>
                                        </div>
                                        <div className="included">
                                            <ul>
                                                <li>10% on all product</li>
                                                <li>50 Email Accounts</li>
                                                <li>Maintenance</li>
                                                <li>15 Subdomains</li>
                                            </ul>
                                        </div>
                                        <div className="btn">
                                            <button className="blue-btn">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card" style={darkCardStyle}>
                                        <div className="circle n-1"></div>
                                        <div className="circle n-2"></div>
                                        <div className="title">
                                            <h3>AUTHER PACK</h3>
                                        </div>
                                        <div className="price">
                                            <p>$</p><p>50</p><p>/mo</p>
                                        </div>
                                        <div className="included">
                                            <ul>
                                                <li>Upload 50 product</li>
                                                <li>50 Email Accounts</li>
                                                <li>Maintenance</li>
                                                <li>15 Subdomains</li>
                                            </ul>
                                        </div>
                                        <div className="btn">
                                            <button className="blue-btn">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card" style={darkCardStyle}>
                                        <div className="circle n-1"></div>
                                        <div className="circle n-2"></div>
                                        <div className="title">
                                            <h3>AUTHER PACK</h3>
                                        </div>
                                        <div className="price">
                                            <p>$</p><p>50</p><p>/mo</p>
                                        </div>
                                        <div className="included">
                                            <ul>
                                                <li>Upload 50 product</li>
                                                <li>50 Email Accounts</li>
                                                <li>Maintenance</li>
                                                <li>15 Subdomains</li>
                                            </ul>
                                        </div>
                                        <div className="btn">
                                            <button className="blue-btn">
                                                Sign Up
                                            </button>
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

export default Pricing;