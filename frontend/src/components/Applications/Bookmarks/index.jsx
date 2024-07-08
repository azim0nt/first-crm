import './style.scss';
import { useContext, useState } from 'react';
import {context} from '../../../store';
import PathToTab from '../../common/PathToTab'
import { RxAvatar } from "react-icons/rx";
function CreatedByMe() {
    return ( 
        <>
        <div className="created-by-me-wrapper">
            <h3>Created by me</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
     );
}
function Favourites(){
    return (
        <>
        <div className="favourites-wrapper">
            <h3>Favourites</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Notification(){
    return (
        <>
        <div className="notification-wrapper">
            <h3>Notification</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Newsletter(){
    return (
        <>
        <div className="newsletter-wrapper">
            <h3>Newsletter</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Business(){
    return (
        <>
        <div className="business-wrapper">
            <h3>Business</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Holidays(){
    return (
        <>
        <div className="holidays-wrapper">
            <h3>Holidays</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Important(){
    return (
        <>
        <div className="important-wrapper">
            <h3>Important</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function Orgenization(){
    return (
        <>
        <div className="orgenization-wrapper">
            <h3>Orgenization</h3>
            <p>No Bookmarks Found.</p>
        </div>
        </>
    )
}
function SharedWithMe(){
    return (
        <>
        <div className="shared-with-me-wrapper">
            <h3>SharedWithMe</h3>
            <p>No Bookmarks Found.</p>
            </div>
        </>
    )
}
function MyBookmark(){
    return (
        <>
        <div className="my-bookmark-wrapper">
            <h3>MyBookmark</h3>
            <p>No Bookmarks Found.</p>
            </div>
        </>
    )
}
function Bookmarks() {
    const {store} = useContext(context)
    const [isOpen, setIsOpen] = useState('close')
    const [activeComp, setActiveComp] = useState('CreatedByMe')
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
                    <div className="views">
                        <h3>Views</h3>
                        <div>
                            <button onClick={()=>{setActiveComp('CreatedByMe')}} className={store.theme+'-text'}>Created By Me</button>
                            <button onClick={()=>{setActiveComp('Favourites')}} className={store.theme+'-text'}>Favourites</button>
                            <button onClick={()=>{setActiveComp('SharedWithMe')}} className={store.theme+'-text'}>Shared With Me</button>
                            <button onClick={()=>{setActiveComp('MyBookmark')}} className={store.theme+'-text'}>My Bookmark</button>
                        </div>
                    </div>
                    <div className="tags">
                        <h3>Tags</h3>
                        <div>
                            <button onClick={()=>{setActiveComp('Notification')}} className={store.theme+'-text'}>Notification</button>
                            <button onClick={()=>{setActiveComp('Newsletter')}} className={store.theme+'-text'}>Newsletter</button>
                            <button onClick={()=>{setActiveComp('Business')}} className={store.theme+'-text'}>Business</button>
                            <button onClick={()=>{setActiveComp('Holidays')}} className={store.theme+'-text'}>Holidays</button>
                            <button onClick={()=>{setActiveComp('Important')}} className={store.theme+'-text'}>Important</button>
                            <button onClick={()=>{setActiveComp('Orgenization')}} className={store.theme+'-text'}>Orgenization</button>
                        </div>
                    </div>
                </div>
                <div className={"card-left "+store.theme+'-cardd'}>
                    {activeComp === 'CreatedByMe' && <CreatedByMe/>}
                    {activeComp === 'Favourites' && <Favourites/>}
                    {activeComp === 'SharedWithMe' && <SharedWithMe/>}
                    {activeComp === 'MyBookmark' && <MyBookmark/>}
                    {activeComp === 'Notification' && <Notification/>}
                    {activeComp === 'Newsletter' && <Newsletter/>}
                    {activeComp === 'Business' && <Business/>}
                    {activeComp === 'Holidays' && <Holidays/>}
                    {activeComp === 'Important' && <Important/>}
                    {activeComp === 'Orgenization' && <Orgenization/>}
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