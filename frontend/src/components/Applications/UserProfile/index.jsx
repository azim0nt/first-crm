import './style.scss'
import PathToTab from '../../common/PathToTab'
import { context } from '../../../store'
import { useContext } from 'react';
import BgProfile from '../../../assets/images/bg-profile.png'
import Avatar from '../../../assets/images/avatar.jpg'
import PostImage1 from '../../../assets/images/profile-style-img3.png'
import PostImage2 from '../../../assets/images/profile-style-img.png'
import PostImage3 from '../../../assets/images/img.png'
import { useTranslation } from 'react-i18next'
import { IoCall, IoNavigate } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";

function UserProfile() {
    const { store, setStore } = useContext(context)
    const { t } = useTranslation()
    return (
        <>
            <div className={"user-profile-wrapper "+store.theme+'-bg'}>  
                <div className="user-profile-content ">
                    <div className="top">
                        <h3>{t('user_profile.title')}</h3>
                        <PathToTab parent={t('user_profile.path_to_tab.parent')} tab={t('user_profile.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"profile-card "+store.theme+'-cardd' }>
                                <div className="header">
                                    <img src={BgProfile} alt="" />
                                </div>
                                <div className="info">
                                    <img src={Avatar} className='avatar' style={{ border: `10px solid ${store.theme.bgColor}` }} alt="" />

                                    <div className="left info">
                                        <span>
                                            <p><MdEmail size={20} color={store.theme.textColor} />{t('user_profile.profile_card.email')}</p>
                                            <p>Marekjecno@yahoo.com</p>
                                        </span>
                                        <span>
                                            <p><FaRegCalendarAlt size={20} color={store.theme.textColor} /> {t('user_profile.profile_card.bod')}</p>
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
                                            <p><IoCall size={20} color={store.theme.textColor} />{t('user_profile.profile_card.contact_us')}</p>
                                            <p>India +91 123-456-7890</p>
                                        </span>
                                        <span>  
                                            <p><IoNavigate size={20} color={store.theme.textColor} />{t('user_profile.profile_card.location')}</p>
                                            <p>B69 Near Schoool Demo Home</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="social-media">
                                    <div className="icons">
                                        <a href="facebook.com"><FaFacebookF size={20} color={store.theme.textColor} /></a>
                                        <a href="google.com"><FaGoogle size={20} color={store.theme.textColor} /></a>
                                        <a href="x.com"><FaTwitter size={20} color={store.theme.textColor} /></a>
                                        <a href="instagram.com"><FaInstagram size={20} color={store.theme.textColor} /></a>
                                    </div>
                                </div>
                                <div className="followers">
                                    <span>
                                        <p>25869</p>
                                        <p>Followers</p>
                                    </span>
                                    <span>
                                        <p>
                                            659887
                                        </p>
                                        <p>Following</p>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="section-2">
                            <div className={"post 1 "+store.theme+'-cardd'}>
                                <div className="top-part">
                                    <span><img src={Avatar} alt="" /> <p className="name">JOHAN DIO</p></span>
                                    <span><p className="date">10 Hours ago</p></span>
                                </div>
                                <div className="bottom-part">
                                    <p className="about">
                                        Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.
                                    </p>
                                    <div className="image">
                                        <img src={PostImage1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={"post two "+store.theme+'-cardd'}>
                                <div className="top-part">
                                    <span><img src={Avatar} alt="" /> <p className="name">JOHAN DIO</p></span>
                                    <span><p className="date">10 Hours ago</p></span>
                                </div>
                                <div className="bottom-part">
                                    <div className="about">
                                        <p>
                                            Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.
                                        </p>
                                    </div>
                                    <div className="image">
                                    <img src={PostImage2} alt="" />
                                    <img src={PostImage2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={"post 3 "+store.theme+'-cardd'}>
                                <div className="top-part">
                                    <span><img src={Avatar} alt="" /> <p className="name">JOHAN DIO</p></span>
                                    <span><p className="date">10 Hours ago</p></span>
                                </div>
                                <div className="bottom-part">
                                    <p>
                                    Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes.
                                    </p>
                                </div>
                            </div>
                            <div className={"post four "+store.theme+'-cardd'}>
                                <div className="top-part">
                                    <span><img src={Avatar} alt="" /> <p className="name">JOHAN DIO</p></span>
                                    <span><p className="date">10 Hours ago</p></span>
                                </div>
                                <div className="bottom-part">
                                    <div className="image-about">
                                        <img src={PostImage3} alt="" /> <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
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