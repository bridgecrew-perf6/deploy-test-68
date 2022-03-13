import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar" id="mainNav">
      <a class="navbar-brand" href="/">
        <div class="custom-org-name">Hot Lunch Box</div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#aboutUs">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#menu">
              Menu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contactUs">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;