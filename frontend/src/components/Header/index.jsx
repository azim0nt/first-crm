import './style.scss';
import { IoSearch, IoInvertMode, IoLanguageSharp } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { FaBookmark, FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Profile from '../../assets/images/profile.png';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../store';
import { useTranslation } from 'react-i18next';

function Header() {
    const { store, setStore } = useContext(context);
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'ru');

    const handleChangeLanguage = (language) => {
        setCurrentLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        setStore({ type: "CHANGE_LANG", currentLanguage: language });
    };

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

        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setCurrentLanguage(storedLanguage);
            i18n.changeLanguage(storedLanguage);
        }
    }, [setStore, i18n]);

    return (
        <div className={`header-wrapper`}>
            <div className={"header-content " + store.theme + '-cardd'}>
   
                <div className="content">
                    <div className="icons">
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
                        <div className={"change_lang icon " + store.theme + '-icon'}>
                            <IoLanguageSharp size={20} color="#5c61f2" />
                            <div className={"dropdown " + store.theme + '-cardd'}>
                                <div
                                    className={`lang ${currentLanguage === 'ru' ? 'active' : ''} `}
                                    onClick={() => handleChangeLanguage('ru')}
                                >
                                    Русский
                                </div>
                                <div
                                    className={`lang ${currentLanguage === 'uz' ? 'active' : ''} `}
                                    onClick={() => handleChangeLanguage('uz')}
                                >
                                    O'zbek
                                </div>
                            </div>
                        </div>
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
