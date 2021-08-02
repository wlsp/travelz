import Indonesia from '../img/indonesia.png';
import China from '../img/china.png';
import Swiss from '../img/swiss.png';
import Montenegro from '../img/montenegro.png';
import './Destinations.scss';

const Destinations = () => {
    return ( 
        <article id="destinations">
            <div className="content-wrapper">
            <aside>
                <h2>Featured destinations</h2>
                <h3>View all &#62;</h3>
            </aside>
            <aside>
                <figure><img src={Indonesia} alt="Indonesia"/></figure>
                <figure><img src={China} alt="China"/></figure>
                <figure><img src={Swiss} alt="Swiss"/> </figure>
                <figure><img src={Montenegro} alt="Montenegro"/></figure>
            </aside>
            </div>
        </article>
     );
}
 
export default Destinations;