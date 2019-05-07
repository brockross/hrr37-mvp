import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

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
  font-size: 48px;
  color: #333333;
  margin: 40px 0px;
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

      {/* <Inventory inventory={inventory}/> */}

      <Sound url={'http://soundimage.org/wp-content/uploads/2017/07/Arcade-Puzzler.mp3'} playStatus={Sound.status.PLAYING} volume={30} loop={true} />
    </MainWrapper>


  )
}

export default App;