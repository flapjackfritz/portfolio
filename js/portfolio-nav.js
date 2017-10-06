import React from 'react';

class PortfolioNav extends React.Component {

  render() {
    return (
      <nav className="background--gradiant" name="top">
        <div className="nav-container container-fluid">

          <i className="fa fa-bars nav-bars-mobile text-white" aria-hidden="true" id="dropdown-bars" data-toggle="dropdown"></i>
          <div className="dropdown-menu" aria-labelledby="dropdown-bars">
            <a className="dropdown-item" href="/index.html">Home</a>
            <a className="dropdown-item" href="/blog.html">Blog</a>
            <a className="dropdown-item" href="/portfolio.html">Portfolio</a>
          </div>

          <ul className="nav-list nav-links">
            <li className="nav-item">
              <a className="text-white" href="/index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="/blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="/portfolio.html">Portfolio</a>
            </li>
          </ul>
          <ul className="nav-list nav-social">
            <li className="nav-item">
              <a className="text-white"
                 title="GitHub Profile"
                 target="_blank"
                 href="https://github.com/flapjackfritz">
                <i className="fa fa-github nav-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="text-white"
                 title="LinkedIn Profile"
                 target="_blank"
                 href="https://www.linkedin.com/in/tommy-fritz-257b3233/">
                <i className="fa fa-linkedin nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  };
};

export default PortfolioNav
