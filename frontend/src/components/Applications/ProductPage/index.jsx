import './style.scss'
import { useContext } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product1 from '../../../assets/images/products-2/image_1.jpg'
import Product2 from '../../../assets/images/products-2/image_2.jpg'
import Product3 from '../../../assets/images/products-2/image_3.jpg'
import Product4 from '../../../assets/images/products-2/image_4.jpg'
import Product5 from '../../../assets/images/products-2/image_5.jpg'
import Product6 from '../../../assets/images/products-2/image_6.jpg'
import { BsCart4 } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";

function ProductPage() {
    const { store, setStore } = useContext(context)
    const cardStyle = { backgroundColor: store.theme.bgColor }

    return (
        <>
            <div className="product-page-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="product-page-content">
                    <div className="top">
                        <h3>Product Page</h3>
                        <PathToTab parent={'ECommerce'} tab={'Product Page'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="carousel-card" style={cardStyle}>
                                <Carousel width={'100%'} thumbWidth={70} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} emulateTouch={true} autoPlay={true}>
                                    <div className='image'><img src={Product1} alt="" /></div>
                                    <div className='image'><img src={Product2} alt="" /></div>
                                    <div className='image'><img src={Product3} alt="" /></div>
                                    <div className='image'><img src={Product4} alt="" /></div>
                                    <div className='image'><img src={Product5} alt="" /></div>
                                    <div className='image'><img src={Product6} alt="" /></div>
                                </Carousel>
                            </div>
                            <div className="about-card" style={cardStyle}>
                                <h3>Women Pink shirt.</h3>
                                <div className='price'>
                                    <p className="current-price">$26.00</p>
                                    <p className="old-price">$350.00</p>
                                </div>
                                <div className="colors">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="desc">
                                    <p>
                                        Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.
                                    </p>
                                </div>
                                <div className="params">
                                    <ul>
                                        <li>
                                            <b>Brand : </b> Pixelstrap
                                        </li>
                                        <li>
                                            <b>Availability : </b><span className='green'>In stock</span>
                                        </li>
                                        <li>
                                            <b>Seller : </b> 	ABC
                                        </li>
                                        <li>
                                            <b>Fabric : </b> 	Cotton
                                        </li>
                                    </ul>
                                </div>
                                <div className="share-it">
                                    <h3>share it</h3>
                                <div className="icons">
                                        <a href="facebook.com"><FaFacebookF size={20} color={store.theme.textColor} /></a>
                                        <a href="google.com"><FaGoogle size={20} color={store.theme.textColor} /></a>
                                        <a href="x.com"><FaTwitter size={20} color={store.theme.textColor} /></a>
                                        <a href="instagram.com"><FaInstagram size={20} color={store.theme.textColor} /></a>
                                    </div>
                                </div>
                                <div className="rate-now">
                                    <h3>Rate Now</h3>
                                    <button><Link to={'/cart'}><BsCart4/> Add To Cart</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;