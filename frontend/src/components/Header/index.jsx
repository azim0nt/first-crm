import './style.scss'
import { IoSearch, IoInvertMode  } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaBookmark, FaShoppingCart  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Profile from '../../assets/images/profile.png';
function Header() {
    return ( 
        <>
        <div className="header-wrapper">
            <div className="header-content">
                <div className="left">
                    <div className="input-wrapper">
                        <IoSearch size={30} color='#6A7185' /> <input type="text" placeholder='Search anything' />
                    </div>
                </div>
                <div className="right">
                    <div className="notifications icon">
                        <IoMdNotifications size={20} color='#5c61f2' />
                    </div>
                    <div className="bookmark icon">
                        <FaBookmark size={20} color='#5c61f2'/>
                    </div>
                    <div className="theme icon">
                        <IoInvertMode size={20} color='#5c61f2' />
                    </div>
                    <div className="message icon">
                        <MdEmail size={20} color='#5c61f2' />
                    </div>
                    <div className="cart icon">
                        <FaShoppingCart size={20} color='#5c61f2' />
                    </div>
                    <div className="user">
                        <div className="avatar">
                        <img src={Profile} alt="" />
                        </div>
                        <div className="info">
                            <div className="fullname">
                                Alen Miller
                            </div>
                            <div className="profession">
                                UI DEsigner
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Header;