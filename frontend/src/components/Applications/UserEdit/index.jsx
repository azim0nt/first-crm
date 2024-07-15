import './style.scss'
import PathToTab from '../../common/PathToTab'
import { useContext } from 'react';
import { context } from '../../../store'
import Avatar from '../../../assets/images/avatar.jpg'
import userProjectData from '../../../db/userProjectData.json'
import { useTranslation } from 'react-i18next'
function UserEdit() {
    const { store, setContext } = useContext(context)
    const { t } = useTranslation();
    return (
        <>
            <div className={"user-edit-wrapper "+store.theme+'-bg'} >
                <div className="user-edit-content">
                    <div className="top">
                        <h3>{t('user_edit.title')}</h3>
                        <PathToTab parent={t('user_edit.path_to_tab.parent')} tab={t('user_edit.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"my-profile-card "+store.theme+'-cardd'}>
                                <h4>{t('user_edit.my_profile_card.title')}</h4>
                                <div className="account">
                                    <span>
                                        <img src={Avatar} alt="" />
                                        <span>

                                            <p className="fullname">
                                                MARK JECNO
                                            </p>
                                            <p className="job">
                                                DESIGNER
                                            </p>
                                        </span>
                                    </span>
                                </div>
                                <div className="bio">
                                    <h3>{t('user_edit.my_profile_card.bio')}</h3>  
                                    <textarea className={store.theme+'-input'} name="" id="" ></textarea>
                                </div>
                                <div className="email-address">
                                    <h3>{t('user_edit.my_profile_card.email')}</h3>
                                    <input className={store.theme+'-input'} type="text" placeholder='your-email@domain.com'  />
                                </div>
                                <div className="password">
                                    <h3>{t('user_edit.my_profile_card.passwd')}</h3>
                                    <input className={store.theme+'-input'} type="password"  />
                                </div>
                                <div className="website">
                                    <h3>{t('user_edit.my_profile_card.website')}</h3>
                                    <input className={store.theme+'-input'} type="password"  />
                                </div>
                                <div>
                                    <button className="blue-btn">{t('user_edit.my_profile_card.save')}</button>
                                </div>
                            </div>
                            <div className={"edit-rofile-card "+store.theme+'-cardd'}>
                                <h4>{t('user_edit.edit_profile_card.title')}</h4>
                                <div className="company-username-email">
                                    <div className="company">
                                        <h4>{t('user_edit.edit_profile_card.company')}</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Company' />
                                    </div>
                                    <div className="username">
                                        <h4>{t('user_edit.edit_profile_card.username')}</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Username' />
                                    </div>
                                    <div className="email">
                                        <h4>{t('user_edit.edit_profile_card.email')}</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Email' />
                                    </div>
                                </div>
                                <div className="company-name">
                                    <div className="first-name">
                                        <h4>{t('user_edit.edit_profile_card.first_name')}</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Company' />
                                    </div>
                                    <div className="last-name">
                                        <h4>{t('user_edit.edit_profile_card.last_name')}</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className="address">
                                    <h4>{t('user_edit.edit_profile_card.address')}</h4>
                                    <input className={store.theme+'-input'} type="text" placeholder='Home Address'  />
                                </div>
                                <div className="city-zip-country">
                                    <div className="city">
                                        <h4>{t('user_edit.edit_profile_card.city')}</h4>
                                        <input className={store.theme+'-input'} type="text" placeholder='City'  />

                                    </div>
                                    <div className="postral-code">
                                        <h4>{t('user_edit.edit_profile_card.city')}</h4>
                                        <input className={store.theme+'-input'} type="text" placeholder='ZIP Code'  />

                                    </div>
                                    <div className="country">
                                        <h4>{t('user_edit.edit_profile_card.country')}</h4>
                                        <select className={store.theme+'-input'} >
                                            <option value="usa">USA</option>
                                            <option value="usa">USA</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="about-me">
                                        <h4>{t('user_edit.edit_profile_card.about_me')}</h4>

                                        <textarea className={store.theme+'-input'}  placeholder='Enter About description'></textarea>
                                </div>
                                <div className='button'>
                                    <button className='blue-btn'>{t('user_edit.edit_profile_card.button')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"projects "+store.theme+'-cardd'}>
                            <h4>{t('user_edit.projects.title')}</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{t('user_edit.projects.project_name')}</th>
                                        <th>{t('user_edit.projects.date')}</th>
                                        <th>{t('user_edit.projects.status')}</th>
                                        <th>{t('user_edit.projects.price')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userProjectData.map((project, i) =>{
                                            return(
                                                <tr key={i}>
                                                    <td>{project.projec}</td>
                                                    <td>{project.date}</td>
                                                    <td>{project.status}</td>
                                                    <td>{project.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserEdit;