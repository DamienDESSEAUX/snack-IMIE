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
    }
  }


  render() {
    return (
      <div>
        <h1 align="center">Dragon Ball <strike>Super</strike>Snake</h1>
        <App/>
      </div>
    )
  }
}

export default Game