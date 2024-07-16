import { context } from "../../../store";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
function SellingPrices(props) {
    const {store} = useContext(context)
    const [activeBtn, setActiveBtn] = useState(1)
    const {t} = useTranslation()
    const theme = store.theme
    const btnStyle = {backgroundColor:theme.bgColor, color:theme.textColor}
    const handleClickBtn = (id) =>{setActiveBtn(id)}
    const themeStatus = theme.bgColor === '#171829' ? 'dark' : 'light'
    return ( 
        <>
        <div className="selling-prices">
            <div className="initial-cost-and-selling-price">
                <div className="initial-cost">
                    <h4>{t('add_product.product_form.selling_prices.initial_cost')}</h4>
                    <input className={store.theme+'-input'}     type="number" />
                </div>
                <div className="selling-prics">
                    <h4>{t('add_product.product_form.selling_prices.selling_prics')}</h4>
                    <input className={store.theme+'-input'}     type="number" />
                </div>
            </div>
            <div className="choose-currency-and-product-stocks">
                <div className="choose-currency">
                    <h4>{t('add_product.product_form.selling_prices.choose_currency')}</h4>
                    <select className={store.theme+'-input'} name="" id=""    >
                        <option value="dollar">Dollar $</option>
                        <option value="dollar">Euro €</option>
                        <option value="dollar">Rupees ₹</option>
                        <option value="dollar">British pounds £</option>
                        <option value="dollar">Russian Ruble ₽</option>
                        <option value="dollar">Japanese Yen ¥</option>
                        <option value="dollar">Singapore Dollar S$</option>
                    </select>
                </div>
                <div className="product-stocks">
                    <h4>{t('add_product.product_form.selling_prices.product_stocks')}</h4>
                    <input className={store.theme+'-input'}     type="number" />
                </div>
            </div>
            <div className="product-discount">
                <h4>{t('add_product.product_form.selling_prices.product_discount.title')}</h4>
                <div className="btns">
                <button className={`${activeBtn === 1 ? 'active': ''} ` +store.theme+'-text'} onClick={()=>{handleClickBtn(1)}}>{t('add_product.product_form.selling_prices.product_discount.btns.0')}</button>
                <button className={`${activeBtn === 2 ? 'active': ''} ` +store.theme+'-text'} onClick={()=>{handleClickBtn(2)}}>{t('add_product.product_form.selling_prices.product_discount.btns.1')}</button>
                <button className={`${activeBtn === 3 ? 'active': ''} ` +store.theme+'-text'} onClick={()=>{handleClickBtn(3)}}>{t('add_product.product_form.selling_prices.product_discount.btns.2')}</button>
                <button className={`${activeBtn === 4 ? 'active': ''} ` +store.theme+'-text'} onClick={()=>{handleClickBtn(4)}}>{t('add_product.product_form.selling_prices.product_discount.btns.3')}</button>
                <button className={`${activeBtn === 5 ? 'active': ''} ` +store.theme+'-text'} onClick={()=>{handleClickBtn(5)}}>{t('add_product.product_form.selling_prices.product_discount.btns.4')}</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default SellingPrices;