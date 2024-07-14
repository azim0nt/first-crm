import './style.scss'
import { useState, useContext } from 'react'
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaInfoCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
function Chat(store) {

    return (
        <>
            <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div>
            <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div>                      <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div>                      <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">Hey, How are you?</div>
                </div>
            </div></>
    )
}
function Contacts(store) {
    return (
        <>
            <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div> <div className="user-container">
                <div className="avatar"><RxAvatar size={30} className={store.theme + '-text'} /></div>
                <div className="name">
                    <div className="fullname">Cameron Williamson</div>
                    <div className="last-message">+998919090909</div>
                </div></div>
        </>
    )
}
function GroupChat() {
    const {store} = useContext(context)
    const [activeComp, setActiveComp] = useState('Chat')
    return ( 
        <>
        <div className={"group-chat-wrapper "+store.theme+'-bg'}>
            <div className="group-chat-container">
                <div className="top">
                    <h3>Group Chat</h3>
                    <PathToTab parent={'Chat'} tab={'Group Chat'}/>
                </div>
                <div className="middle">
                        <div className="section-1">
                            <div className={"group-chat-card " + store.theme + '-cardd'}>
                                <div className="left">
                                    <div className="top-part">
                                        <div className={"input-container " + store.theme + '-input'}>
                                            <FaSearch className={store.theme + '-text'} />
                                            <input className={store.theme + '-input'} type="text" placeholder="Search here..." />
                                        </div>
                                        <div className="chat-contacts-container">
                                            <button onClick={() => { setActiveComp('Chat') }} className={`${activeComp === 'Chat' ? 'active' : ''} ${store.theme}-text`}>Chats</button>
                                            <button onClick={() => { setActiveComp('Contacts') }} className={`${activeComp === 'Contacts' ? 'active' : ''} ${store.theme}-text`}>Contacts</button>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        {activeComp === "Chat" && <Chat store={store} />}
                                        {activeComp === 'Contacts' && <Contacts store={store} />}
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="top-part">
                                        <div className="user-container">
                                            <RxAvatar size={30} className={store.theme + '-text'} />

                                            <div className="name">
                                                <div className="fullname">Cameron Williamson</div>
                                                <div className="status">Online</div>
                                            </div>
                                        </div>
                                        <div className="info-more">
                                            <div className={"info " + store.theme + '-bg'}>
                                                <FaInfoCircle className={store.theme + '-text'} />
                                            </div>
                                            <div className={"more " + store.theme + '-bg'}>
                                                <FaEllipsisV className={store.theme + '-text'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"middle-part " + store.theme + '-bg'}>
                                        <div class={"message-dark-blue "+store.theme+'-cardd'}>
                                            <p class="message-content">This is an awesome message!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>

                                        <div class="message-blue">
                                            <p class="message-content">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>

                                        <div class={"message-dark-blue "+store.theme+'-cardd'}>
                                            <p class="message-content">Thanks!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>
                                        <div class="message-blue">
                                            <p class="message-content">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>
                                        <div class="message-blue">
                                            <p class="message-content">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>
                                        <div class={"message-dark-blue "+store.theme+'-cardd'}>
                                            <p class="message-content">Thanks!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>
                                        <div class="message-blue">
                                            <p class="message-content">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>
                                        <div class="message-blue">
                                            <p class="message-content">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>
                                        <div class={"message-dark-blue "+store.theme+'-cardd'}>
                                            <p class="message-content">Thanks!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>
                                        <div class={"message-dark-blue "+store.theme+'-cardd'}>
                                            <p class="message-content">Thanks!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <FaPlus size={25} color="#5c61f2" />
                                        <input placeholder="Type Message here.." type="text" className={store.theme+'-input'} />
                                        <BsEmojiNeutralFill size={25} className={store.theme+'-text'}/>
                                        <button className="blue-btn"><IoIosSend size={20} color="#fff" /></button>
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

export default GroupChat;