import './style.css';

export const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-left">
            <button className="menu-mobile">
                <img src="../../../public/images/icon-menu.svg" alt={"menu"} width="16" height="15"/>
            </button>
            <img src="../../../public/images/logo.svg" alt={"logo"} width="137.5" height="20"/>
        </div>

        <div className="navbar-links" id="menu-desktop"> {/*visible for desktop only*/}
            <a href="#collections">Collections</a>
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

        <div className="navbar-right">
            <button className="btn-cart">
                <img src="../../../public/images/icon-cart.svg" alt={"cart"} width="22"/>
            </button>
            <img src="../../../public/images/image-avatar.png" alt={"avatar"} width="24"/>
        </div>
    </nav>
    )
};