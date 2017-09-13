import React from 'react';

class PortfolioNav extends React.Component {

  render() {
    return (
      <nav className="background--gradiant">
        <div className="full-width nav-container">
          <ul className="nav-list nav-links">
            <li className="nav-item">
              <a className="text-white" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="#">Blog<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="text-white"
                href="https://docs.google.com/document/d/1pcfv8d7eAkboRA6X4P9yAG8a4o12MHoXarN5QjTO0UU/edit"
                target="_blank">Resume <i className="fa fa-external-link" aria-hidden="true"></i></a>
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
