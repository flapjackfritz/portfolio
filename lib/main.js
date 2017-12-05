// import dependencies and styles
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import {myWork} from './content-data';

require('../styles/main.scss');

// import components
import PortfolioNav from './components/PortfolioNav';
import Blog from './components/Blog';
import ExampleWork from './components/ExampleWork';
import Title from './components/Title';
import Footer from './components/Footer';

let currentPage = document.getElementById('title').dataset.currentPage;

ReactDOM.render(<Title pageName={currentPage}/>, document.getElementById('title'));
ReactDOM.render(<PortfolioNav/>, document.getElementById('portfolio-nav'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

if (currentPage === 'blog') {
  ReactDOM.render(<Blog/>, document.getElementById('blog'));
}

if (currentPage === 'portfolio') {
  ReactDOM.render(<ExampleWork myWork={myWork}/>, document.getElementById('portfolio'));
}
