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
import {useTranslation} from 'react-i18next'
// import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosGift } from "react-icons/io";
import { ImTruck } from "react-icons/im";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaRegClock, FaShoppingBasket, FaHeart, FaRegCreditCard } from "react-icons/fa";

function ProductPage() {
    const { store, setStore } = useContext(context)
    const [text, setText] = useState('febric')
    const {t} = useTranslation()
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const themeStatus = store.theme === 'light' ? 'light' : 'dark'
    return (
        <>
            <div className={"product-page-wrapper "+store.theme+'-bg'}    >
                <div className="product-page-content">
                    <div className="top">
                        <h3>{t('product_page.title')}</h3>
                        <PathToTab parent={'ECommerce'} tab={'Product Page'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"carousel-card "+store.theme+'-cardd'}>
                                <Carousel width={'100%'} thumbWidth={70} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} emulateTouch={true} autoPlay={true}>
                                    <div className='image'><img src={Product1} alt="" /></div>
                                    <div className='image'><img src={Product2} alt="" /></div>
                                    <div className='image'><img src={Product3} alt="" /></div>
                                    <div className='image'><img src={Product4} alt="" /></div>
                                    <div className='image'><img src={Product5} alt="" /></div>
                                    <div className='image'><img src={Product6} alt="" /></div>
                                </Carousel>
                            </div>
                            <div className={"about-card "+store.theme+'-cardd'}>
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
                                            <b>{t('product_page.brand')} : </b> Pixelstrap
                                        </li>
                                        <li>
                                            <b>{t('product_page.Availability')} : </b><span className='green'>In stock</span>
                                        </li>
                                        <li>
                                            <b>{t('product_page.Seller')} : </b> 	ABC
                                        </li>
                                        <li>
                                            <b>{t('product_page.Fabric')} : </b> 	Cotton
                                        </li>
                                    </ul>
                                </div>
                                <div className="share-it">
                                    <h3>{t('product_page.shareit')}</h3>
                                    <div className="icons">
                                        <a href="facebook.com"><FaFacebookF size={20} color={store.theme.textColor} /></a>
                                        <a href="google.com"><FaGoogle size={20} color={store.theme.textColor} /></a>
                                        <a href="x.com"><FaTwitter size={20} color={store.theme.textColor} /></a>
                                        <a href="instagram.com"><FaInstagram size={20} color={store.theme.textColor} /></a>
                                    </div>
                                </div>
                                <div className="rate-now">
                                    <h3>{t('product_page.RateNow')}</h3>
                                    <div className="btns">
                                        <button className='blue-btn'><Link to={'/cart'}><FaShoppingBasket size={25} color='#fff' />{t('product_page.AddToCart')}</Link></button>
                                        <button className='green-btn'><Link to={'/checkout'}><BsCart4 size={25} color='#fff' />{t('product_page.BuyNow')}</Link></button>
                                        <button className='orange-btn'><Link to={'/list_wish'}><FaHeart size={25} color='#fff' />{t('product_page.AddToWishList')}</Link></button>

                                    </div>
                                </div>
                            </div>
                            <div className="brand-and-delivery-cards">
                                <div className={"brand-card "+store.theme+'-cardd'}>
                                    <Link to={'/product_cards'}>
                                        <h3>{t('product_page.Brand')}</h3>
                                        <p>{t('product_page.Clothing')}</p>
                                        <p>{t('product_page.Bags')}</p>
                                        <p>{t('product_page.Footwear')}</p>
                                        <p>{t('product_page.Watches')}</p>
                                        <p>c</p>
                                    </Link>
                                </div>
                                <div className={"delivery-card "+store.theme+'-cardd'}>
                                    <div>
                                        <span className="left">
                                            <ImTruck size={25} />
                                        </span>
                                        <span className="right">
                                            <p>{t('product_page.free')}</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <FaRegClock size={25} />
                                        </span>
                                        <div className="right">
                                            <p>{t('product_page.24x7')}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <IoIosGift size={25} />
                                        </span>
                                        <div className="right">
                                            <p>{t('product_page.Festival')}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="left">
                                            <FaRegCreditCard size={25} />
                                        </span>
                                        <div className="right">
                                            <p>{t('product_page.Online')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"more-details-card "+store.theme+'-cardd'}>
                                <div className="top-part">
                                    <button className={`${text ==='febric' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('febric') }}>
                                    {t('product_page.Febric')}
                                    </button>
                                    <button className={`${text ==='video' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('video') }}>
                                    {t('product_page.Video')}
                                    </button>
                                    <button className={`${text ==='details' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('details') }}>
                                    {t('product_page.Details')}
                                    </button>
                                    <button className={`${text ==='brand' ? 'active' : 'deactivated'} ${themeStatus}`} onClick={() => { setText('brand') }}>
                                    {t('product_page.Brand')}
                                    </button>
                                </div>
                                <div className="bottom-part">
                                    {text === 'febric' && <p>{t('product_page.Refresh')}</p>}
                                    {text === 'video' && <p>{t('product_page.Lorate')}</p>}
                                    {text === 'details' &&<p>{t('product_page.Rock')}</p>}
                                    {text === 'brand' && <p>{t('product_page.Product')}</p>}
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