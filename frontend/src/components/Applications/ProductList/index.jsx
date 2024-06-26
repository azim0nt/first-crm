import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function ProductList() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="product-list-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="product-list-content">
                <div className="top">
                    <h3>Product List</h3>
                    <PathToTab parent={'ECommerce'} tab={'Product List'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProductList;