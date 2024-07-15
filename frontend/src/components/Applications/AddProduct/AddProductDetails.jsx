import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import { useTranslation } from 'react-i18next';
import { context } from '../../../store';

function AddProductDetails() {
    const {store, setStore} = useContext(context)
    const theme = store.theme.textColor === '#171829' ? 'snow' : 'dark';
    const {t} = useTranslation()
    const [editorHtml, setEditorHtml] = useState('');
    const modules = {
        toolbar: [
          [{ 'size': ['', 'small', 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'indent': '-1' }, { 'indent': '+1' },{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image', 'video'],

        ],
      };

    return (
        <>
            <div className="add-product-details">
                <div className="product-title">
                    <h4>{t('add_product.product_form.add_product_details.product_title')}</h4>
                    <input type="text" style={{border:`1px solid ${store.theme.textColor}`, color:store.theme.textColor}} />
                </div>
            <ReactQuill  value={editorHtml} modules={modules} className={theme}  onChange={setEditorHtml} />

            </div>
        </>
    );
}

export default AddProductDetails;