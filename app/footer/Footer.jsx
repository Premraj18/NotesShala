"use client";
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div id="section_footer" style={{ borderTop: '4px solid lightblue' }}>
        <div className='text-center bg-slate-200 py-4'>
          <p>Copyright © {current_year}, NoteShaala. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
