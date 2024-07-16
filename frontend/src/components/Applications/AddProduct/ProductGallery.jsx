import DragDrop from '../../common/DragDrop';
import { useTranslation } from 'react-i18next';

function ProductGallery() {
    const {t} = useTranslation()
    return ( 
        <>
        <div className="product-gallery">
            <div className="product-image">
                <h4>{t('add_product.product_form.product_gallery.product_image')}</h4>
                <DragDrop/>
            </div>
            <div className="product-image">
                <h4>{t('add_product.product_form.product_gallery.product_image')}</h4>
                <DragDrop/>
            </div>
        </div>
        </>
     );
}

export default ProductGallery;