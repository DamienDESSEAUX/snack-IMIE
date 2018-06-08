/**
 * Created by Damien-MSI on 08/06/2018.
 */
import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import App from 'components/App'

// mise en place des options de jeu
class Game extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      nbVoeuxSouhait: 1,
      lines: 15,
      columns: 15
    }
  }


  render() {
    const { nbVoeuxSouhait, lines, columns} = this.state

    return (
      <div>
        <h1 align="center">Dragon Ball <strike>Super</strike>Snake</h1>
        <ul>
          Options :
          <li>Map : {lines}x{columns}</li>
          <li>Nombre de voeux souhaités : {nbVoeuxSouhait}</li>
        </ul>
        <App nbVoeuxSouhait={nbVoeuxSouhait} lines={lines} columns={columns} />
      </div>
    )
  }
}

export default Game