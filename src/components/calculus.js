import React, { Component } from 'react'

export default class Calculus extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <div className="input-divs">
          <label className="input-labels">
          <span>{label}</span>
          <input type='text' readOnly disabled value={value} />
        </label>
      </div>
    )
  }
}
