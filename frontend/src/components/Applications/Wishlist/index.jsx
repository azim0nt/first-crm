import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function Wishlist() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="wishlist-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="wishlist-content">
                <div className="top">
                    <h3>Wishlist</h3>
                    <PathToTab parent={'ECommerce'} tab={'Wishlist'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Wishlist;