import React from 'react';

class PortfolioNav extends React.Component {

  render() {
    return (
      <nav className="background--gradiant">
        <div className="full-width nav-container">
          <ul className="nav-list nav-links">
            <li className="nav-item">
              <a className="text-white" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="#">Blog <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="text-white" href="#">Resume</a>
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
