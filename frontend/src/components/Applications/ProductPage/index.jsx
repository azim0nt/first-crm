import './style.scss'
import { useContext, useState } from 'react';
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
// import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosGift } from "react-icons/io";
import { ImTruck } from "react-icons/im";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegClock, FaShoppingBasket, FaHeart, FaRegCreditCard } from "react-icons/fa";

function ProductPage() {
    const { store, setStore } = useContext(context)
    const [text, setText] = useState('febric')
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const themeStatus = store.theme.textColor === '#171829' ? 'light' : 'dark'
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
                                    <div className="btns">
                                        <button className='blue-btn'><Link to={'/cart'}><FaShoppingBasket size={25} color='#fff' />Add To Cart</Link></button>
                                        <button className='green-btn'><Link to={'/checkout'}><BsCart4 size={25} color='#fff' /> Buy Now</Link></button>
                                        <button className='orange-btn'><Link to={'/list_wish'}><FaHeart size={25} color='#fff' />Add To WishList</Link></button>

                                    </div>
                                </div>
                            </div>
                            <div className="brand-and-delivery-cards">
                                <div className="brand-card" style={cardStyle}>
                                    <Link to={'/product_cards'}>
                                        <h3>Brand</h3>
                                        <p>Clothing</p>
                                        <p>Bags</p>
                                        <p>Footwear</p>
                                        <p>Watches</p>
                                        <p>ACCESSORIES</p>
                                    </Link>
                                </div>
                                <div className="delivery-card" style={cardStyle}>
                                    <div>
                                        <span className="left">
                                            <ImTruck size={25} />
                                        </span>
                                        <span className="right">
                                            <p>Free Shipping Free Shipping World Wide</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <FaRegClock size={25} />
                                        </span>
                                        <div className="right">
                                            <p>24 X 7 Service Online Service For New Customer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <IoIosGift size={25} />
                                        </span>
                                        <div className="right">
                                            <p>Festival Offer
                                                New Online Special Festivalr</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <FaRegCreditCard size={25} />
                                        </span>
                                        <div className="right">
                                            <p>Online Payment
                                                Contrary To Popular Belief.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="more-details-card" style={cardStyle}>
                                <div className="top-part">
                                    <button className={`${text ==='febric' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('febric') }}>
                                        Febric
                                    </button>
                                    <button className={`${text ==='video' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('video') }}>
                                        Video
                                    </button>
                                    <button className={`${text ==='details' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('details') }}>
                                        Details
                                    </button>
                                    <button className={`${text ==='brand' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('brand') }}>
                                        Brand
                                    </button>
                                </div>
                                <div className="bottom-part">
                                    {text === 'febric' && <p>Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink colour Classic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash.." Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, art, styles that "combine heritage with modernity, simplicity, playfulness and street style"."</p>}
                                    {text === 'video' && <p>Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>}
                                    {text === 'details' &&<p>Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.</p>}
                                    {text === 'brand' && <p>Product Dimensions : 18 x 18 x 4 cm <br /> Date First Available : 31 March 2024 <br /> Manufacturer : Tee Stores <br /> Item part number : TS-WT721-XS-WHITE</p>}
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