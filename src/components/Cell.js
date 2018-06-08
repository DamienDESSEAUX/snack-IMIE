/**
 * Created by Damien-MSI on 05/06/2018.
 */
import React, { PureComponent } from 'react'
import head from 'images/teteMini.png'

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
    backgroundColor: 'green',
  },
  divHead: {
    width: "25px",
    height: "25px",
    borderRadius: "11px",
    display: 'inline-block',
  },
  divSnack: {
    width: "25px",
    height: "25px",
    borderRadius: "12px",
    display: 'inline-block',
    backgroundColor: 'orange',
  },
  imageTete: {
    display: "flex",
    marginTop: "-35%",
    marginLeft: "-35%",
    width: "170%",
    height: "170%",
  }
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

  isHead() {
    if (this.props.cellType === cellTypes.snakeHead) {
      return true
    } else {
      return false
    }
  }

  render() {
    const cellType = this.props
    const image = this.isHead() ? (
      <img src={head} height="25px" style={stylize(this.props).imageTete}/>
    ) : (
      ""
    )

    return (
      <div style={ this.getStyle(cellType)} >
        {image}
      </div>
    )
  }
}

export default Cell