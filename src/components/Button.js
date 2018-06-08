import React, { PureComponent } from 'react'

const stylize = (props, state) => ({
  button: {
    backgroundColor: state.count > 5 ? 'red' : 'blue',
    color: state.count > 5 ? 'black' : 'white',
  }
})

class Button extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      label: 'click here'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

    this.setState({
      count: this.state.count +1
    })
    console.log('click !! '+ this.state.count )
  }

  render() {
    const styles = stylize(this.props, this.state)
    return (
      <button onClick={this.handleClick} style={styles.button}>
        {/* {this.state.label} */}
        {`Hello, you click ${this.state.count} times !`}
      </button>
    )
  }

}

export default Button