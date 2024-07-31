import './style.scss';
import { useContext, useEffect, useState, useRef } from 'react';
import { context } from '../../../store/';
import PathToTab from '../../common/PathToTab';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IMaskInput } from 'react-imask';

function UserCards() {
    const { store } = useContext(context);
    const [users, setUsers] = useState([]);
    const [cities, setCities] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCityId, setSelectedCityId] = useState(null);
    const [regions, setRegions] = useState([]);
    const [roles, setRoles] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    const [error, setError] = useState('');
    const [modal, setModal] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthday: '',
        tuman: '',
        viloyat: '',
        role_id: '',
        phone: ''
    });

    const ref = useRef(null);
    const inputRef = useRef(null);
    const { t } = useTranslation();
    const token = localStorage.token;

    const handleAccept = (value) => {
        setPhoneNumber(value);
        setFormData(prev => ({ ...prev, phone: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCityChange = (event) => {
        const selectedCityName = event.target.value;
        const selectedCity = cities.find(city => city.name_oz === selectedCityName);
        if (selectedCity) {
            setSelectedCityId(selectedCity.id);
            setFormData(prev => ({ ...prev, viloyat: selectedCity.id }));
        } else {
            setSelectedCityId(null);
            setRegions([]);
            setFormData(prev => ({ ...prev, viloyat: '' }));
        }
    };

    const handleRegionChange = (event) => {
        const selectedRegionId = event.target.value;
        setSelectedRegion(selectedRegionId);
        setFormData(prev => ({ ...prev, tuman: selectedRegionId }));
    };

    const handleRoleChange = (event) => {
        const selectedRoleId = event.target.value;
        setSelectedRole(selectedRoleId);
        setFormData(prev => ({ ...prev, role_id: selectedRoleId }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${store.url}admin/add_worker`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    '-x-token': token
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 202) {
                const responseData = await response.json();
                alert(`Warning: ${responseData.error}`); // Используем alert вместо message.warning
            } else if (response.status === 201) {
                alert(`${formData.firstname} муваффақиятли яратилди`); // Используем alert вместо message.success
                // Reset form and close modal
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    birthday: '',
                    tuman: '',
                    viloyat: '',
                    role_id: '',
                    phone: ''
                });
                setPhoneNumber('');
                setModal(''); // or set to 'inactive' to close the modal
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.'); // Используем alert вместо message.error
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const workersResponse = await fetch(`${store.url}admin/get_worker?${new URLSearchParams({ page: 1, size: 1000 }).toString()}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': token,
                    },
                });
                if (workersResponse.status === 401) {
                    setError('Unauthorized');
                    return;
                }
                if (workersResponse.status === 200) {
                    const workersData = await workersResponse.json();
                    setUsers(workersData);
                }
                const citiesResponse = await fetch(`${store.url}admin/regions`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': token,
                    },
                });
                if (citiesResponse.status === 401) {
                    return;
                }
                if (citiesResponse.status === 200) {
                    const citiesData = await citiesResponse.json();
                    setCities(citiesData);
                }
                const roleResponse = await fetch(`${store.url}admin/get_role`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': token,
                    },
                });
                if (roleResponse.status === 401) {
                    return;
                }
                if (roleResponse.status === 200) {
                    const roleData = await roleResponse.json();
                    setRoles(roleData);
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        fetchData();
    }, [store.url, token]);

    useEffect(() => {
        const fetchRegions = async () => {
            if (!selectedCityId) return;
            try {
                const regionResponse = await fetch(`${store.url}admin/regions/districts/${selectedCityId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': token,
                    }
                });
                if (regionResponse.status === 401) {
                    return;
                }
                if (regionResponse.status === 200) {
                    const regionData = await regionResponse.json();
                    setRegions(regionData);
                }
            } catch (error) {
                setError('An error occurred while fetching regions. Please try again.');
            }
        };
        fetchRegions();
    }, [selectedCityId, store.url, token]);

    return (
        <>
            <div className={`user-cards-wrapper ${store.theme}-bg`}>
                <div className="user-cards-content">
                    <div className="top">
                        <h3>{t('user_cards.title')}</h3>
                        <PathToTab parent={t('user_cards.path_to_tab.parent')} tab={t('user_cards.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="blue-btn" onClick={()=>{setModal('active')}}>
                                Add new user
                            </div>
                            <div className="cards">
                                {users.map((user, index) => (
                                    <div key={index} className={`card ${store.theme}-cardd`}>
                                        <div className="top-part">
                                            <div className="image-bg">
                                                <div>
                                                    <FaRegUserCircle size={70} />
                                                </div>
                                            </div>
                                            <div className="name">
                                                <h5>{user.lastname} {user.firstname}</h5>
                                                <h5><b>Role: </b>{user.role_name}</h5>
                                                <p><b>Email: </b>{user.email}</p>
                                                <p><b>City: </b>{user.name_oz}</p>
                                                <p><b>Region: </b>{user.tuman_lotin}</p>
                                            </div>
                                        </div>
                                        <div className="middle-part">
                                            {/* <div className="social-media">
                                                <div className="icons">
                                                    <a href="https://facebook.com"><FaFacebookF size={15} color={'#5c61f2'} /></a>
                                                    <a href="https://google.com"><FaGoogle size={15} color={'#5c61f2'} /></a>
                                                    <a href="https://x.com"><FaTwitter size={15} color={'#5c61f2'} /></a>
                                                    <a href="https://instagram.com"><FaInstagram size={15} color={'#5c61f2'} /></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modalbg ${modal}`}>
                    <div className={`modal-content ${store.theme}-bg`}>
                    <div className="top">
                        <h2>New user</h2><button onClick={()=>{setModal('')}}><MdCancel size={30}/></button>
                    </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className={`${store.theme}-input`}
                                placeholder='Firstname'
                                required
                            />
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className={`${store.theme}-input`}
                                placeholder='Lastname'
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${store.theme}-input`}
                                placeholder='Email'
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`${store.theme}-input`}
                                placeholder='Password'
                                required
                            />
                            <input
                                type="date"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                className={`${store.theme}-input`}
                                placeholder="Birthday"
                                required
                            />
                            <select
                                className={`${store.theme}-input`}
                                onChange={handleCityChange}
                                value={cities.find(city => city.id === selectedCityId)?.name_oz || ''}
                            >
                                <option value="" disabled>Select City</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.name_oz}>{city.name_oz}</option>
                                ))}
                            </select>
                            <select
                                className={`${store.theme}-input`}
                                onChange={handleRegionChange}
                                value={selectedRegion || ''}
                            >
                                <option value="" disabled>Select Region</option>
                                {regions.map((region) => (
                                    <option key={region.id} value={region.id}>{region.name_oz}</option>
                                ))}
                            </select>
                            <select
                                className={`${store.theme}-input`}
                                onChange={handleRoleChange}
                                value={selectedRole || ''}
                            >
                                <option value="" disabled>Select Role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>{role.name}</option>
                                ))}
                            </select>
                            <IMaskInput
                                mask='+998 (00) 000-00-00'
                                definitions={{
                                    '0': {
                                        mask: Number,
                                        lazy: false
                                    }
                                }}
                                overwrite={true}
                                unmask={true}
                                ref={ref}
                                inputRef={inputRef}
                                onAccept={handleAccept}
                                value={phoneNumber}
                                className={`${store.theme}-input`}
                                placeholder='Phone Number'
                            />
                            <button type="submit" className={`blue-btn`}>Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCards;
