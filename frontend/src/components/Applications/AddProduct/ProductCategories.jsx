import React, { useEffect, useRef, useContext } from 'react';
import Tags from "@yaireo/tagify/dist/react.tagify"; // Ensure correct import path
import "@yaireo/tagify/dist/tagify.css";
import { context } from '../../../store'; // Adjust import path based on your store setup
import Tagify from '@yaireo/tagify'; // Ensure correct import path

function ProductCategories() {
    const tagifyRef = useRef(null);
    const { store } = useContext(context); // Ensure this matches your context structure
    const inputStyle = {backgroundColor:store.theme.backBgColor, color:store.theme.textColor}
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
        <div className={`product-categories ${store.theme.bgColor === '#171829' ? 'dark' : 'snow'}`}>
            <div className="left-part">
            <div className="add-category">
                <h4>Add Category</h4>
                <select name="" id="" style={inputStyle}>
                    <option value="toys_games">Toys & games</option>
                    <option value="sportswear">Sportswear</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="furniture_decor">Furniture and Decor</option>
                </select>
            </div>
            </div>
            <div className="right-part">
                <Tags tagifyRef={tagifyRef} settings={{}} value="watches,sports,clothes,battles" // Example value
                    onChange={e => console.log("CHANGED:", e.detail.value)}
                />
            </div>
        </div>
    );
}

export default ProductCategories;
