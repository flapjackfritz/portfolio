// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
require('../styles/main.scss');

// import components
import PortfolioNav from './portfolio-nav';
import Blog from './blog';
import ExampleWork from './example-work';
import Title from './title';
import Footer from './footer';

import {myWork} from './content-data';

let currentPage = document.getElementById('title').dataset.currentPage;

ReactDOM.render(<Title pageName={currentPage}/>, document.getElementById('title'));
ReactDOM.render(<PortfolioNav/>, document.getElementById('portfolio-nav'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

if (currentPage === "blog") {
  ReactDOM.render(<Blog/>, document.getElementById('blog'));
}

if (currentPage === "portfolio") {
  ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('portfolio'));
}
