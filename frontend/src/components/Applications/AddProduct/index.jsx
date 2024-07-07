import './style.scss'
import { useContext,useState } from 'react';
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import { MdAddchart } from "react-icons/md";
import 'react-quill/dist/quill.snow.css';
import { RiImageAddFill } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";
import AddProductDetails from './AddProductDetails';
import ProductGallery from './ProductGallery';
import ProductCategories from './ProductCategories';
import SellingPrices from './SellingPrices';
import Advance from './Advance';
function AddProduct() {
    const {store, setStore} = useContext(context)

    
    const [activeComponent, setActiveComponent] = useState('AddProductDetails');

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };
    return ( 
        <>
        <div className={"add-product-wrapper "+ store.theme+'-bg'}  >  
            <div className="add-product-content">
                <div className="top">
                    <h3>Add-Product</h3>
                    <PathToTab parent={'ECommerce'} tab={'Add-Product'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className={"product-form-card "+store.theme+'-cardd'}>
                            <h4>Product Form</h4>
                            <div className="body">
                                <div className="left">
                                    <ul>
                                        <li>
                                            <div className="add-product-details btn">
                                        <button  className={store.theme+'-text'} onClick={() => handleComponentChange('AddProductDetails')}>
                                        <div className={`left-part ${activeComponent === 'AddProductDetails' ? 'active' : ''}`}>
                                            <div>
                                            <MdAddchart size={20} color={'#c9c9c950'}/>
                                            </div>
                                        </div>
                                        <div className="right-part" >
                                            <b>Add Product Details</b>
                                            <p>Add Product name & details</p>
                                        </div>
                                        </button>
                                    </div>   
                                        </li>
                                        <li>
                                            <div className="product-gallery btn">
                                        <button  className={store.theme+'-text'}  onClick={() => handleComponentChange('ProductGallery')}>
                                        <div className={`left-part ${activeComponent === 'ProductGallery' ? 'active' : ''}`}>
                                            <div>
                                            <RiImageAddFill size={20} color={'#c9c9c950'}/>
                                            </div>
                                        </div>
                                        <div className="right-part" >
                                            <b>Product gallery</b>
                                            <p>thumbnail & Add Product Gallery</p>
                                        </div>
                                        </button>
                                    </div> 
                                        </li>
                                        <li>
                                            <div className="product-categories btn">
                                        <button  className={store.theme+'-text'} onClick={() => handleComponentChange('ProductCategories')}>
                                        <div className={`left-part ${activeComponent === 'ProductCategories' ? 'active' : ''}`}>
                                            <div>
                                            <FaLayerGroup size={20} color={'#c9c9c950'}/>
                                            </div>
                                        </div>
                                        <div className="right-part" >
                                            <b>Product Categories</b>
                                            <p>Add Product category, Status and Tags</p>
                                        </div>
                                        </button>
                                    </div> 
                                        </li>
                                        <li>
                                            <div className="product-gallery btn">
                                        <button  className={store.theme+'-text'}  onClick={() => handleComponentChange('SellingPrices')}>
                                        <div className={`left-part ${activeComponent === 'SellingPrices' ? 'active' : ''}`}>
                                            <div>
                                            <IoIosPricetag size={20} color={'#c9c9c950'}/>
                                            </div>
                                        </div>
                                        <div className="right-part" >
                                            <b>Selling prices</b>
                                            <p>Add Product basic price & Discount</p>
                                        </div>
                                        </button>
                                    </div> 
                                        </li>
                                        <li>
                                            <div className="product-gallery btn">
                                        <button  className={store.theme+'-text'}  onClick={() => handleComponentChange('Advance')}>
                                        <div className={`left-part ${activeComponent === 'Advance' ? 'active' : ''}`}>
                                            <div>
                                            <FaHandHoldingDollar size={20} color={'#c9c9c950'}/>
                                            </div>
                                        </div>
                                        <div className="right-part" >
                                            <b>Advance</b>
                                            <p>Add Meta details & Inventory details</p>
                                        </div>
                                        </button>
                                    </div> 
                                        </li>
                                    </ul>
                                 
                                   
                                </div>
                                <div className="right">
                                {activeComponent === 'AddProductDetails' && <AddProductDetails />}
                                {activeComponent === 'ProductGallery' && <ProductGallery />}
                                {activeComponent === 'ProductCategories' && <ProductCategories />}
                                {activeComponent === 'SellingPrices' && <SellingPrices />}
                                {activeComponent === 'Advance' && <Advance />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default AddProduct;