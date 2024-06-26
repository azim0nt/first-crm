import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function AddProduct() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="add-product-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="add-product-content">
                <div className="top">
                    <h3>Add-Product</h3>
                    <PathToTab parent={'ECommerce'} tab={'Add-Product'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default AddProduct;