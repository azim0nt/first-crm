import { useState, useContext, useRef, useEffect } from "react";
import { context } from "../../../store";
import ReactQuill from 'react-quill';
import Tagify from '@yaireo/tagify';
import Tags from "@yaireo/tagify/dist/react.tagify"; // Ensure correct import path
import "@yaireo/tagify/dist/tagify.css";
function Inventory(props) {
    return (
        <>
            <div className="inventory">
                <div className="stock-low">
                    <div className="stock-availability">
                        <h4>
                            Stock Availability
                        </h4>
                        <select name="" id="" className={props.theme}>
                            <option value="">In Stock</option>
                            <option value="">Out of stack</option>
                            <option value="">Pre-order</option>
                        </select>
                    </div>
                    <div className="low-stack">
                        <h4>Low Stack</h4>
                        <select name="" className={props.theme} id="">
                            <option value="">Low Stack (5 or less)</option>
                            <option value="">Low Stack (10 or less)</option>
                            <option value="">Low Stack (20 or less)</option>
                            <option value="">Low Stack (25 or less)</option>
                            <option value="">Low Stack (30 or less)</option>
                        </select>
                    </div>
                </div>
                <div className="sku-stock-and-reststack-date-pre-order">
                    <div className="sku-stock-quantity">
                        <div className="sku">
                            <h4>SKU</h4>
                            <input type="text" className={`${props.theme}-input`} />
                        </div>
                        <div className="stock-quantity">
                            <h4>Stock Quantity</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                    </div>
                    <div className="restock-date-pre-order">
                        <div className="restock-date">
                            <h4>Restock Date</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                        <div className="pre-order">
                            <h4>Pre-Order</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                    </div>
                </div>
                <div className="allow-backorders">
                    <h4>Allow Backorders</h4>
                    <div>
                        <div className="input">
                            <input type="checkbox" className="check" />
                        </div>
                        <span><p className="gray">This is a digital Product</p><br /><p>Decide if the product is a digital or physical item. Shipping may be necessary for real-world items.</p></span>
                    </div>
                </div>
            </div>
        </>
    )
}
function AdditionalOptions(props) {
    const [editorHtml, setEditorHtml] = useState('');
    const modules = {
        toolbar: [
            [{ 'size': ['', 'small', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'indent': '-1' }, { 'indent': '+1' }, { 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],

        ],
    };
    const tagifyRef = useRef(null);

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

    }, []);
    return (

        <>
            <div className="additional-options">
                <div className="additional-tag-specific-tags">
                    <div className="additional-tag-title">
                        <h4>Additional Tag Title</h4>
                        <input type="text" className={`${props.theme}-input`} />
                        <h4>Add a new tag title. Keywords should be simple and accurate.</h4>
                    </div>
                    <div className="specific-tags">
                        <h4>Specific Tags</h4>
                        <Tags tagifyRef={tagifyRef} settings={{}} value="watches,sports,clothes,battles" // Example value
                            onChange={e => console.log("CHANGED:", e.detail.value)}
                        />
                    </div>
                </div>
                <div className="additional-description">
                    <h4>Additional Description</h4>
                    <ReactQuill value={editorHtml} modules={modules} className={`${props.theme} editor`} onChange={setEditorHtml} />
                    <h4>Enhance your SEO ranking with an added tag description for the product.</h4>
                </div>
            </div>
        </>
    )
}
function Shipping(props) {
    return (
        <>
            <div className="shipping">
                <div className="zip-city-state">
                    <div className="zip-code">
                        <h4>Where can I pick up my order?</h4>
                        <input type="number" className={`${props.theme}-input`} placeholder="Zip code (10001)" />
                    </div>
                    <div className="city">
                        <input type="text" className={`${props.theme}-input`} placeholder="City" />
                    </div>
                    <div className="state">
                        <select className={props.theme}>
                            <option selected="">State</option>
                            <option>Gujarat</option>
                            <option>Punjab</option>
                            <option>Himachal pradesh</option>
                            <option>Goa </option>
                            <option>Sikkim </option>
                            <option>Telangana</option>
                        </select>
                    </div>
                </div>
                <div className="weight">
                    <h4>Weight (kg)</h4>
                    <input type="number" className={`${props.theme}-input`} />
                    <h4>Decide if the product is a digital or physical item. Shipping may be necessary for real-world items.</h4>
                </div>
                <div className="dimensions">
                    <div className="length">
                        <h4>Dimensions</h4>
                        <input type="number" className={`${props.theme}-input`} placeholder="Length[l]" />
                    </div>
                    <div className="width">
                        <br />
                        <input type="number" className={`${props.theme}-input`} placeholder="Width[w]" />
                    </div>
                    <div className="Height">
                        <br />
                        <input type="number" className={`${props.theme}-input`} placeholder="Height[h]" />
                    </div>
                </div>
                <div className="shipping-class">

                    <h4>Shipping Class</h4>
                    <select className={props.theme}>
                        <option selected="">Basic Shipping</option>
                        <option>Expedited Shipping</option>
                        <option>International Shipping</option>
                        <option>Free Shipping</option>
                        <option>Same-Day or Next-Day Shipping</option>
                        <option>Flat Rate Shipping</option>
                        <option>Local Pickup </option>
                    </select>
                </div>
            </div>
        </>
    )
}
function Advance() {
    const [activeComponent, setActiveComponent] = useState('Inventory');

    const handleComponentChange = (comp) => { setActiveComponent(comp) }
    const { store } = useContext(context)
    const bgColor = store.theme
    const themeStatus = bgColor === 'dark' ? 'dark' : 'light';
    return (
        <>
            <div className="advance">
                <div className="top-part">
                    <button className={`${themeStatus} ${activeComponent === 'Inventory' ? 'active' : ''}`} onClick={() => handleComponentChange('Inventory')}>Inventory</button>
                    <button className={`${themeStatus} ${activeComponent === 'Additional Options' ? 'active' : ''}`} onClick={() => handleComponentChange('Additional Options')}>Additional Options</button>
                    <button className={`${themeStatus} ${activeComponent === 'Shipping' ? 'active' : ''}`} onClick={() => handleComponentChange('Shipping')}>Shipping</button>
                </div>
                <div className="bottom-part">
                    {activeComponent === 'Inventory' && <Inventory theme={themeStatus} />}
                    {activeComponent === 'Additional Options' && <AdditionalOptions theme={themeStatus} />}
                    {activeComponent === 'Shipping' && <Shipping theme={themeStatus} />}

                </div>
            </div>
        </>
    );
}

export default Advance;