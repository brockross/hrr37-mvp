import React from 'react';
import styled from 'styled-components';

//#region styles
const SceneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PrimaryText = styled.div`
  color: #282828;
  font-family: 'Indie Flower';
  font-size: 20px;
  width: 33vw;
`
const Illustration = styled.img`
  width: 400px;
`
//#endregion
const SceneDisplay = (props) => {

  const checkOptCondition = (option) => {
    if (option.condition) {
      return props.inventory.includes(option.condition);
    }
    return true;
  }


    return (
      <SceneWrapper>
        <Illustration src={props.scene.illustration}/>

        <PrimaryText>{props.scene.text}</PrimaryText>

        {props.scene.options.map((option, idx) => {
          return <button key={idx} onClick={(e) => {
            props.changeScene(option.next);

            if (option.item) {
              props.addToInventory(option.item);
            }
          }}

          disabled={!checkOptCondition(option)}>
          {option.text}
          </button>
        })}

      </SceneWrapper>
    )
}

export default SceneDisplay;