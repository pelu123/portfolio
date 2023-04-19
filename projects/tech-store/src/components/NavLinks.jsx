import CartWidget from "./CartWidget";

const NavLinks = () => {
    return (
        <div className="navbar-links active">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <CartWidget/>
        </div>
    );
}

export default NavLinks;
