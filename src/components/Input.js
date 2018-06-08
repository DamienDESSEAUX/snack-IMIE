import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e)
    console.log(e.target.value, this.props.name)
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange}/>
    )
  }
}

export default Input