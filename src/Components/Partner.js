import Stars from '../img/stars.png';
import Testimonial from '../img/testimonial.png';
import Yoga from '../img/yoga.png';
import Food from '../img/food.png';
import Peru from '../img/peru.png';
import Surfing from '../img/surfing.png';
import './Partner.scss';

const Partner = () => {
    return (
        <section id="partner">
            <div className="partner-wapper">
                <h2>Testimonials</h2>
                <article className="content-testimonial">
                    <aside>
                        <img src={Stars} alt="stars" />
                        <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh,
                            dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                        </p>
                        <h4>Edward Newgate</h4>
                        <h5>Founder Circle</h5>
                    </aside>
                    <aside>
                        <figure>
                            <img src={Testimonial} alt="Edward Newgate" />
                        </figure>
                    </aside>
                </article>
            </div>
            <article className="trending-stories">
                <div className="headlines">
                    <h2>Trending stories</h2>
                    <h3>View all &#62;</h3>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <figure>
                            <img src={Yoga} alt="Yoga" />
                        </figure>
                        <p>The many benefits of
                            taking a healing holiday</p>
                        <p>‘Helaing holidays’ are on the rise
                            tohelp maximise your health and happines...</p>
                        <p>Read more</p>
                    </div>
                    <div className="card">
                        <figure>
                            <img src={Food} alt="Food" />
                        </figure>
                        <p>The best Kyoto restaurant
                            to try Japanese food</p>
                        <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                            to visit...</p>
                        <p>Read more</p>
                    </div>
                    <div className="card">
                        <figure>
                            <img src={Peru} alt="Peru" />
                        </figure>
                        <p>Skip Chichen Itza and head
                            to this remote Yucatan</p>
                        <p>It’s remote and challenging to get,
                            but braving the jungle and exploring
                            these ruins without the...</p>
                        <p>Read more</p>
                    </div>
                    <div className="card">
                        <figure>
                            <img src={Surfing} alt="Surfing" />
                        </figure>
                        <p>Surf’s up at these beginner
                            spots around the world</p>
                        <p>If learning to surf has in on your to-
                            do list for a while, the good news
                            is: it’s never too late...</p>
                        <p>Read more</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Partner;