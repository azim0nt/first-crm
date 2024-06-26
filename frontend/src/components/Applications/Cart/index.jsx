import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function Cart() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="cart-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="cart-content">
                <div className="top">
                    <h3>Cart</h3>
                    <PathToTab parent={'ECommerce'} tab={'Cart'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Cart;