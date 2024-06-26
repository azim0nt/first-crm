import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function OrderHistory() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="order-history-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="order-history-content">
                <div className="top">
                    <h3>Order History</h3>
                    <PathToTab parent={'ECommerce'} tab={'Order History'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default OrderHistory;