import React from 'react';

import * as SCENES from '../scenes.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currScene: SCENES.SCENE_T1
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.currScene.text}</p>
        <p>{this.state.currScene.options.opt1.text}</p>
      </div>
    )
  }
}

export default App;