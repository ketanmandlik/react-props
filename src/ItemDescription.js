import React, { Component } from 'react';

export default class ItemDescription extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div>
        <h2>Item Description:</h2>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}
