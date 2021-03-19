import React, { Component } from 'react'

export default class Calculus extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <div >
          <label>
          <span className="input-labels" >{label}</span>
          <input className="inputs-div" type='text' readOnly disabled value={value} />
        </label>
      </div>
    )
  }
}
