import './style.scss'
import { useContext, useState } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { IoSearch } from 'react-icons/io5';

import { IoIosArrowDown } from "react-icons/io";
import productsCard from '../../../db/productsCard.json'

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useTranslation } from 'react-i18next';

import Product1 from '../../../assets/images/products-2/image_1.jpg'
import Product2 from '../../../assets/images/products-2/image_2.jpg'
import Product3 from '../../../assets/images/products-2/image_3.jpg'
import Product4 from '../../../assets/images/products-2/image_4.jpg'
import Product5 from '../../../assets/images/products-2/image_5.jpg'
import Product6 from '../../../assets/images/products-2/image_6.jpg'
import Product7 from '../../../assets/images/products-2/image_7.jpg'
import Product8 from '../../../assets/images/products-2/image_8.jpg'
import Product9 from '../../../assets/images/products-2/image_9.jpg'
import Product10 from '../../../assets/images/products-2/image_10.jpg'
import Product11 from '../../../assets/images/products-2/image_11.jpg'
import Product12 from '../../../assets/images/products-2/image_12.jpg'
import Product13 from '../../../assets/images/products-2/image_13.jpg'
import Product14 from '../../../assets/images/products-2/image_14.jpg'
import Product15 from '../../../assets/images/products-2/image_15.jpg'
import Product16 from '../../../assets/images/products-2/image_16.jpg'
function Product() {
    const { store, setStore } = useContext(context)
    const { t } = useTranslation()
    const cardStyle = { backgroundColor: store.theme.bgcolor }
    const [modalDisplay, setModalDisplay] = useState('none')
    const [gridCount, setGridCount] = useState(5)
    const handleModal = (productId) => {
        setModalDisplay(modalDisplay === 'none' ? 'flex' : 'none')
    }
    const images = [Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12, Product13, Product14, Product15, Product16]
    return (
        <>
            <div className={"product-wrapper "+store.theme+'-bg'}>
                <div className="product-content">
                    <div className="top">
                        <h3>Product</h3>
                        <PathToTab parent={'ECommerce'} tab={'Product'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="filters">
                                <div className="grid-change">
                                    <div className="left">
                                        <button     onClick={() => { setGridCount(5) }}>
                                            <LuLayoutGrid size={25}  className={store.theme+'-text'} />
                                        </button>
                                        <button     onClick={() => { setGridCount(1) }}>
                                            <LuList size={25}  className={store.theme+'-text'} />
                                        </button>
                                        <button onClick={() => { setGridCount(2) }}>
                                            <span className="column-2">
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                        <button onClick={() => { setGridCount(3) }}>
                                            <span className="column-3">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                        <button onClick={() => { setGridCount(4) }}>
                                            <span className="column-4">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                        <button onClick={() => { setGridCount(5) }}>
                                            <span className="column-5">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="right">
                                        <span>Showing Products 1 - 24 Of 200 Results</span>
                                        <select className={store.theme+'-cardd'}    >
                                            <option value="opt1">Featured</option>
                                            <option value="opt2">Lowest Prices</option>
                                            <option value="opt3">Highest Prices</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="filter-search">
                                    <div className="filter"    >
                                        <div  className={store.theme+'-cardd'}><span>Filters</span><span><button onClick={handleModal}><IoIosArrowDown size={20}  className={store.theme+'-text'} /></button></span></div>
                                        <div className={"modal-filter "+store.theme+'-cardd'} style={{display: modalDisplay }}>
                                            <div className="category">
                                                <h4>Category</h4>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Man Shirt</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Man Jeans</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Woman Top</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Woman Jeans</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Man T-shirt</p>
                                                </span>
                                            </div>
                                            <div className="brand">
                                                <h4>Brand</h4>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Levi's</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Diesel</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Lee</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Hudson</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Denizen</p>
                                                </span>
                                                <span>
                                                    <input type="checkbox" />
                                                    <p>Spykar</p>
                                                </span>
                                            </div>
                                            <div className="colors">
                                                <h4>Colors</h4>
                                                <div>
                                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <h3>Price</h3>
                                                <RangeSlider />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"search "+store.theme+'-cardd'} >
                                        <input type="text"  className={store.theme+'-cardd'} placeholder='Search..' /><IoSearch size={25}  className={store.theme+'-text'} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="section-2">
                            <div className={`products grid-${gridCount}`} style={{ gridTemplateColumns: `repeat(${gridCount}, 1fr)` }}>
                                {
                                    productsCard.map((product, i) => {
                                        return (
                                            <div className={`product n-${i + 1} `+store.theme+'-cardd'}   >
                                                <div className="top-part">
                                                    <img src={images[i]} alt="" />
                                                </div>
                                                <div className="bottom-part">
                                                    <h3>{product.title}</h3>
                                                    <p>Regular Flare Fit</p>
                                                    <p>Women's white Top</p>
                                                    <span><span className='current-price'>{product.price}</span><span className="old-price">{product.oldPrice}</span></span>
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
        </>
    );
}

export default Product;