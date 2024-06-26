import './style.scss'
import { useContext } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
function Pricing() {
    const {store, setStore} = useContext(context)
    const cardStyle = {backgroundColor:store.theme.bgcolor}
    return ( 
        <>
        <div className="pricing-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="pricing-content">
                <div className="top">
                    <h3>Pricing</h3>
                    <PathToTab parent={'ECommerce'} tab={'Pricing'}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Pricing;