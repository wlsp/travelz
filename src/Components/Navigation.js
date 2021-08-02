import {
    NavLink
} from "react-router-dom"
import logo from '../img/logo.svg';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="isActive">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destinations" activeClassName="isActive">Destination</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="isActive">About</NavLink>
                </li>
                <li>
                    <NavLink to="/partner" activeClassName="isActive">Partner</NavLink>
                </li>
                <button className="btn login">Login</button>
                <button className="btn register">Register</button>
            </ul>
        </nav>
    );
}

export default Navigation;