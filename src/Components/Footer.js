import logo from '../img/logo.svg';
import twitter from '../img/tw.svg';
import facebook from '../img/fb.svg';
import instagram from '../img/insta.svg';
import linkedin from '../img/linkedin.svg';
import youtube from '../img/youtube.svg';
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="content-container">
                <aside>
                    <figure className="logo">
                        <img src={logo} alt="logo" />
                    </figure>
                    <p>Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us</p>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                </aside>
                <aside>
                    <ul className="destination">
                        <h4>Destination</h4>
                        <li>Africa</li>
                        <li>Antarctica</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>America</li>
                    </ul>
                    <ul className="shop">
                        <h4>Shop</h4>
                        <li>Destination Guides</li>
                        <li>Pictorial & Gifts</li>
                        <li>Special Offers</li>
                        <li>Delivery Times</li>
                        <li>FAQs</li>
                    </ul>
                    <ul>
                        <h4>Interests</h4>
                        <li>Adventure Travel</li>
                        <li>Art And Culture</li>
                        <li>Wildlife And Nature</li>
                        <li>Family Holidays</li>
                        <li>Food And Drink</li>
                    </ul>
                </aside>
            </div>
            <ul className="social-media">
                <li><img src={twitter} alt="twitter-logo" /></li>
                <li><img src={facebook} alt="facebook-logo" /></li>
                <li><img src={instagram} alt="instagram-logo" /></li>
                <li><img src={linkedin} alt="linkedin-logo" /></li>
                <li><img src={youtube} alt="youtube-logo" /></li>
            </ul>
        </footer>
    );
}

export default Footer;