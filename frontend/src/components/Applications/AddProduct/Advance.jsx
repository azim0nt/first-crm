import { useState, useContext } from "react";
import { context } from "../../../store";
import ReactQuill from 'react-quill';

function Inventory(props){
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
                            <input type="number"  className={`${props.theme}-input`}/>
                        </div>
                        <div className="pre-order">
                            <h4>Pre-Order</h4>
                            <input type="number"  className={`${props.theme}-input`}/>
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
function AdditionalOptions(props){
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
        // <ReactQuill  value={editorHtml} modules={modules} className={theme}  onChange={setEditorHtml} />

        <>
            <div className="additional-options">
                <div className="additional-tag-title">
                    <h4>Additional Tag Title</h4>
                    <input type="text"  className={`${props.theme}-input`}/>
                </div>
            </div>
        </>
    )
}
function Advance() {
    const [activeComponent, setActiveComponent] = useState('Inventory');
    
    const handleComponentChange = (comp) => {setActiveComponent(comp)}
    const {store} = useContext(context)
    const bgColor = store.theme.bgColor
    const themeStatus = bgColor === '#171829' ? 'dark' : 'light';
    return ( 
        <>
        <div className="advance">
            <div className="top-part">
                <button  className={`${themeStatus} ${activeComponent === 'Inventory' ? 'active' : ''}`}          onClick={() => handleComponentChange('Inventory')}>Inventory</button>
                <button  className={`${themeStatus} ${activeComponent === 'Additional Options' ? 'active' : ''}`} onClick={() => handleComponentChange('Additional Options')}>Additional Options</button>
                <button  className={`${themeStatus} ${activeComponent === 'Shipping' ? 'active' : ''}`}           onClick={() => handleComponentChange('Shipping')}>Shipping</button>
            </div>
            <div className="bottom-part">
                {activeComponent === 'Inventory' && <Inventory theme={themeStatus}/>}
                {activeComponent === 'Additional Options' && <AdditionalOptions theme={themeStatus}/>}
   
            </div>
        </div>
        </>
     );
}

export default Advance;