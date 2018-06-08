/**
 * Created by Damien-MSI on 05/06/2018.
 */
import React, { PureComponent } from 'react'

export const cellTypes = {
  snakeHead: 'snakeHead',
  snake: 'snake',
  snack: 'snack',
  wall: 'wall',
  none: 'none'
}

const stylize = (props) => ({
  divNone: {
    width: "25px",
    height: "25px",
    display: 'inline-block',
  },
  divSnake: {
    width: "25px",
    height: "25px",
    borderRadius: "11px",
    display: 'inline-block',
    backgroundColor: 'rgb(0,200,0)',
  },
  divHead: {
    width: "25px",
    height: "25px",
    borderRadius: "11px",
    display: 'inline-block',
    backgroundColor: 'green',
  },
  divSnack: {
    width: "25px",
    height: "25px",
    borderRadius: "12px",
    display: 'inline-block',
    backgroundColor: 'red',
  },
})

class Cell extends PureComponent {
  constructor(props) {
    super(props)
  }

  getStyle(cellType) {
    if (cellType.cellType === cellTypes.snakeHead) {
      return stylize(this.props).divHead
    } else if (cellType.cellType === cellTypes.snake) {
      return stylize(this.props).divSnake
    } else if (cellType.cellType === cellTypes.snack) {
      return stylize(this.props).divSnack
    } else {
      return stylize(this.props).divNone
    }
  }

  render() {
    const cellType = this.props

    return (
      <div style={ this.getStyle(cellType)} >

      </div>
    )
  }
}

export default Cell