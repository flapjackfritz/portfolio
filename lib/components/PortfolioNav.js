import React from 'react';
import MobileNav from './MobileNav';

class PortfolioNav extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {showMobileNav: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    console.log('You clicked the button!');
    this.setState(prevState => ({
      showMobileNav: !prevState.showMobileNav
    }));
  }

  render() {
    return (
      <nav className="background--gradiant" name="top">
        <div className="nav-container container-fluid">

          <i className="fa fa-bars nav-bars-mobile text-white" id="dropdown-bars" onClick={this.handleToggleClick}></i>

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
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/flapjackfritz">
                <i className="fa fa-github nav-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="text-white"
                title="LinkedIn Profile"
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/tommy-fritz-257b3233/">
                <i className="fa fa-linkedin nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <MobileNav isDisplayed={this.state.showMobileNav} />
      </nav>
    );
  }
}

export default PortfolioNav;
