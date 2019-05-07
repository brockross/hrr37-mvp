import React, { useState } from 'react';
import {useSpring, animated, Transition, useTransition} from 'react-spring'
import styled, { keyframes } from 'styled-components';


//#region styles
const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const SceneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 500px;
  background-position: center;
  background-color: whitesmoke;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;

  animation: ${Fade} 1s linear;
`
const Binding = styled.img`
  position: relative;
  top: -21px;
`
const PrimaryText = styled(animated.div)`
  color: #282828;
  font-family: Raleway;
  font-size: 20px;
  width: 33vw;
  margin: 5px;
  text-align: center;
  margin-bottom: 2vh;
`
const Illustration = styled.img`
  width: 400px;
  position: absolute;
  top: 12vh;
`
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ChoiceButton = styled.button`
  margin: 1vw;
  height: 9vh;
  width: 15vw;
  border: #333333 solid 1px;
  border-radius: 5px;
  font-family: Raleway;
  font-size: 24px;
  color: whitesmoke;
  background-color: #444444;
`
//#endregion
const SceneDisplay = (props) => {

  const testSpring = useSpring({config: {duration: 2000}, opacity: 1, from: {opacity: 0}})

  const checkOptCondition = (option) => {
    if (option.condition) {
      return props.inventory.includes(option.condition);
    }
    return true;
  }

  return (
    <div className={props.className}>
    <SceneWrapper>
      <Binding src={'https://s3-us-west-2.amazonaws.com/fec-brox/images/Overlay_Spiral_Color_Black_Long_Landscape.png'}/>

      <Illustration src={props.scene.illustration}/>

      <PrimaryText style={testSpring}>{props.scene.text}</PrimaryText>

    </SceneWrapper>

    <BtnWrapper>
    {props.scene.options.map((option, idx) => {
        return <ChoiceButton key={idx} onClick={(e) => {
          props.changeScene(option.next);

          if (option.item) {
            props.addToInventory(option.item);
          }
        }}

        disabled={!checkOptCondition(option)}>
        {option.text}
        </ChoiceButton>
      })}
    </BtnWrapper>
    </div>
  )
}

export default SceneDisplay;