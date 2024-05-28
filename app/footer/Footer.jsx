"use client";
import React, { Component } from 'react';
import Link from 'next/link';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'; // Import email and phone icons

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div id="section_footer" style={{ borderTop: '4px solid lightblue' }}>
        <div className='flex justify-between items-center px-4 py-4'>
          {/* Left side */}
          <div>
            <p className="text-5xl font-bold text-black mb-12 ml-8">CONTACT</p>
            {/* Email icon */}
            <div className="flex items-center mt-2 ml-8">
              <HiOutlineMail className="mr-2" size={20} />
              <span>Email: example@example.com</span>
            </div>
            {/* Phone icon */}
            <div className="flex items-center mt-2 ml-8">
              <HiOutlinePhone className="mr-2" size={20} />
              <span>Phone: +1234567890</span>
            </div>
          </div>
          {/* Right side */}
          <div className="bg-lightblue rounded-lg p-4">
            <div className="bg-dark-blue rounded-lg p-4">
              <h3 className="text-xl mb-2 text-white">Share Your Experience With Us!</h3>
              <div className="p-4 bg-dark-blue rounded-lg">
                <input type="text" className="w-full p-2 mb-2 border border-blue-500 rounded-lg bg-light-blue" placeholder="Your Name" />
                <textarea className="w-full p-2 border border-blue-500 rounded-lg bg-light-blue" rows="4" placeholder="Your Review"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center py-4'>
          <p>Copyright © {current_year}, NoteShaala. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
