import DragDrop from '../../common/DragDrop';


function ProductGallery() {
    return ( 
        <>
        <div className="product-gallery">
            <div className="product-image">
                <h4>Product Image</h4>
                <DragDrop/>
            </div>
            <div className="product-image">
                <h4>Product Image</h4>
                <DragDrop/>
            </div>
        </div>
        </>
     );
}

export default ProductGallery;