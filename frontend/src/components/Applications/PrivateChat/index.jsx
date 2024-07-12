import { useContext, useState } from "react";
import './style.scss'
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

function Chat(store){
    
    return (
        <>
         <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div>
                        <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div>                      <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div>                      <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">Hey, How are you?</div>
                            </div>
                        </div></>
    )
}
function Contacts(store){
    return (
        <>
         <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div> <div className="user-container">
                            <div className="avatar"><RxAvatar size={30} className={store.theme+'-text'}/></div>
                            <div className="name">
                            <div className="fullname">Cameron Williamson</div>
                                <div className="last-message">+998919090909</div>
                            </div></div>
        </>
    )
}
function PrivateChat() {
    const {store} = useContext(context)
    const [activeComp, setActiveComp] = useState('Chat')
    return ( 
        <>
        <div className={"private-chat-wrapper "+store.theme+'-bg'}>
            <div className="private-chat-container">
                <div className="top">
                    <h3>Private Chat</h3>
                    <PathToTab parent={'Apps'} tab={'Private Chat'}/>
        </div>
        <div className="middle">
            <div className="section-1">
                <div className={"private-chat-card "+store.theme+'-cardd'}>
                <div className="left">
                    <div className="top-part">
                        <div className={"input-container "+store.theme+'-input'}>
                            <FaSearch className={store.theme+'-text'}/>
                            <input className={store.theme+'-input'} type="text" placeholder="Search here..."/>
                        </div>
                        <div className="chat-contacts-container">
                            <button onClick={()=>{setActiveComp('Chat')}} className={`${activeComp === 'Chat' ? 'active' : ''} ${store.theme}-text`}>Chats</button>
                            <button onClick={()=>{setActiveComp('Contacts')}} className={`${activeComp === 'Contacts' ? 'active' : ''} ${store.theme}-text`}>Contacts</button>
                        </div>
                    </div>
                    <div className="bottom-part">
                       {activeComp === "Chat" && <Chat store={store}/>} 
                       {activeComp === 'Contacts' && <Contacts store={store}/>}
                    </div>
                </div>
                <div className="right">
                    <div className="top-part">
                        <div className="user-container">
                            <div className="avatar">
                                <RxAvatar className={store.theme+'-text'}/>
                            </div>
                                 <div className="name">
                                <div className="fullname">Cameron Williamson</div>
                                <div className="status">Online</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
     );
}

export default PrivateChat;