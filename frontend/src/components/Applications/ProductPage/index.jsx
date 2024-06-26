import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function ProductPage() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="product-page-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="product-page-content">
                <div className="top">
                    <h3>Product Page</h3>
                    <PathToTab parent={'ECommerce'} tab={'Product Page'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProductPage;