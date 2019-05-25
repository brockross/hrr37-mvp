import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

import * as SCENES from '../scenes.js';
import SceneDisplay from './SceneDisplay.jsx';
import Inventory from './Inventory.jsx';

//#region styles
const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  grid-template-rows: 12vh 80vh 8vh;
  grid-gap: 3vw;
`
const Title = styled.div`
  font-family: Pacifico;
  font-size: 3em;
  text-align: center;
  color: #333333;
  margin-top: 2vh;
  grid-column: 2 / span 2;
  grid-row: 1;
`
const StyledSceneDisplay = styled(SceneDisplay)`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
`
const StyledInventory = styled(Inventory)`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
`

//#endregion

const App = () => {
  const [currScene, setScene] = useState('SCENE_T1');
  const [inventory, setInventory] = useState(['giraffe snacks']);

  const changeScene = (sceneCode) => {
    setScene(sceneCode);
  }
  const addToInventory = (item) => {
    setInventory([...inventory, item])
  }

  return (
    <MainWrapper>
      <Title>The Adventures of Jerry the Giraffe</Title>

      <StyledSceneDisplay scene={SCENES[currScene]} changeScene={changeScene} addToInventory={addToInventory} inventory={inventory}/>

      <StyledInventory inventory={inventory}/>

      {/* <Sound url={'http://soundimage.org/wp-content/uploads/2017/07/Arcade-Puzzler.mp3'} playStatus={Sound.status.PLAYING} volume={30} loop={true} />*/}
    </MainWrapper>


  )
}

export default App;