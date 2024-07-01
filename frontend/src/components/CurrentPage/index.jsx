// CurrentPage.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import General from '../General';
import { useContext } from 'react';
import { context } from '../../store';
import { ImCancelCircle } from "react-icons/im";

function CurrentPage() {
    const { store, setStore } = useContext(context);
    return (
        <> 
        <div className="body">
            {/* <Redirect to="/login" /> */}
            <div className="left-panel">
                <General />
            </div>
            <div className="right-panel">

                <Header />
                <Outlet />
                <div className="footer" style={{ backgroundColor: store.theme.bgColor, color: store.theme.textColor }}>
                    <p>
                        Copyright 2024 © Crocs theme by pixelstrap.
                    </p>
                </div>
            </div>
        </div>
        <div className="modal-window-bag" style={{ display:store.modalWindow}}>
                <div className="modal-window" style={{backgroundColor:store.theme.bgColor, color:store.theme.textColor}}>
                  <div className="top">
                    <h3>Create new category</h3> <button onChange={()=>{setStore({type:'changeModalDisplay',modalWindow:'none'})}}><ImCancelCircle size={30} color={store.theme.textColor}/></button>
                  </div>
                </div>
          </div>
        </>

    );
}

export default CurrentPage;
