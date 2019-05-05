import React from 'react';

import * as SCENES from '../scenes.js';
import SceneDisplay from './SceneDisplay.jsx';
import Inventory from './Inventory.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currScene: 'SCENE_T1',
      inventory: []
    }
  }

  changeScene(sceneCode) {
    this.setState({
      currScene: sceneCode
    })
  }

  addToInventory(item) {
    let inventory = this.state.inventory;
    inventory.push(item);

    this.setState({
      inventory
    })
  }

  render() {
    return (
      <div>
        <SceneDisplay scene={SCENES[this.state.currScene]} changeScene={this.changeScene.bind(this)} addToInventory={this.addToInventory.bind(this)} inventory={this.state.inventory}/>
        <Inventory inventory={this.state.inventory}/>
      </div>
    )
  }
}

export default App;