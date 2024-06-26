import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function Product() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="product-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="product-content">
                <div className="top">
                    <h3>Product</h3>
                    <PathToTab parent={'ECommerce'} tab={'Product'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Product;