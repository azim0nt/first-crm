import './style.scss'
import { useContext, useState, useEffect } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaFilter, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { IoIosCloseCircleOutline } from 'react-icons/io';
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
    const [OpenModal, setOpenModal] = useState('')
    const [categoryName,setCategoryName] = useState('')
    const [categories,setCategories] = useState([])
    const {t} = useTranslation()
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
    const [productsList, setProductsList] = useState([
        {
            "name": "Apple Desktop 2024",
            "sku": "02145YK796",
            "category": "Laptops",
            "price": "56000.00",
            "qty": "13",
            "status": "Sold Out"
        },
        {
            "name": "Apple iphone 13 Pro",
            "sku": "56379FG3AW",
            "category": "Smart Phones",
            "price": "19000.00",
            "qty": "48",
            "status": "In Stock"
        },
        {
            "name": "Headphones",
            "sku": "33KR5689B1",
            "category": "Smart Headphones",
            "price": "10000.00",
            "qty": "5",
            "status": "In Stock"
        },
        {
            "name": "wireless-headphone",
            "sku": "AD6789HEY0",
            "category": "Smart Headphones",
            "price": "15000.00",
            "qty": "4",
            "status": "Sold Out"
        },
        {
            "name": "Wood Chair",
            "sku": "456DF78DFQ",
            "category": "Furniture",
            "price": "99000.00",
            "qty": "2",
            "status": "Sold Out"
        },
        {
            "name": "Wood Chair",
            "sku": "5633GD3K54",
            "category": "Furniture",
            "price": "1000.00",
            "qty": "8",
            "status": "Sold Out"
        },
        {
            "name": "MacBook Air 13.3-inch",
            "sku": "589KO8PPQ8",
            "category": "Laptops",
            "price": "45000.00",
            "qty": "10",
            "status": "Sold Out"
        },
        {
            "name": "M185 Compact Wireless Mouse",
            "sku": "02145YK796",
            "category": "E-Commerce",
            "price": "56000.00",
            "qty": "13",
            "status": "Sold Out"
        },
        {
            "name": "Wood chairs",
            "sku": "568GH3LLQ2",
            "category": "Furniture",
            "price": "78000.00",
            "qty": "50",
            "status": "In Stock"
        },
        {
            "name": "Smart watch",
            "sku": "58FR7K34F6",
            "category": "Electric",
            "price": "25000.00",
            "qty": "48",
            "status": "Sold Out"
        },
        {
            "name": "DVD",
            "sku": "HG5667DFQ1",
            "category": "Electric",
            "price": "5600.00",
            "qty": "10",
            "status": "In Stock"
        },
        {
            "name": "Speakers",
            "sku": "02145YK796",
            "category": "Electric",
            "price": "12200.00",
            "qty": "50",
            "status": "Sold Out"
        },
        {
            "name": "Apple iphone 13 Pro",
            "sku": "56379FG3AW",
            "category": "Smart Phones",
            "price": "19000.00",
            "qty": "48",
            "status": "In Stock"
        },
        {
            "name": "Headphones",
            "sku": "33KR5689B1",
            "category": "Smart Headphones",
            "price": "10000.00",
            "qty": "5",
            "status": "In Stock"
        },
        {
            "name": "Wood chairs",
            "sku": "568GH3LLQ2",
            "category": "Furniture",
            "price": "78000.00",
            "qty": "50",
            "status": "In Stock"
        },
        {
            "name": "Smart watch",
            "sku": "58FR7K34F6",
            "category": "Electric",
            "price": "25000.00",
            "qty": "48",
            "status": "Sold Out"
        },
        {
            "name": "Apple iphone 13 Pro",
            "sku": "56379FG3AW",
            "category": "Smart Phones",
            "price": "19000.00",
            "qty": "48",
            "status": "In Stock"
        },
        {
            "name": "Headphones",
            "sku": "33KR5689B1",
            "category": "Smart Headphones",
            "price": "10000.00",
            "qty": "5",
            "status": "In Stock"
        },
        {
            "name": "wireless-headphone",
            "sku": "AD6789HEY0",
            "category": "Smart Headphones",
            "price": "15000.00",
            "qty": "4",
            "status": "Sold Out"
        },
        {
            "name": "Wood Chair",
            "sku": "456DF78DFQ",
            "category": "Furniture",
            "price": "99000.00",
            "qty": "2",
            "status": "Sold Out"
        },
        {
            "name": "Wood Chair",
            "sku": "5633GD3K54",
            "category": "Furniture",
            "price": "1000.00",
            "qty": "8",
            "status": "Sold Out"
        },
        {
            "name": "Apple Desktop 2024",
            "sku": "02145YK796",
            "category": "Laptops",
            "price": "56000.00",
            "qty": "13",
            "status": "Sold Out"
        },
        {
            "name": "Apple iphone 13 Pro",
            "sku": "56379FG3AW",
            "category": "Smart Phones",
            "price": "19000.00",
            "qty": "48",
            "status": "In Stock"
        },
        {
            "name": "Headphones",
            "sku": "33KR5689B1",
            "category": "Smart Headphones",
            "price": "10000.00",
            "qty": "5",
            "status": "In Stock"
        },
        {
            "name": "wireless-headphone",
            "sku": "AD6789HEY0",
            "category": "Smart Headphones",
            "price": "15000.00",
            "qty": "4",
            "status": "Sold Out"
        },
        {
            "name": "Wood Chair",
            "sku": "456DF78DFQ",
            "category": "Furniture",
            "price": "99000.00",
            "qty": "2",
            "status": "Sold Out"
        }
    ])
    
    const [currentPage, setCurrentPage] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState('close');
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        qty: '',
        status: '',
        image: null,
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    function generateSKU() {
        const digitsPart1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)).join('');
      
        const letters = Array.from({ length: 2 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
      
        const digitsPart2 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
      
        const sku = `${digitsPart1}${letters}${digitsPart2}`;
        return sku;
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            image: URL.createObjectURL(formData.image),
        };
        setProductsList([...productsList, newProduct]);
        setFormData({
            name: '',
            category: '',
            price: '',
            qty: '',
            status: '',
            image: null,
        });
        setIsOpen('close');
    };

    const combinedList = productsList.map((product, index) => ({
        ...product,
        image: images[index] || product.image,
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
    const token = localStorage.token;
    const [error, setError] = useState(null);

    const handleSubmitAddCategory = async (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

        try {
            const response = await fetch(`${store.url}admin/add_caterogies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    '-x-token': token
                },
                body: JSON.stringify({ name: categoryName }) // Отправляем данные категории в теле запроса
            });

            if (response.status === 202) {
                const responseData = await response.json();
                setError(responseData.error);
            } else if (response.status === 201) {
                alert('Категория успешно добавлена');
                setCategoryName('');
                setOpenModal(''); 
            } else {
                const responseData = await response.json();
                setError(responseData.error || 'Неизвестная ошибка');
            }
        } catch (error) {
            alert('Произошла ошибка. Пожалуйста, попробуйте снова.', error);
        }
    };
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const taskResponse = await fetch(`${store.url}admin/get_caterogies?page=1&size=100`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': `${token}`,
                    },
                });

                console.log('Response status:', taskResponse.status);

                if (taskResponse.ok) {
                    const data = await taskResponse.json();
                    console.log('Fetched data:', data);
                    setCategories(data);
                } else {
                    console.log('Failed to fetch data with status:', taskResponse.status);
                }
            } catch (error) {
                console.error('An error occurred while fetching tasks:', error);
            }
        };

        fetchData();
    },[store.url, token])
    console.log(categories)
    return (
        <>
            <div className={"product-list-wrapper " + store.theme + '-bg'}>
                <div className="product-list-content">
                    <div className="top">
                        <h3>{t('product_list.title')}</h3>
                        <PathToTab parent={t('product_list.path_to_tab.parent')} tab={t('product_list.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"product-list-card " + store.theme + '-cardd'}>
                                <div className="top-part">
                                    <button className="filter-open" onClick={() => { setDisplayMode(displayMode === 'none' ? 'flex' : 'none') }}>
                                        {displayMode === 'none' ? <FaFilter color='#5c61f2' /> : <MdOutlineCancel size={25} color='#5c61f2' />}
                                    </button>
                                    <div className="add-product">
                                        <button onClick={() => { setIsOpen('open') }}><FaPlus color='#fff' />{t('product_list.add_product')}</button>
                                        <button onClick={() => { setIsOpenModal('open') }}>Добавить Категорию</button>
                                    </div>
                                </div>
                                <div className="filter" style={{ display: displayMode }}>
                                    <select className={store.theme + '-input'}>
                                        <option selected="">Choose Product</option>
                                        <option value="1">Apple iphone 13 Pro</option>
                                        <option value="2">Wood Chair</option>
                                        <option value="3">M185 Compact Wireless Mouse</option>
                                    </select>
                                    <select className={store.theme + '-input'}>
                                        <option selected="">Choose Category</option>
                                        <option value="1">Furniture</option>
                                        <option value="2">Smart Gadgets</option>
                                        <option value="3">Electrics</option>
                                    </select>
                                    <select className={store.theme + '-input'}>
                                        <option selected="">Choose Sub Category</option>
                                        <option value="1">Smart Phones</option>
                                        <option value="2">Smart Watches</option>
                                        <option value="3">Wireless headphone</option>
                                    </select>
                                    <select className={store.theme + '-input'}>
                                        <option selected="">Status</option>
                                        <option value="1">Sold Out </option>
                                        <option value="2">In Stock</option>
                                        <option value="3">Pre Order</option>
                                        <option value="4">Limited Stock </option>
                                    </select>
                                    <select className={store.theme + '-input'}>
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
                                        <select className={store.theme + '-input'}
                                            value={entriesPerPage}
                                            onChange={handleEntriesChange}
                                        >
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="25">25</option>
                                        </select>
                                        <p>{t('product_list.entries_per_page')}</p>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className={store.theme + '-input'}
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <div className="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th onClick={() => handleSort('name')}>
                                                    <p>{t("product_list.table.0")}</p>
                                                </th>
                                                <th onClick={() => handleSort('sku')}>
                                                    <p>{t("product_list.table.1")}</p>
                                                </th>
                                                <th onClick={() => handleSort('category')}>
                                                    <p>{t("product_list.table.2")}</p>
                                                </th>
                                                <th onClick={() => handleSort('price')}>
                                                    <p>{t("product_list.table.3")}</p>
                                                </th>
                                                <th onClick={() => handleSort('qty')}>
                                                    <p>{t("product_list.table.4")}</p>
                                                </th>
                                                <th onClick={() => handleSort('status')}>
                                                    <p>{t("product_list.table.5")}</p>
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
                                    </div>
                                    <ReactPaginate
                                        previousLabel={<FaLongArrowAltLeft color={store.theme === 'dark' ? '#ffffff99' : '#171829'} />}
                                        nextLabel={<FaLongArrowAltRight color={store.theme === 'dark' ? '#ffffff99' : '#171829'} />}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(filteredProducts.length / entriesPerPage)}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination ' + store.theme}
                                        activeClassName={'active'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"modal-window-bg " + isOpen}>

                <div className={"modal-window " + store.theme + '-cardd'}>
                    <div className="header">
                        <h3>{t('product_list.modal.title')}</h3>
                        <span><h3>{t('product_list.modal.close')}</h3> <button onClick={() => { setIsOpen(isOpen === 'open' ? 'close' : 'open') }}><IoIosCloseCircleOutline size={30} className={store.theme + '-text'} /></button></span>
                    </div>
                    <div className="form">
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-group">
                            <label>{t('product_list.modal.product_name')}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className={store.theme + '-input'}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t('product_list.modal.category.0')}</label>
                            <select
                                name="category"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                                className={store.theme + '-input'}
                            >
                                <option value="Laptops">{t('product_list.modal.category.1')}</option>
                                <option value="Smart Phones">{t('product_list.modal.category.2')}</option>
                                <option value="Electric">{t('product_list.modal.category.3')}</option>
                                <option value="Smart Headphones">{t('product_list.modal.category.4')}</option>
                                <option value="E-Commerce">{t('product_list.modal.category.5')}</option>
                                <option value="Furniture">{t('product_list.modal.category.6')}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{t('product_list.modal.price')}</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                                className={store.theme + '-input'}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t('product_list.modal.quantity')}</label>
                            <input
                                type="number"
                                name="qty"
                                value={formData.qty}
                                onChange={handleInputChange}
                                required
                                className={store.theme + '-input'}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t('product_list.modal.status.0')}</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                                className={store.theme + '-input'}
                            >

                                <option value="In Stock">{t('product_list.modal.status.1')}</option>
                                <option value="Sold Out">{t('product_list.modal.status.2')}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{t('product_list.modal.image')}</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                required
                                className={store.theme + '-input'}
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="blue-btn">{t('product_list.modal.submit')}</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div className={"modal-add-category-bg "+OpenModal}>
                <div className="modal-add-category">
                <form onSubmit={handleSubmitAddCategory}>
                    <input
                        type="text"
                        placeholder='Имя Категории'
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <button type='submit' className='blue-btn'>Добавить</button>
                </form>
                </div>
            </div>
        </>
    );
}

export default ProductList;