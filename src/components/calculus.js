import React, { Component } from 'react'

export default class Calculus extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <div>
          <label>
          <span>{label}</span>
          <input type='text' readOnly disabled value={value} />
        </label>
      </div>
    )
  }
}
