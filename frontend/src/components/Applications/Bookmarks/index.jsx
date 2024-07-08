import './style.scss';
import { useContext, useState } from 'react';
import {context} from '../../../store';
import PathToTab from '../../common/PathToTab'
import { RxAvatar } from "react-icons/rx";
function Bookmarks() {
    const {store} = useContext(context)
    const [isOpen, setIsOpen] = useState('close')
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
                    <button className="blue-btn" onClick={()=>{setIsOpen('open')}}>New Bookmark</button>
                </div>
                <div className={"card-left "+store.theme+'-cardd'}>
                
                </div>
                    </div>
                </div>

            </div>
        </div>
            <div className={"bookmarks-modal-bg "+isOpen}>
                <div className={"modal-bg "+store.theme+'-cardd'}>
                    <h3>Add Bookmark</h3>
                    <p>Web Url</p>
                    <input type="text" className={store.theme+'-input'} />
                    <p>Title</p>
                    <input type="text" className={store.theme+'-input'} />
                    <p>Descriotion</p>
                    <textarea className={store.theme+'-input'}></textarea>
                    <div className="group-collection">
                        <div className="group">
                        <p>Group</p>           
                        <select className={store.theme+'-input'}>
                        <option value="">My Bookmarks</option>
                        </select>
                        </div>
                        <div className="collection">
                            <p>collection</p>
                            <select className={store.theme+'-input'}>
                                <option value="">General</option>
                                <option value="">fs</option>

                            </select>
                        </div>
                    </div>
                    <div className="save-cancel">
                        <button className="orange-btn">Save</button>
                        <button className="blue-btn" onClick={()=>{setIsOpen('close')}}>Cancel</button>

                    </div>
                </div>
            </div>
        </>
     );
}

export default Bookmarks;