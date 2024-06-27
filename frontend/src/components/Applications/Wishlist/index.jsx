import './style.scss'
import { useContext } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import User1 from '../../../assets/images/users-3/image_1.jpg'
import User2 from '../../../assets/images/users-3/image_2.jpg'
import User3 from '../../../assets/images/users-3/image_3.jpg'
import User4 from '../../../assets/images/users-3/image_4.jpg'
import User5 from '../../../assets/images/users-3/image_5.jpg'
import User6 from '../../../assets/images/users-3/image_6.jpg'
import User7 from '../../../assets/images/users-3/image_7.jpg'
import User8 from '../../../assets/images/users-3/image_8.jpg'
import User9 from '../../../assets/images/users-3/image_9.jpg'
import User10 from '../../../assets/images/users-3/image_10.jpg'
import User11 from '../../../assets/images/users-3/image_11.jpg'
import User12 from '../../../assets/images/users-3/image_12.jpg'
import User13 from '../../../assets/images/users-3/image_13.jpg'
import User14 from '../../../assets/images/users-3/image_14.jpg'
import User15 from '../../../assets/images/users-3/image_15.jpg'
import { FaStar } from "react-icons/fa";
function Wishlist() {
    const { store, setStore } = useContext(context)
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const images = [
        User1,
        User2,
        User3,
        User4,
        User5,
        User6,
        User7,
        User8,
        User9,
        User10,
        User11,
        User12,
        User13,
        User14,
        User15
    ]
    return (
        <>
            <div className="wishlist-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="wishlist-content">
                    <div className="top">
                        <h3>Wishlist</h3>
                        <PathToTab parent={'ECommerce'} tab={'Wishlist'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="wishlist-card" style={cardStyle}>
                                <h4>Wishlist</h4>
                                <div className="cards">
                                    {
                                        images.map((image, i) =>{
                                            return (
                                                <div className="cardd" key={i} style={cardStyle}>
                                                    <div className="left-part">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <div className="middle-part">
                                                        <p className="product">
                                                        Women Top
                                                        </p>
                                                        <div className="stars">
                                                            <FaStar color='#FFAF45'/>
                                                            <FaStar color='#FFAF45'/>
                                                            <FaStar color='#FFAF45'/>
                                                            <FaStar color='#FFAF45'/>
                                                            <FaStar color='#FFAF45'/>
                                                        </div>
                                                        <p className="price">
                                                        Price : 210$
                                                        </p>
                                                        <p className="stock">
                                                        In stock
                                                        </p>
                                                    </div>
                                                    <div className="right-part">
                                                        <div>
                                                        <button className="blue-btn">
                                                            Move to Cart
                                                        </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;