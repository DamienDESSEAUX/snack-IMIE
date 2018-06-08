/**
 * Created by Damien-MSI on 05/06/2018.
 */
import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { cellTypes } from 'components/Cell'
import Grid from 'components/Grid'
import  Element from 'entities/Element'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      positions: Array(),
      positionTete: new Element(5, 5, cellTypes.snakeHead),
      positionSnake: Array(),
      positionSnack: new Element(3, 3, cellTypes.snack),
      lastDirection: 0,
      score: 0,
      isPause: true
    }

    this.state.positionSnake.push(new Element(this.state.positionTete.line, this.state.positionTete.column-1, cellTypes.snake))
    this.state.lastDirection = 39

    this.handleKeyup = this.handleKeyup.bind(this)
    this.generateSnack = this.generateSnack.bind(this)
    document.addEventListener('keyup', this.handleKeyup)
  }

  resetGame(){
    let newSnake = [].concat(new Element(5, 4, cellTypes.snake))
    this.setState({
      positionTete: new Element(5, 5, cellTypes.snakeHead),
      positionSnake: newSnake,
      positionSnack: this.generateSnack(),
      lastDirection: 39,
      score: 0,
    })
  }

  handleKeyup(event) {

    if (event.keyCode == 19 || event.keyCode == 32) {
      this.setState({
        isPause: !this.state.isPause
      })
    }

    if (this.state.isPause) {
      let newPositionTeteLine = this.state.positionTete.line
      let newPositionTeteColonne = this.state.positionTete.column

      if(event.keyCode == 37 && this.state.lastDirection != 39) {
        newPositionTeteColonne = newPositionTeteColonne-1
        this.actualise(newPositionTeteColonne, newPositionTeteLine, event.keyCode)
      } else if(event.keyCode == 38 && this.state.lastDirection != 40) {
        newPositionTeteLine = newPositionTeteLine-1
        this.actualise(newPositionTeteColonne, newPositionTeteLine, event.keyCode)
      } else if(event.keyCode == 39 && this.state.lastDirection != 37) {
        newPositionTeteColonne = newPositionTeteColonne+1
        this.actualise(newPositionTeteColonne, newPositionTeteLine, event.keyCode)
      } else if(event.keyCode == 40  && this.state.lastDirection != 38) {
        newPositionTeteLine = newPositionTeteLine+1
        this.actualise(newPositionTeteColonne, newPositionTeteLine, event.keyCode)
      }
    }
  }

  actualise(newPositionTeteColonne, newPositionTeteLine, newLastDirection){
    const { positionSnake, positionTete } = this.state;

    positionSnake.forEach(function(element) {
      element.cellType = cellTypes.snake
    })
    positionSnake.unshift(new Element(positionTete.line, positionTete.column, cellTypes.snake))
    this.setState({
      positionTete: new Element(newPositionTeteLine, newPositionTeteColonne, cellTypes.snakeHead),
      positionSnake: positionSnake,
      lastDirection: newLastDirection
    })

    let cellColision = this.detectColission()

    if ( cellColision === cellTypes.none) {
      this.state.positionSnake.pop()
      this.setState({
        positionSnake: [].concat(this.state.positionSnake)
      })
    } else if (cellColision === cellTypes.snack) {
      this.setState({
        score: this.state.score+1
      })
      if (this.props.nbVoeuxSouhait === this.getNombreDeVoeux()) {
        console.log("Win !!")
      }
    } else if (cellColision === cellTypes.wall || cellColision === cellTypes.snake) {
      this.resetGame()
    }

  }

  generateSnack(){
    const { positionSnake, positionTete } = this.state;
    let flag = true
    let newSnack = new Element()
    while (flag) {
      flag = false
      newSnack = new Element(Math.floor(Math.random() * Math.floor(this.state.lines)),Math.floor(Math.random() * Math.floor(this.state.columns)),cellTypes.snack)
      positionSnake.forEach(function(element) {
        if (newSnack.line === element.line && newSnack.column === element.column) {
          flag = true
        }
      })
      if (newSnack.line === positionTete.line && newSnack.column === positionTete.column) {
        flag = true
      }
    }

    return newSnack
  }
  
  detectColission(){
    const { positionSnake, positionSnack, positionTete } = this.state;
    const { lines, columns } = this.props;
    let cellColision = cellTypes.none
    // snack
    if (positionTete.line === positionSnack.line && positionTete.column === positionSnack.column) {
      cellColision = cellTypes.snack
    } else if (positionTete.line < 0 || positionTete.column < 0 || positionTete.line >= lines || positionTete.column >= columns) {
      cellColision = cellTypes.wall
    } else {
      positionSnake.forEach(function(element) {
        if (element.line === positionTete.line && element.column === positionTete.column) {
          cellColision = cellTypes.snake
        }
      })
    }

    return cellColision
  }

  getNombreDeVoeux(){
    return Math.trunc(this.state.score/7)
  }

  render() {

    const { positionSnake, positionSnack, positionTete, score } = this.state;
    const { lines, columns, nbVoeuxSouhait } = this.props;

    let positionsAll = [positionSnack].concat(positionSnake).concat(positionTete)

    return (
      <div>
        <ul>
          Stats :
          <li>Ta taille : { positionSnake.length + 1 }</li>
          <li>Nombre de boules récupérées : { score }</li>
          <li>Nombre de voeux : { this.getNombreDeVoeux() }</li>
        </ul>
        Aide Shenron à récupérer les 7 boules du Dragon pour obtenir le voeux !!
        <Grid lines={lines} columns={columns} positionsAll={positionsAll} score={score} />
      </div>
    )
  }
}

export default App
