// import dependencies and styles
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
require('../styles/main.scss');

// import components
import PortfolioNav from './components/portfolio-nav';
import Blog from './components/blog';
import ExampleWork from './components/example-work';
import Title from './components/title';
import Footer from './components/footer';


let currentPage = document.getElementById('title').dataset.currentPage;

ReactDOM.render(<Title pageName={currentPage}/>, document.getElementById('title'));
ReactDOM.render(<PortfolioNav/>, document.getElementById('portfolio-nav'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

if (currentPage === 'blog') {
  ReactDOM.render(<Blog/>, document.getElementById('blog'));
}

if (currentPage === 'portfolio') {
  ReactDOM.render(<ExampleWork/>, document.getElementById('portfolio'));
}
