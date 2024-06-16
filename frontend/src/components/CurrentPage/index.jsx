// CurrentPage.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import General from '../General';

function CurrentPage() {
    return (
        <div className="body">
            <div className="left-panel">
                <General />
            </div>
            <div className="right-panel">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default CurrentPage;
