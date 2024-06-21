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
        const newBgColor = store.theme.bgColor === '#171829' ? '#FFFFFF' : '#171829';
        const newTextColor = store.theme.textColor === '#ffffff99' ? '#171829' : '#ffffff99';
        const newBackBgColor = store.theme.backBgColor === '#f2f5fa' ? '#10101c' : '#f2f5fa';
        const newTheme = { bgColor: newBgColor, textColor: newTextColor, backBgColor: newBackBgColor };
        setStore({ type: 'changeTheme', theme: newTheme });

      
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setStore({ type: 'changeTheme', theme: JSON.parse(storedTheme) });
        }
    }, [setStore]);

    return (
        <div className="header-wrapper" style={{ backgroundColor: store.theme.bgColor, color: store.theme.textColor }}>
            <div className="header-content">
                <div className="left">
                    <div className="input-wrapper" style={{ backgroundColor: store.theme.backBgColor }}>
                        <IoSearch size={30} color="#6A7185" />{' '}
                        <input type="text" placeholder="Search anything" />
                    </div>
                </div>
                <div className="right">
                    <div className="notifications icon" style={{ backgroundColor: store.theme.backBgColor }}>
                        <IoMdNotifications size={20} color="#5c61f2" />
                    </div>
                    <div className="bookmark icon" style={{ backgroundColor: store.theme.backBgColor }}>
                        <FaBookmark size={20} color="#5c61f2" />
                    </div>
                    <div className="theme icon" style={{ backgroundColor: store.theme.backBgColor }}>
                        <button onClick={handleThemeChange}>
                            <IoInvertMode size={20} color="#5c61f2" />
                        </button>
                    </div>
                    <div className="message icon" style={{ backgroundColor: store.theme.backBgColor }}>
                        <MdEmail size={20} color="#5c61f2" />
                    </div>
                    <div className="cart icon" style={{ backgroundColor: store.theme.backBgColor }}>
                        <FaShoppingCart size={20} color="#5c61f2" />
                    </div>
                    <div className="user">
                        <div className="avatar">
                            <img src={Profile} alt="" />
                        </div>
                        <div className="info" style={{ color: store.theme.textColor }}>
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
