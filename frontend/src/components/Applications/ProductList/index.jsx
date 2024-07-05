import './style.scss'
import { useContext, useState } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import productsList from '../../../db/productsList.json'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaFilter, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
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
    const [currentPage, setCurrentPage] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [searchQuery, setSearchQuery] = useState('');

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleEntriesChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(0);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0);
    };

    const combinedList = productsList.map((product, index) => ({
        ...product,
        image: images[index]
    }));

    const sortedProducts = [...combinedList].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const filteredProducts = sortedProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.price.toString().includes(searchQuery) ||
        product.qty.toString().includes(searchQuery) ||
        product.status.toLowerCase().includes(searchQuery)
    );

    const offset = currentPage * entriesPerPage;
    const currentProducts = filteredProducts.slice(offset, offset + entriesPerPage);

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
                                        <select
                                            className={themeStatus}
                                            value={entriesPerPage}
                                            onChange={handleEntriesChange}
                                        >
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="25">25</option>
                                        </select>
                                        <p>entries per page</p>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className={themeStatus}
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th onClick={() => handleSort('name')}>
                                                    <p>Product Name</p>
                                                </th>
                                                <th onClick={() => handleSort('sku')}>
                                                    <p>SKU</p>
                                                </th>
                                                <th onClick={() => handleSort('category')}>
                                                    <p>Category</p>
                                                </th>
                                                <th onClick={() => handleSort('price')}>
                                                    <p>Price</p>
                                                </th>
                                                <th onClick={() => handleSort('qty')}>
                                                    <p>Qty</p>
                                                </th>
                                                <th onClick={() => handleSort('status')}>
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
                                            {currentProducts.map((product, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="container">
                                                            <input type="checkbox" />
                                                            <div className="img-container">
                                                                <img src={product.image} alt="" />
                                                            </div>
                                                            <p>{product.name}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{product.sku}</p>
                                                    </td>
                                                    <td>
                                                        <p>{product.category}</p>
                                                    </td>
                                                    <td>
                                                        <p>{product.price}</p>
                                                    </td>
                                                    <td>
                                                        <p>{product.qty}</p>
                                                    </td>
                                                    <td>
                                                        <p className={product.status === "Sold Out" ? 'orange' : 'blue'}>
                                                            {product.status}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p></p>
                                                    </td>
                                                    <td>
                                                        <p>{/* Add your action buttons or links here */}</p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <ReactPaginate
                                        previousLabel={<FaLongArrowAltLeft color={store.theme.textColor} />}
                                        nextLabel={<FaLongArrowAltRight color={store.theme.textColor} />}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(filteredProducts.length / entriesPerPage)}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination ' + themeStatus}
                                        activeClassName={'active'}
                                    />
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