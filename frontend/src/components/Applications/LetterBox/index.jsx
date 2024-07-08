import './style.scss'
import { useContext } from 'react'
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab';
import React, { useState } from 'react';



const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }
    return (
    <>
            <div class="compose-message">
                <span className='close' onClick={onClose}>&times;</span>
                <form>
                    <label for="from">From :</label>
                    <input type="email" id="from" name="from" placeholder="Your email"/>
                        <label for="to">To :</label>
                        <input type="email" id="to" name="to" placeholder="Recipient's email"/>
                            <label for="subject">Subject :</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject"/>
                                <textarea placeholder="Enter your messages..."></textarea>
                                <div class="buttons">
                                    <button type="button">Save as draft</button>
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </>
                    )    
}




                    function LetterBox() {
    const {store} = useContext(context)

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
                                            <Modal show={showModal} onClose={handleCloseModal} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    );
}

                    export default LetterBox;