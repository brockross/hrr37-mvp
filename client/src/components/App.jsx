import React from 'react';

import * as SCENES from '../scenes.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currScene: 'SCENE_T1'
    }
  }

  changeScene(sceneCode) {
    this.setState({
      currScene: sceneCode
    })
  }

  render() {
    return (
      <div>
        <p>{SCENES[this.state.currScene].text}</p>
        <p>{SCENES[this.state.currScene].options.opt1.text}</p>
      </div>
    )
  }
}

export default App;