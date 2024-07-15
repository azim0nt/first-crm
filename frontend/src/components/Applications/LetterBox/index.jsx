import './style.scss'
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab';
import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
// import { useHistory } from 'react-router-dom';
import Restart from '../../../assets/images/restart.png'
import { FaInbox } from "react-icons/fa6";
import { CiInboxOut } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { GiLetterBomb } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { RiSpam2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";



const Modal = ({ show, onClose }) => {
    const { store } = useContext(context)
    const [editorHtml, setEditorHtml] = useState('');

    const modules = {
        toolbar: [
            [{ 'size': ['', 'small', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'indent': '-1' }, { 'indent': '+1' }, { 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],

        ],
    };
    if (!show) {
        return null;
    }
    return (
        <>
            <div className="modal">
                <div class={"compose-message " + store.theme + '-cardd'}>
                    <span className='close' onClick={onClose}>&times;</span>
                    <form>
                        <label for="from">From :</label>
                        <input className={store.theme + '-input'} type="email" id="from" name="from" placeholder="Your email" />
                        <label for="to">To :</label>
                        <input className={store.theme + '-input'} type="email" id="to" name="to" placeholder="Recipient's email" />
                        <label for="subject">Subject :</label>
                        <input className={store.theme + '-input'} type="text" id="subject" name="subject" placeholder="Subject" />
                        <ReactQuill value={editorHtml} modules={modules} className={`${store.theme}-input editor`} onChange={setEditorHtml} />
                        <div class="buttons">
                            <button type="button">Save as draft</button>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function Navigation() {
    const { store } = useContext(context)
    return (
        <>
            <div className={"nav " + store.theme + '-cardd'}>
                <input className='check' type="checkbox" />
                <div className="important"> <a href="#">✉️Important</a></div>
                <div className="social"> <a href="#">Social</a></div>
                <div className="promotion"> <a href="#">Promotion</a></div>
                <input className='search' type="search" placeholder=' 🔍 Search...' />
                <a href=""><img src={Restart} width={50} height={30} alt="" /></a>
                <a href="">🗑️</a>
                <a href="">:</a>
            </div>
        </>
    )
}
function Inbox(props) {
    const [view, setView] = useState('Inbox')

    const handleBackClick = () => {
        setView('Inbox')
    }
    return (
        <>
           {view === 'Inbox' && <Inbox nav={<Nav />} />}
            {view === 'interviewMail' && <InterviewMail onBackClick={handleBackClick} />}
            {props.nav}
            <div className="Inbox">
                <div className="users">
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Sent() {
    return (
        <>
            <div className="Sent">
                <h3>Sent</h3>
                <div className="users">
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="first">
                        <div className="cont-1">
                            <input className='checkbox' type="checkbox" />   ⭐
                        </div>
                        <div className="cont-2">
                            <div className="user-img"></div>
                        </div>
                        <div className="cont-3">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="cont-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h2>new</h2>
                        </div>
                        <div className="cont-5">
                            2:23
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// const backButton = () =>{
//     const history = useHistory()

//     const handleBackClick = () =>{
//         history.goBack()
//     }

// }
function InterviewMail({onBackClick}) {
    return (
        <>
            <div className="user-nav">
                <div class="back-button" onClick={onBackClick}>&#8592;</div>
                <div class="title">Interview Mail</div>
                <div className="icons">
                    <div className="icon">
                        <GiLetterBomb />/
                    </div>
                    <div className="icon">
                        <CiBookmark />
                    </div>
                    <div className="icon">
                        <RiSpam2Line />
                    </div>
                    <div className="icon">
                        <MdDelete />
                    </div>
                    <div className="icon">
                        <IoSettingsOutline />
                    </div>
                </div>
            </div>
        </>
    )
}




function LetterBox() {
    const { store } = useContext(context)
    const [activeComp, setActiveComp] = useState('Inbox')

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }

    // =================================Function base_2========================================

    return (
        <>
            <div className={"letter-box-wrapper " + store.theme + '-bg'}>e
                <div className="letter-box-container">
                    <div className="top">
                        <h3>Letter Box</h3>
                        <PathToTab parent='Ecommerce' tab='Letter Box' />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"base_card " + store.theme + '-cardd'}>
                                <div className="buttons">
                                    <button className='compose-email' onClick={handleOpenModal}>➕compose email</button>
                                    <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme + '-text'}`} onClick={() => { setActiveComp('Inbox') }}><FaInbox size={25} /> Inbox</button>
                                    <button className={`${activeComp === 'Send' ? 'active' : ''} ${store.theme + '-text'}`} onClick={() => { setActiveComp('Send') }}><CiInboxOut size={25} /> Send</button>
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><FaRegStar size={25} /> Inbox</button> */}
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><IoIosDocument size={25} /> Inbox</button> */}
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><MdDelete size={25} /> Inbox</button> */}
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><FaInbox size={25} /> Inbox</button> */}
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><FaInbox size={25} /> Inbox</button> */}
                                    {/* <button className={`${activeComp === 'Inbox' ? 'active' : ''} ${store.theme+'-text'}`} onClick={() => { setActiveComp('Inbox') }}><FaInbox size={25} /> Inbox</button> */}
                                </div>
                                <Modal show={showModal} onClose={handleCloseModal} />
                            </div>
                            <div className={"base_card_2 " + store.theme + '-cardd'} onClick={() => { setActiveComp('InterviewMail') }}>
                                {activeComp === 'InterviewMail' && <InterviewMail />}
                                {activeComp === 'Inbox' && <Inbox ac={activeComp} nav={<Navigation />} />}
                                {activeComp === 'Sent' && <Sent ac={activeComp} nav={<Navigation />} />}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LetterBox;