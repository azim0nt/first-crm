import './style.scss'
import { useContext } from 'react'
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab';

function LetterBox() {
    const {store} = useContext(context)
    return ( 
        <>
        <div className={"letter-box-wrapper "+store.theme+'-bg'}>
            <div className="letter-box-container">
                <div className="top">
                    <h3>Letter Box</h3>
                    <PathToTab parent='Ecommerce' tab='Letter Box' />
                </div>
                <div className="middle">
                    <div className="section-1">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default LetterBox;