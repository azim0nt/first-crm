import './style.scss'
import { useContext, useState } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import productsList from '../../../db/productsList.json'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

import Product1 from '../../../assets/images/productList/image_1.png'
import Product2 from '../../../assets/images/productList/image_2.png'
import Product3 from '../../../assets/images/productList/image_3.png'
import Product4 from '../../../assets/images/productList/image_4.png'
import Product5 from '../../../assets/images/productList/image_5.png'
import Product6 from '../../../assets/images/productList/image_6.png'
import Product7 from '../../../assets/images/productList/image_7.png'
import Product8 from '../../../assets/images/productList/image_8.png'
import Product9 from '../../../assets/images/productList/image_9.png'
import Product10 from '../../../assets/images/productList/image_10.png'
import Product11 from '../../../assets/images/productList/image_11.png'
import Product12 from '../../../assets/images/productList/image_12.png'
import Product13 from '../../../assets/images/productList/image_13.png'
import Product14 from '../../../assets/images/productList/image_14.png'
import Product15 from '../../../assets/images/productList/image_15.png'
import Product16 from '../../../assets/images/productList/image_16.png'
import Product17 from '../../../assets/images/productList/image_17.png'
import Product18 from '../../../assets/images/productList/image_18.png'
import Product19 from '../../../assets/images/productList/image_19.png'
import Product20 from '../../../assets/images/productList/image_20.png'
import Product21 from '../../../assets/images/productList/image_21.png'
import Product22 from '../../../assets/images/productList/image_22.png'
import Product23 from '../../../assets/images/productList/image_23.png'
import Product24 from '../../../assets/images/productList/image_24.png'
import Product25 from '../../../assets/images/productList/image_25.png'
import Product26 from '../../../assets/images/productList/image_26.png'

function ProductList() {
    const { store, setStore } = useContext(context)
    const [displayMode, setDisplayMode] = useState('none')
    const cardStyle = { backgroundColor: store.theme.bgColor }
    const themeStatus = store.theme.bgColor === '#171829' ? 'dark' : 'none'
    const images = [
        Product1,
        Product2,
        Product3,
        Product4,
        Product5,
        Product6,
        Product7,
        Product8,
        Product9,
        Product10,
        Product11,
        Product12,
        Product13,
        Product14,
        Product15,
        Product16,
        Product17,
        Product18,
        Product19,
        Product20,
        Product21,
        Product22,
        Product23,
        Product24,
        Product25,
        Product26
    ]
    return (
        <>
            <div className="product-list-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="product-list-content">
                    <div className="top">
                        <h3>Product List</h3>
                        <PathToTab parent={'ECommerce'} tab={'Product List'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="product-list-card" style={cardStyle}>
                                <div className="top-part">
                                    <button className="filter-open" onClick={() => { setDisplayMode(displayMode === 'none' ? 'flex' : 'none') }}>
                                        {displayMode === 'none' ? <FaFilter color='#5c61f2' /> : <MdOutlineCancel size={25} color='#5c61f2' />}
                                    </button>
                                    <div className="add-product">
                                        <Link to={'/add_products'}><FaPlus color='#fff' /> Add Product</Link>
                                    </div>
                                </div>
                                <div className="filter" style={{ display: displayMode }}>
                                    <select className={themeStatus}>
                                        <option selected="">Choose Product</option>
                                        <option value="1">Apple iphone 13 Pro</option>
                                        <option value="2">Wood Chair</option>
                                        <option value="3">M185 Compact Wireless Mouse</option>
                                    </select>
                                    <select className={themeStatus}>
                                        <option selected="">Choose Category</option>
                                        <option value="1">Furniture</option>
                                        <option value="2">Smart Gadgets</option>
                                        <option value="3">Electrics</option>
                                    </select>
                                    <select className={themeStatus}>
                                        <option selected="">Choose Sub Category</option>
                                        <option value="1">Smart Phones</option>
                                        <option value="2">Smart Watches</option>
                                        <option value="3">Wireless headphone</option>
                                    </select>
                                    <select className={themeStatus}>
                                        <option selected="">Status</option>
                                        <option value="1">Sold Out </option>
                                        <option value="2">In Stock</option>
                                        <option value="3">Pre Order</option>
                                        <option value="4">Limited Stock </option>
                                    </select>
                                    <select className={themeStatus}>
                                        <option selected="">Price</option>
                                        <option value="1">56000.00</option>
                                        <option value="2">19000.00</option>
                                        <option value="3">10000.00</option>
                                        <option value="3">15000.00</option>
                                        <option value="3">99000.00</option>
                                    </select>
                                </div>
                                <div className="bottom-part">
                                    <div className="search">
                                        <select className={themeStatus}><option value="5">5</option><option value="10" selected="">10</option><option value="15">15</option><option value="20">20</option><option value="100">25</option></select>
                                        <p>entries per page</p>
                                        <input type="text" placeholder='Search...' className={themeStatus}  />
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Product Name</p>
                                                </th>
                                                <th>
                                                    <p>SKU</p>
                                                </th>
                                                <th>
                                                    <p>Category</p>
                                                </th>
                                                <th>
                                                    <p>Price</p>
                                                </th>
                                                <th>
                                                    <p>Qty</p>
                                                </th>
                                                <th>
                                                    <p>Status</p>
                                                </th>
                                                <th>
                                                    <p>Rating</p>
                                                </th>
                                                <th>
                                                    <p>Action</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                productsList.map((product, index)=>{
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" />
                                                                <div className="img-container">
                                                                    <img src={images[index]} alt="" />
                                                                </div>
                                                                <p>
                                                                    {product.name}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    {product.sku}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    {product.category}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    {product.qty}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className={product.status === "Sold Out" ? 'orange' :}>
                                                                    {product}
                                                                </p>
                                                            </td>
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
            </div>
        </>
    );
}

export default ProductList;