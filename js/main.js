// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
require('../styles/main.scss');

// import components
import ExampleWork from './example-work';
import PortfolioNav from './portfolio-nav';
import Title from './title';

ReactDOM.render(<PortfolioNav/>, document.getElementById('portfolio-nav'));
ReactDOM.render(<Title pageName={document.getElementById('title').dataset.currentPage}/>, document.getElementById('title'));
//ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
