import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='upper-footer'>
        <h4 className='text-center'>
          <div className='All-right'>
            All Right Reserved &copy; BookBay
          </div>
        </h4>
      </div>
      <div className='lower-footer'>
        <p className="text-center">
          <Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
