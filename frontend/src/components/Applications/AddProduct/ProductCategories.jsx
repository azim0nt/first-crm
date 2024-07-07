import React, { useEffect, useRef, useContext, useState } from 'react';
import Tags from "@yaireo/tagify/dist/react.tagify"; // Ensure correct import path
import "@yaireo/tagify/dist/tagify.css";
import { context } from '../../../store'; // Adjust import path based on your store setup
import Tagify from '@yaireo/tagify'; // Ensure correct import path
import { GoPlus } from "react-icons/go";
import ReactQuill from 'react-quill';

function ProductCategories() {
    const [editorHtml, setEditorHtml] = useState('');
    const { store, setStore } = useContext(context); // Ensure this matches your context structure
    const theme = store.theme.textColor === '#171829' ? 'snow' : 'dark';

    const modules = {
        toolbar: [
            [{ 'size': ['', 'small', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'indent': '-1' }, { 'indent': '+1' }, { 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],

        ],
    };
    const tagifyRef = useRef(null);
    const inputStyle = { backgroundColor: store.theme.backBgColor, color: store.theme.textColor }
    const handleChangeDisplay = () => {
        setStore({ type: 'changeModalDisplay', modalWindow:'flex' })
    }
    
    useEffect(() => {
        if (tagifyRef.current) {
            try {
                // Initialize Tagify when component mounts
                const tagify = new Tagify(tagifyRef.current, {
                    // Example options, customize as needed
                    whitelist: ['watches', 'sports', 'clothes', 'bottles'],
                    dropdown: {
                        classname: 'tagify__dropdown',
                        enabled: 0,
                    }
                });

                // Clean up Tagify instance when component unmounts
                return () => {
                    tagify.destroy();
                };
            } catch (error) {
                console.error('Error initializing Tagify:', error);
            }
        }

    }, []); // Empty dependency array ensures effect runs only once on mount

    return (
        <div className={`product-categories`}>
            <div className="left-part">
                <div className="add-category">
                    <h4>Add Category</h4>
                    <select className={store.theme+'-input'} name="" id="" style={inputStyle}>
                        <option value="toys_games">Toys & games</option>
                        <option value="sportswear">Sportswear</option>
                        <option value="jewellery">Jewellery</option>
                        <option value="furniture_decor">Furniture and Decor</option>
                        <option value="health_personal_care_and_beauty">Health, Personal Care, and Beauty</option>
                        <option value="auto_and_parts">Auto and Parts</option>
                        <option value="baby_care_products">Baby Care Products</option>
                    </select>
                    <h4>A product can be added to a category</h4>
                </div>
                <div className="create-new-category">
                    <button className="blue-btn">
                        <GoPlus color='#5c61f2' size={20} /> Create New Category
                    </button>
                </div>
                <div className="publish-status">
                    <h4>Publish Status</h4>
                    <select className={store.theme+'-input'} name="" id="" style={inputStyle}>
                        <option value="publish">Publish</option>
                        <option value="drafts">Drafts</option>
                        <option value="unpublish">Unpublish</option>
                    </select>
                    <h4>Choose the status</h4>
                </div>
            </div>
            <div className="right-part">
                <div className="add-tag">
                    <h4>Add Tag</h4>
                    <Tags tagifyRef={tagifyRef} settings={{}} value="watches,sports,clothes,battles" // Example value
                        onChange={e => console.log("CHANGED:", e.detail.value)}
                    />
                    <h4>
                    Products can be tagged
                    </h4>
                </div>
                <div className="publish-date-time">
                    <h4>Publish Date & Time</h4>
                    <input className={store.theme+'-input'} type="text" style={inputStyle} />
                </div>
            </div>

        </div>
    );
}

export default ProductCategories;
