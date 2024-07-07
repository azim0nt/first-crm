import './style.scss';
import { IoSearch, IoInvertMode } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { FaBookmark, FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Profile from '../../assets/images/profile.png';
import { useContext, useEffect } from 'react';
import { context } from '../../store';

function Header() {
    const { store, setStore } = useContext(context);

    const handleThemeChange = () => {
        const newTheme = store.theme === 'light' ? 'dark' : 'light';
        setStore({ type: 'changeTheme', theme: newTheme });

        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setStore({ type: 'changeTheme', theme: storedTheme });
        }
    }, [setStore]);

    return (
        <div className={`header-wrapper ${store.theme}-cardd`}>
            <div className="header-content">
                <div className="left">
                    <div className={`input-wrapper ${store.theme}-bg`}>
                        <IoSearch size={30} color="#6A7185" />{' '}
                        <input type="text" placeholder="Search anything" />
                    </div>
                </div>
                <div className="right">
                    <div className={`notifications icon ${store.theme}-icon`}>
                        <IoMdNotifications size={20} color="#5c61f2" />
                    </div>
                    <div className={`bookmark icon ${store.theme}-icon`}>
                        <FaBookmark size={20} color="#5c61f2" />
                    </div>
                    <div className={`theme icon ${store.theme}-icon`}>
                        <button onClick={handleThemeChange}>
                            <IoInvertMode size={20} color="#5c61f2" />
                        </button>
                    </div>
                    <div className={`message icon ${store.theme}-icon`}>
                        <MdEmail size={20} color="#5c61f2" />
                    </div>
                    <div className={`cart icon ${store.theme}-icon`}>
                        <FaShoppingCart size={20} color="#5c61f2" />
                    </div>
                    <div className="user">
                        <div className="avatar">
                            <img src={Profile} alt="" />
                        </div>
                        <div className="info">
                            <div className="fullname">
                                <p>Alen Miller</p>
                            </div>
                            <div className="profession">
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
