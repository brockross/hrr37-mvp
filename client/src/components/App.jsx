import React, { useState } from 'react';
import styled from 'styled-components';

import * as SCENES from '../scenes.js';
import SceneDisplay from './SceneDisplay.jsx';
import Inventory from './Inventory.jsx';

//#region styles
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Title = styled.h1`
  font-family: Pacifico;
  font-size: 40px;
`
//#endregion

const App = () => {
  const [currScene, setScene] = useState('SCENE_T1');
  const [inventory, setInventory] = useState([]);

  const changeScene = (sceneCode) => {
    setScene(sceneCode);
  }

  const addToInventory = (item) => {
    setInventory([...inventory, item])
  }


    return (
      <MainWrapper>
        <Title>The Adventures of Jerry the Giraffe</Title>
        <SceneDisplay scene={SCENES[currScene]} changeScene={changeScene} addToInventory={addToInventory} inventory={inventory}/>
        <Inventory inventory={inventory}/>
      </MainWrapper>
    )
}

export default App;