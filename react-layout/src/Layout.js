import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import "./css/Layout.css";
import Header from "./components/Header";
const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <Header />
            <button onClick={toggleMenu}>Toggle</button>
            
            <nav id="main-nav" className={menuOpen?"":"hide-small"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/pictures">Pictures</Link>
            </nav>
            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;