import './style.scss'
import User1 from '../../../assets/images/users-2/user1.jpg'
import User2 from '../../../assets/images/users-2/user2.jpg'
import User3 from '../../../assets/images/users-2/user3.jpg'
import User4 from '../../../assets/images/users-2/user4.jpg'
import User5 from '../../../assets/images/users-2/user5.jpg'
import User6 from '../../../assets/images/users-2/user6.jpg'
import User7 from '../../../assets/images/users-2/user7.jpg'
import User8 from '../../../assets/images/users-2/user8.jpg'
import { useContext } from 'react'
import {context} from '../../../store/'
import PathToTab from '../../common/PathToTab'
import userCardData from '../../../db/userCardData.json'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
function UserCards() {
    const {store, setStore} = useContext(context)
    const {t} = useTranslation()
    const images = [User1, User2, User3, User4, User5, User6, User7, User8]
    return ( 
        <>
       <div className={"user-cards-wrapper "+store.theme+'-bg'}  >
        <div className="user-cards-content">
            <div className="top">
                <h3>{t('user_cards.title')}</h3>
                <PathToTab parent={t('user_cards.path_to_tab.parent')} tab={t('user_cards.path_to_tab.tab')}/>
            </div>
            <div className="middle">
                <div className="section-1">
                    <div className="cards">
                        {userCardData.map((user, index)=>{
                            return (
                                <div key={index} className={"card  "+store.theme+'-cardd'}>
                                    <div className="top-part">
                                        <div className="image-bg">
                                            <div>
                                            <img src={images[index]} alt="" />
                                            </div>
                                        </div>

                                        <div className="name">
                                            <h5>{user.fullname}</h5>
                                            <p>{user.username}</p>
                                        </div>
                                    </div>
                                    <div className="middle-part">
                                    <div className="social-media">
                                    <div className="icons">
                                        <a href="https://facebook.com"><FaFacebookF size={15} color={'#5c61f2'} /></a>
                                        <a href="https://google.com"><FaGoogle size={15} color={'#5c61f2'} /></a>
                                        <a href="https://x.com"><FaTwitter size={15} color={'#5c61f2'} /></a>
                                        <a href="https://instagram.com"><FaInstagram size={15} color={'#5c61f2'} /></a>
                                    </div>
                                </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="activ">
                                            <div className="posts">
                                                <h5>460</h5>
                                                <p>{t('user_cards.card.posts')}</p>
                                            </div>
                                            <div className="followers">
                                                <h5>3.5k</h5>
                                                <p>{t('user_cards.card.followers')}</p>
                                            </div>
                                            <div className="following">
                                                <h5>724</h5>
                                                <p>{t('user_cards.card.following')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
       </div>
        </>
     );
}

export default UserCards;