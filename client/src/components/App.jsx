import React from 'react';

import * as SCENES from '../scenes.js';
import SceneDisplay from './SceneDisplay.jsx';

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
        <SceneDisplay scene={SCENES[this.state.currScene]} changeScene={this.changeScene.bind(this)}/>
      </div>
    )
  }
}

export default App;