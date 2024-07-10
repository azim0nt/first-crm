import './style.scss'
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab';
import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import Restart from '../../../assets/images/restart.png'

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
    return (
        <>
            <div className="nav">
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
    return (
        <>
            {props.nav}
            <div className="Inbox">
                
            </div>
        </>
    );
}

function Sent() {
    return (
        <>
            <div className="Sent">
                <h3>Sent</h3>
                <p>No Bookmarks Found.</p>
            </div>
        </>
    );
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
            <div className={"letter-box-wrapper " + store.theme + '-bg'}>
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
                                    <button className={activeComp === 'Inbox' ? 'active' : ''} onClick={() => { setActiveComp('Inbox') }}>Inbox</button>
                                    <button className={activeComp === 'Sent' ? 'active' : ''} onClick={() => { setActiveComp('Sent') }}>Sent</button>
                                    <button>Starred</button>
                                </div>

                                <Modal show={showModal} onClose={handleCloseModal} />
                            </div>
                            <div className={"base_card_2 " + store.theme + '-cardd'}>
                                {activeComp === 'Inbox' && <Inbox nav={<Navigation />} />}
                                {activeComp === 'Sent' && <Sent nav={<Navigation />} />}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LetterBox;