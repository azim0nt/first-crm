import './style.scss'
import { useContext, useState } from 'react';
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
import { ImCancelCircle } from "react-icons/im";
function OrderHistory() {
    const { store, setStore } = useContext(context)


    const [images1, setImages1] = useState([User1, User2, User3, User4, User5, User6, User7, User8, User9]);
    const [images2, setImages2] = useState([User1, User2, User3, User4, User5, User6, User7, User8, User9]);
    const [images3, setImages3] = useState([User1, User2, User3, User4, User5, User6, User7, User8, User9]);

    const removeCard1 = (index) => {
        const newImages = [...images1];
        newImages.splice(index, 1);
        setImages1(newImages);
    };

    const removeCard2 = (index) => {
        const newImages = [...images2];
        newImages.splice(index, 1);
        setImages2(newImages);
    };

    const removeCard3 = (index) => {
        const newImages = [...images3];
        newImages.splice(index, 1);
        setImages3(newImages);
    };

    return (
        <>
            <div className={"order-history-wrapper "+store.theme+'-bg'}>
                <div className="order-history-content">
                    <div className="top">
                        <h3>Recent History</h3>
                        <PathToTab parent={'ECommerce'} tab={'Order History'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"new-orders-card "+store.theme+'-cardd'}>
                                <h4>New Orders</h4>
                                <div className="cards">
                                    {
                                        images1.map((image, i) => {
                                            return (
                                                <div className="cardd" key={i}>
                                                    <div className="left-part">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <div className="middle-part">
                                                        <p className="product">
                                                            Women Top
                                                        </p>
                                                        <div className="stars">
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
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
                                                            <button  onClick={() => removeCard1(i)}>
                                                                <ImCancelCircle  className={store.theme+'-text'}/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="blue-btn" >
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
                            <div className={"new-orders-card "+store.theme+'-cardd'}>
                                <h4>New Orders</h4>
                                <div className="cards">
                                    {
                                        images2.map((image, i) => {
                                            return (
                                                <div className="cardd" key={i}>
                                                    <div className="left-part">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <div className="middle-part">
                                                        <p className="product">
                                                            Women Top
                                                        </p>
                                                        <div className="stars">
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
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
                                                            <button  onClick={() => removeCard2(i)}>
                                                                <ImCancelCircle color={store.theme.textColor}/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="blue-btn" >
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
                            <div className={"new-orders-card "+store.theme+'-cardd'}>
                                <h4>New Orders</h4>
                                <div className="cards">
                                    {
                                        images3.map((image, i) => {
                                            return (
                                                <div className="cardd" key={i}>
                                                    <div className="left-part">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <div className="middle-part">
                                                        <p className="product">
                                                            Women Top
                                                        </p>
                                                        <div className="stars">
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
                                                            <FaStar color='#FFAF45' />
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
                                                            <button  onClick={() => removeCard3(i)}>
                                                                <ImCancelCircle color={store.theme.textColor}/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="blue-btn" >
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

export default OrderHistory;