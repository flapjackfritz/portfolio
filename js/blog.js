import React from 'react';

class Blog extends React.Component {

  render() {
    return (
      <div>
        <div className="blog-nav">
          <ul className="blog-nav-list">
            <li>Sept. 2017
              <ul className="blog-nav-list">
                <li>- <a href="#">Board Games!</a></li>
              </ul>
            </li>
            <li>Aug. 2017
              <ul className="blog-nav-list">
                <li>- <a href="#">The Cloud!</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <article className="blog-entry">
          <h2>Correlations Between Board Game and App Design</h2>
          <h3>September 8th, 2017 - Tommy Fritz</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </div>
    )
  };
};

export default Blog;
