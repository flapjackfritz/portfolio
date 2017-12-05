import React from 'react';

const MobileNav = (props) => {
  if (!props.isDisplayed) {
    return null;
  } else {
    return (
      <div className="dropdown-menu-mobile display">
        <a className="dropdown-item" href="/index.html">Home</a>
        <a className="dropdown-item" href="/blog.html">Blog</a>
        <a className="dropdown-item" href="/portfolio.html">Portfolio</a>
      </div>
    );
  }

};

export default MobileNav;
