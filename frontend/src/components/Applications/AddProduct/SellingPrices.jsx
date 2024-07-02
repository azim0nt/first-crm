import { context } from "../../../store";
import { useContext, useState } from "react";
function SellingPrices(props) {
    const {store} = useContext(context)
    const [activeBtn, setActiveBtn] = useState(1)
    const theme = store.theme
    const btnStyle = {backgroundColor:theme.bgColor, color:theme.textColor}
    const handleClickBtn = (id) =>{setActiveBtn(id)}
    const themeStatus = theme.bgColor === '#171829' ? 'dark' : 'light'
    return ( 
        <>
        <div className="selling-prices">
            <div className="initial-cost-and-selling-price">
                <div className="initial-cost">
                    <h4>Inintial cost</h4>
                    <input style={{backgroundColor:theme.bgColor, color:theme.textColor}} type="number" />
                </div>
                <div className="selling-prics">
                    <h4>Selling Price</h4>
                    <input style={{backgroundColor:theme.bgColor, color:theme.textColor}} type="number" />
                </div>
            </div>
            <div className="choose-currency-and-product-stocks">
                <div className="choose-currency">
                    <h4>Choose your currency</h4>
                    <select name="" id="" style={{backgroundColor:theme.bgColor, color:theme.textColor}}>
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
                    <h4>Product stocks</h4>
                    <input style={{backgroundColor:theme.bgColor, color:theme.textColor}} type="number" />
                </div>
            </div>
            <div className="product-discount">
                <h4>Types of product discount</h4>
                <div className="btns">
                <button className={`${themeStatus} ${activeBtn === 1 ? 'active': ''}`} onClick={()=>{handleClickBtn(1)}} >Fixed Price</button>
                <button className={`${themeStatus} ${activeBtn === 2 ? 'active': ''}`} onClick={()=>{handleClickBtn(2)}}>BOGO(Buy one, Get one)</button>
                <button className={`${themeStatus} ${activeBtn === 3 ? 'active': ''}`} onClick={()=>{handleClickBtn(3)}}>Seasonal or holiday discount</button>
                <button className={`${themeStatus} ${activeBtn === 4 ? 'active': ''}`} onClick={()=>{handleClickBtn(4)}}>Percentage-based discount(%)</button>
                <button className={`${themeStatus} ${activeBtn === 5 ? 'active': ''}`} onClick={()=>{handleClickBtn(5)}}>Volume or bulk discount</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default SellingPrices;