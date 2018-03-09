import React, { Component } from 'react'

class AddProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", description: "" };
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <fieldset>
        <legend>Add a new product</legend>
        <form
          onSubmit={e => this.props.onAdd(e, this.state.name, this.state.description)}>
          <div>
            <label>Product name:</label>
            <input
              type="text"
              name="productName"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="productDescription"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </fieldset>
    );
  }
}

export default AddProductForm;
