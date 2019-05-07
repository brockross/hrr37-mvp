import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 5vw;
`

const ChoiceBtn = (props) => {
  return (
    <Button disabled={props.disabled}>{props.text}</Button>
  )
}

export default ChoiceBtn;