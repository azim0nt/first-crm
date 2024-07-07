import './style.scss'
import PathToTab from '../../common/PathToTab'
import { useContext } from 'react';
import { context } from '../../../store'
import Avatar from '../../../assets/images/avatar.jpg'
import userProjectData from '../../../db/userProjectData.json'
function UserEdit() {
    const { store, setContext } = useContext(context)
    return (
        <>
            <div className={"user-edit-wrapper "+store.theme+'-bg'} >
                <div className="user-edit-content">
                    <div className="top">
                        <h3>Edit Profile</h3>
                        <PathToTab parent={'Users'} tab={'Edit Profile'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"my-profile-card "+store.theme+'-cardd'}>
                                <h4>My Profile</h4>
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
                                    <h4>Bio</h4>
                                    <textarea className={store.theme+'-input'} name="" id="" >On the other hand, we denounce with righteous indignation</textarea>
                                </div>
                                <div className="email-address">
                                    <h3>Email-Address</h3>
                                    <input className={store.theme+'-input'} type="text" placeholder='your-email@domain.com'  />
                                </div>
                                <div className="password">
                                    <h3>Password</h3>
                                    <input className={store.theme+'-input'} type="password"  />
                                </div>
                                <div className="website">
                                    <h3>Website</h3>
                                    <input className={store.theme+'-input'} type="password"  />
                                </div>
                                <div>
                                    <button className="blue-btn">Save</button>
                                </div>
                            </div>
                            <div className={"edit-rofile-card "+store.theme+'-cardd'}>
                                <h4>Edit Profile</h4>
                                <div className="company-username-email">
                                    <div className="company">
                                        <h4>Company</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Company' />
                                    </div>
                                    <div className="username">
                                        <h4>Username</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Username' />
                                    </div>
                                    <div className="email">
                                        <h4>Email address</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Email' />
                                    </div>
                                </div>
                                <div className="company-name">
                                    <div className="first-name">
                                        <h4>First Name</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Company' />
                                    </div>
                                    <div className="last-name">
                                        <h4>Last Name</h4>
                                        <input className={store.theme+'-input'} type="text"  placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className="address">
                                    <h4>Address</h4>
                                    <input className={store.theme+'-input'} type="text" placeholder='Home Address'  />
                                </div>
                                <div className="city-zip-country">
                                    <div className="city">
                                        <h4>City</h4>
                                        <input className={store.theme+'-input'} type="text" placeholder='City'  />

                                    </div>
                                    <div className="postral-code">
                                        <h4>City</h4>
                                        <input className={store.theme+'-input'} type="text" placeholder='ZIP Code'  />

                                    </div>
                                    <div className="country">
                                        <h4>Country</h4>
                                        <select className={store.theme+'-input'} >
                                            <option value="usa">USA</option>
                                            <option value="usa">USA</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="about-me">
                                        <h4>About me</h4>

                                        <textarea className={store.theme+'-input'}  placeholder='Enter About description'></textarea>
                                </div>
                                <div className='button'>
                                    <button className='blue-btn'>Update Profile</button>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"projects "+store.theme+'-cardd'}>
                            <h4>Add projects And Upload</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Price</th>
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