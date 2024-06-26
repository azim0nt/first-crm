import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function PaymentDetails() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="payment-details-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="payment-details-content">
                <div className="top">
                    <h3>Payment Details</h3>
                    <PathToTab parent={'ECommerce'} tab={'PaymentDetails'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default PaymentDetails;