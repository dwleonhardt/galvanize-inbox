import React from 'react';

class Labels extends React.Component {


  render() {
    return (
      <span className="label label-warning">{this.props.label}</span>
    );
  }
}

export default Labels;
