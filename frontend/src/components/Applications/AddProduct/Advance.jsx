import { useState, useContext, useRef, useEffect } from "react";
import {useTranslation} from 'react-i18next'
import { context } from "../../../store";
import ReactQuill from 'react-quill';
import Tagify from '@yaireo/tagify';
import Tags from "@yaireo/tagify/dist/react.tagify"; // Ensure correct import path
import "@yaireo/tagify/dist/tagify.css";
function Inventory(props) {
    const {t} = useTranslation()

    return (
        <>
            <div className="inventory">
                <div className="stock-low">
                    <div className="stock-availability">
                        <h4>{t('add_product.product_form.advance.inventory.stock_availability')}</h4>
                        <select name="" id="" className={props.theme}>
                            <option value="">In Stock</option>
                            <option value="">Out of stack</option>
                            <option value="">Pre-order</option>
                        </select>
                    </div>
                    <div className="low-stack">
                        <h4>{t('add_product.product_form.advance.inventory.low_stack')}</h4>
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
                            <h4>{t('add_product.product_form.advance.inventory.sku')}</h4>
                            <input type="text" className={`${props.theme}-input`} />
                        </div>
                        <div className="stock-quantity">
                            <h4>{t('add_product.product_form.advance.inventory.stock_quantity')}</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                    </div>
                    <div className="restock-date-pre-order">
                        <div className="restock-date">
                            <h4>{t('add_product.product_form.advance.inventory.restock_date')}</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                        <div className="pre-order">
                            <h4>{t('add_product.product_form.advance.inventory.pre_order')}</h4>
                            <input type="number" className={`${props.theme}-input`} />
                        </div>
                    </div>
                </div>
                <div className="allow-backorders">
                    <h4>{t('add_product.product_form.advance.inventory.allo_backorders.0')}</h4>
                    <div>
                        <div className="input">
                            <input type="checkbox" className="check" />
                        </div>
                        <span><p className="gray">{t('add_product.product_form.advance.inventory.allo_backorders.1')}</p></span>
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
    const {t} = useTranslation()
    return (

        <>
            <div className="additional-options">
                <div className="additional-tag-specific-tags">
                    <div className="additional-tag-title">
                        <h4>{t('add_product.product_form.advance.additional_options.additional_tag_title.0')}</h4>
                        <input type="text" className={`${props.theme}-input`} />
                        <h4>{t('add_product.product_form.advance.additional_options.additional_tag_title.1')}</h4>
                    </div>
                    <div className="specific-tags">
                        <h4>{t('add_product.product_form.advance.additional_options.specific_tags')}</h4>
                        <Tags tagifyRef={tagifyRef} settings={{}} value="watches,sports,clothes,battles" // Example value
                            onChange={e => console.log("CHANGED:", e.detail.value)}
                        />
                    </div>
                </div>
                <div className="additional-description">
                    <h4>{t('add_product.product_form.advance.additional_options.additional_description.0')}</h4>
                    <ReactQuill value={editorHtml} modules={modules} className={`${props.theme} editor`} onChange={setEditorHtml} />
                    <h4>{t('add_product.product_form.advance.additional_options.additional_description.1')}</h4>
                </div>
            </div>
        </>
    )
}
function Shipping(props) {
    const {t} = useTranslation()
    return (
        <>
            <div className="shipping">
                <div className="zip-city-state">
                    <div className="zip-code">
                        <h4>{t('add_product.product_form.advance.shipping.zip_code')}</h4>
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
                    <h4>{t('add_product.product_form.advance.shipping.weight.0')}</h4>
                    <input type="number" className={`${props.theme}-input`} />
                    <h4>{t('add_product.product_form.advance.shipping.weight.1')}</h4>
                </div>
                <div className="dimensions">
                    <div className="length">
                        <h4>{t('add_product.product_form.advance.shipping.dimensions')}</h4>
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
    const {t} = useTranslation()
    const handleComponentChange = (comp) => { setActiveComponent(comp) }
    const { store } = useContext(context)
    const bgColor = store.theme
    const themeStatus = bgColor === 'dark' ? 'dark' : 'light';
    return (
        <>
            <div className="advance">
                <div className="top-part">
                    <button className={`${themeStatus} ${activeComponent === 'Inventory' ? 'active' : ''}`} onClick={() => handleComponentChange('Inventory')}>{t('add_product.product_form.advance.inventory.title')}</button>
                    <button className={`${themeStatus} ${activeComponent === 'Additional Options' ? 'active' : ''}`} onClick={() => handleComponentChange('Additional Options')}>{t('add_product.product_form.advance.additional_options.title')}</button>
                    <button className={`${themeStatus} ${activeComponent === 'Shipping' ? 'active' : ''}`} onClick={() => handleComponentChange('Shipping')}>{t('add_product.product_form.advance.shipping.title')}</button>
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