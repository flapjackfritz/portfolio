import React from 'react';
import {pageHeaders} from './content-data';

class Title extends React.Component {

  render() {
    let pageName = this.props.pageName;

    return (
      <div className="page-title">
        <h1>{pageHeaders[pageName].title}</h1>
        <h2>{pageHeaders[pageName].subtitle}</h2>
      </div>
    )
  };
};

export default Title;
