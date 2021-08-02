
import Underscore from '../img/underscore.svg';
import './Home.scss';
import Explore from "./Explore";

const Home = () => {
    return (
        <>
        <section id="hero">
            <article className="content-hero">
            <div>
                <h1>Explore and Travel</h1>
                <h2>Holiday finder</h2>
                <div className="underscore">
                    <img src={Underscore} alt="underscore"/>
                </div>
                <form>
                    <select className="location">
                        <option>Location</option>
                    </select>
                    <select className="activity">
                        <option>Activity</option>
                    </select>
                    <select className="grade">
                        <option>Grade</option>
                    </select>
                    <select className="date">
                        <option>Date</option>
                    </select>
                <button>Explore</button>
                </form>
                </div>
            </article>
        </section>
        <Explore/>
        </>
    );
}

export default Home;