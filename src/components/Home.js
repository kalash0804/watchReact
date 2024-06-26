import omegaimg from './omegablue.png';
const Home = () => {
    return ( 
        
        <header>
            <div className="img-container">
                <img src={omegaimg} className="header-image"/>
            </div>
            <div className="content">
                <h1 className="header-heading">Pure Luxury</h1>
                <h2 className="product-name">Blue Omega SA</h2>
                <p className="header-pricing">$3,879</p>
                <div className="btn-container">
                    <button className="primary-btn">Discover</button>
                    <button className="secondary-btn">Add to cart</button>
                </div>
            </div>

        </header>
     );
}
 
export default Home;