import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';

import { context } from '../../../store';

function AddProductDetails() {
    const {store, setStore} = useContext(context)
    const [editorHtml, setEditorHtml] = useState('');
    const theme = store.theme.textColor === '#171829' ? 'snow' : 'dark';
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
                    <h4>Product Title</h4>
                    <input type="text" style={{border:`1px solid ${store.theme.textColor}`, color:store.theme.textColor}} />
                </div>
            <ReactQuill  value={editorHtml} modules={modules} className={theme}  onChange={setEditorHtml} />

            </div>
        </>
    );
}

export default AddProductDetails;