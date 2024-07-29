import './style.scss'
import User1 from '../../../assets/images/users-2/user1.jpg'
import User2 from '../../../assets/images/users-2/user2.jpg'
import User3 from '../../../assets/images/users-2/user3.jpg'
import User4 from '../../../assets/images/users-2/user4.jpg'
import User5 from '../../../assets/images/users-2/user5.jpg'
import User6 from '../../../assets/images/users-2/user6.jpg'
import User7 from '../../../assets/images/users-2/user7.jpg'
import User8 from '../../../assets/images/users-2/user8.jpg'
import { useContext,useEffect,useState } from 'react'
import {context} from '../../../store/'
import PathToTab from '../../common/PathToTab'
import userCardData from '../../../db/userCardData.json'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegCalendarAlt , FaRegUserCircle} from "react-icons/fa";
function UserCards() {
    const {store, setStore} = useContext(context)
    const [users, setUsers] = useState([])
    const [modal, setModal] = useState('active')
    const {t} = useTranslation()
    const images = [User1, User2, User3, User4, User5, User6, User7, User8];
    // useEffect( async ()=>{

    //     const token = localStorage.token;
    //     console.log(token);
    //     try {
    //         const response = await fetch(`${store.url}admin/get_worker?${new URLSearchParams({page : 1, size : 1000}).toString()}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 '-x-token': token,
    //             },
    //         });

    //         if (response.status === 401) {
    //             return;
    //         }

    //         if (response.status === 200) {
    //             const data = await response.json();
    //             setUsers(data)
    //         }
    //     } catch (error) {
    //         setError('An error occurred. Please try again.');
    //     }   
    // },[])
    console.log(users)
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
                        {users.map((user, index)=>{
                            return (
                                <div key={index} className={"card  "+store.theme+'-cardd'}>
                                    <div className="top-part">
                                        <div className="image-bg">
                                            <div>
                                            <FaRegUserCircle size={70}/>
                                            </div>
                                        </div>

                                        <div className="name">
                                            <h5>{user.lastname} {user.firstname}</h5>
                                            <h5>{user.role_name}</h5>
                                            <p>{user.email}</p>
                                            <p>{user.name_oz}</p>
                                            <p>{user.tuman_lotin}</p>
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
            <div className={`modalbg ${modal}`}>
                <div className={`modal-content ${store.theme}-bg`}>
                    <input type="text" className={`${store.theme}-input`} placeholder='Firstname' />
                    <input type="text" className={`${store.theme}-input`} placeholder='Lastname' />
                    <input type="email" className={`${store.theme}-input`} placeholder='Email' />
                    <input type="password" className={`${store.theme}-input`} placeholder='Password' />
                    <input type="password" className={`${store.theme}-input`} placeholder='Password' />
                </div>
            </div>
       </div>
        </>
     );
}

export default UserCards;