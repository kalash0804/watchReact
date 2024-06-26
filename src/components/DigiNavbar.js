const DigiNavbar = () => {
    return (
        <div>
            
            {/* <section class="section-one section" id="home"> */}
        <nav>
            <div className="logo">stilo.</div>
            <ul className="navlinks" id="navlinks">
               <li>
                <a href="#home" className="active">Home</a>
               </li>
               <li>
                <a href="#product">Product</a>
               </li>
               <li>
                <a href="#arrivals">Arrivals</a>
               </li>
               <li>
                <a href="#offer">Offers</a>
               </li>
               <li>
                <a href="#collection">Collection</a>
               </li>
            </ul>
            <div className="hamburger" id="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

        </nav>
        </div>
     );
}
 
export default DigiNavbar;
