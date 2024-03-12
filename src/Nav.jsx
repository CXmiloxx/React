import { useState } from 'react';
import './App.css';

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    const menuOptions = document.querySelector(".menu-options");
    menuOptions.classList.toggle("active");
  };

  return (
    <>
      <nav className={isDarkMode ? "dark" : ""}>
        <span className="logo"><i className='bx bxl-medium'></i></span>
        <button className="btn-menu" onClick={toggleMenu}><i className='bx bx-menu'></i></button>
        <ul className="menu-options">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
            <button className="switch" id="switch" onClick={toggleDarkMode}>
              <span><i className='bx bxs-sun'></i></span>
              <span><i className='bx bxs-moon'></i></span>
            </button>
        </ul>
    </nav>
    </>
  );
}

export default Nav;
