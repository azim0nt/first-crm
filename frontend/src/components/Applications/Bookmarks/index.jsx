import './style.scss';
import { useContext } from 'react';
import {context} from '../../../store';
import PathToTab from '../../common/PathToTab'
import { RxAvatar } from "react-icons/rx";
function Bookmarks() {
    const {store} = useContext(context)
    return ( 
        <>
        <div className={"bookmarks-wrapper "+store.theme+'-bg'}>
            <div className={"bookmarks-container"}>
                <div className="top">
                    <h3>Bookmarks</h3>
                    <PathToTab parent={'Apps'} tab={'Bookmarks'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                <div className={"user-card "+store.theme+'-cardd'}>
                    <div className="user">
                        <div className="avatar">
                            <RxAvatar size={50} className={store.theme+'-text'}/>
                        </div>
                        <div className="fullname-email">
                            <h4>MARK JENCO</h4>
                            <p>Markjecno@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={"card-left "+store.theme+'-cardd'}>
                
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Bookmarks;