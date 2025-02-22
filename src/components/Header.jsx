import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="Navbar Logo"/>
                </Link>
                
                <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
                    <li><Link to="/profile/sdfsdf">Ernest Achiever</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>

                <button className="nav__toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <AiOutlineClose/> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Header;
