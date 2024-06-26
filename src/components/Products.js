import productimg from './productwatch.png';
const Products = () => {
    return ( 
        <section class="section-two section" id="product">
        <div className="section-two-container">
        <div className="section-two-inner-container">
            <div className="content">
                <h1 className="section-two-heading">Quartz Casio</h1>
                <p className="section-two-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus ut exercitationem ad quia vero, facilis quaerat enim minima, commodi aspernatur delectus consequatur dolore officia.</p>
                <p className="section-two-pricing">$ 3,899</p>
                <button className="section-two-btn">Order Now</button>
            </div>
            <div className="image-container">
                <img src={productimg} className="section-two-image"/>
            </div>

        </div>
    </div>
</section>
     );
}
 
export default Products;