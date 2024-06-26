import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function Checkout() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="checkout-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="checkout-content">
                <div className="top">
                    <h3>Checkout</h3>
                    <PathToTab parent={'ECommerce'} tab={'Checkout'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Checkout;