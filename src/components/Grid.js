/**
 * Created by Damien-MSI on 05/06/2018.
 */
import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import Cell from 'components/Cell'
import  Element from 'entities/Element'
import { cellTypes } from 'components/Cell'

const stylize = (props) => ({
  div: {
    height: "25px",
  },
  divWall: {
    border: 'solid 3px black',
    height: props.lines*25+"px",
    width: props.columns*25+"px",
    backgroundColor: 'rgba(150,150,150,0.5)',
    margin: 'auto',
  },
})

class Grid extends PureComponent {
  constructor(props) {
    super(props)

    this.getPresence = this.getPresence.bind(this)
  }

  getPresence(maCell, positionsAll) {
    let cellType = cellTypes.none

    positionsAll.forEach(function(element) {
      if (maCell.line === element.line && maCell.column === element.column) {
        cellType = element.cellType
      }
    })
    return cellType
  }

  render() {
    const {lines, columns, positionsAll } = this.props;

    return (
      <div style={stylize(this.props).title}>
        <h3 align="center">Your size : { positionsAll.length-1 }</h3>
          <div style={stylize(this.props).divWall}>
          {
            Array(lines).fill(true).map((value,y) => (
              <div key={`lines-${y}`} style={stylize(this.props).div}>
                {
                  Array(columns).fill(true).map((value,x) => (
                      /*<Cell key={`${x}.${y}`} isPresent={ this.getPresence(`${x}.${y}`) }/>*/
                      <Cell key={`${x}.${y}`} cellType={ this.getPresence(new Element(y, x, cellTypes.none), positionsAll) }/>
                  ))
                }
              </div>
            ))
          }
          </div>
      </div>
    )
  }


}

export default Grid