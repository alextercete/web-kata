import React, { Component } from 'react'

class FilterComponent extends Component {
  render() {
    return (
      <div className="filter">
        <label>
          Filter:
            <input
            type="text"
            placeholder="filter products..."
            onChange={this.props.onFilterChanged}
          />
        </label>
      </div>
    );
  }
}

export default FilterComponent;
