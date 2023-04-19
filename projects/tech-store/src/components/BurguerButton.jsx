import { useState } from 'react';

const BurguerButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <div className='burguer-button'>
            <button className='brgr-style' onClick={handleClick}>
            <span className="material-symbols-outlined" >
                        menu
            </span>
            <div className={isOpen ? 'open' : ''}></div>
            </button>
        </div>
        {isOpen && <nav>
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Contact</a>
                <a href="#">About</a>

            </nav>}
        </>
    );
}

export default BurguerButton;
