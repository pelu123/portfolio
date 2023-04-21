import './components.css'
import NavLinks from './NavLinks';
import BurguerButton from './BurguerButton';

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <h2 className='navbar-icon'>Tech<span className='icon-span'>Store</span></h2>
            <NavLinks/>
            <BurguerButton/>
        </nav>
        </>
    );
}

export default Navbar;
