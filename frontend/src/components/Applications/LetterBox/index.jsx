import './style.scss'
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab';
import React, { useState,useContext } from 'react';
import ReactQuill from 'react-quill';


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




function LetterBox() {
    const { store } = useContext(context)

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }



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
                                <button className='compose-email' onClick={handleOpenModal}>➕compose email</button>
                                <button className='sent'>Sent</button>
                                <Modal show={showModal} onClose={handleCloseModal} />
                            </div>
                            <div className={"base_card_2 "  + store.theme + '-cardd'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LetterBox;