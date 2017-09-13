import React from 'react';

class Title extends React.Component {

  render() {
    let title = this.props.title;
    let subtitle = this.props.subtitle;

    return (
      <div className="page-title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  };
};

export default Title
