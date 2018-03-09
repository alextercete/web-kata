import React, { Component } from 'react'

class Expander extends Component {
  render() {
    return (
      <span className="expander" onClick={this.props.onClick}>
        {this.props.expanded ? '-' : '+'}
      </span>
    );
  }
}

export default Expander;
