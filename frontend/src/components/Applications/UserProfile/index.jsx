import './style.scss'
import PathToTab from '../../common/PathToTab'
import {context} from '../../../store'
import { useContext } from 'react';
import BgProfile from '../../../assets/images/bg-profile.png'
import Avatar from '../../../assets/images/avatar.jpg'
import { MdEmail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoNavigate } from "react-icons/io5";
function UserProfile() {
    const {store, setStore} = useContext(context)
    return ( 
        <>
        <div className="user-profile-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="user-profile-content">
                <div className="top">
                    <h3>User Profile</h3>
                    <PathToTab parent={'User'} tab={'User Profile'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className="profile-card" style={{backgroundColor:store.theme.bgColor, color:store.theme.textColor}}>
                            <div className="header">
                                <img src={BgProfile} alt="" />
                            </div>
                            <div className="info">
        <img src={Avatar} className='avatar' style={{border:`10px solid ${store.theme.bgColor}`}} alt="" />
                                <div className="left info">
                                    <span>
                                        <p><MdEmail size={20} color={store.theme.textColor}/> Email</p>
                                        <p>Marekjecno@yahoo.com</p>
                                    </span>
                                    <span>
                                        <p><FaRegCalendarAlt size={20} color={store.theme.textColor}/> BOD</p>
                                        <p>02 January 1988</p>
                                    </span>
                                </div>
                                <div className="middle">
                                    <p className="fullname">
                                    MARK JECNO
                                    </p>
                                    <div className="job">
                                    DESIGNER
                                    </div>
                                </div>
                                <div className="right info">
                                    <span>
                                        <p><IoCall size={20} color={store.theme.textColor}/> Contact Us</p>
                                        <p>India +91 123-456-7890</p>
                                    </span>
                                    <span>
                                        <p><IoNavigate  size={20} color={store.theme.textColor}/> Location</p>
                                        <p>B69 Near Schoool Demo Home</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default UserProfile;