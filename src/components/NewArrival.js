import Tissotimg from './Tissot.png';
import Klassc from './Klassc.png';
import citizen from './citizen.png';

const NewArrival = () => {
    return ( 
        <section className="section-three section" id="arrivals">
       
            <h1 className="section-heading">New Arrivals</h1>
            <div className="card-container">
                <div className="card">
                    <img src={Tissotimg} className="card-image"/>
                    <h2>Tisot</h2>
                    <p className="card-price">$ 3,988</p>
                    <button className="secondary-btn" ><a href="https://www.tissotwatches.com/en-in/" target="_blank">Discover</a></button>
                </div>

                <div className="card">
                    <img src={Klassc} className="card-image"/>
                    <h2>Klassc</h2>
                    <p className="card-price">$ 3,988</p>
                    <button className="secondary-btn"><a href="https://www.fossil.com/en-in/watches/mens-watches/classNameic-watches/" target="_blank">Discover</a></button>
                </div>

                <div className="card">
                    <img src={citizen} className="card-image"/>
                    <h2>Citizen</h2>
                    <p className="card-price">$ 3,988</p>
                    <button className="secondary-btn"><a href="https://www.citizenwatch.com/us/en/" target="_blank">Discover</a></button>
                </div>

        </div>

    </section>

     );
}
 
export default NewArrival;