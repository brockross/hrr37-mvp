import React from 'react';
import styled from 'styled-components';

const InvWrapper = styled.div`
  background-image: url('https://s3-us-west-2.amazonaws.com/fec-brox/images/backpack.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
`
const StyledList = styled.ul`
  position: relative;
  top: 20vh;
  font-family: Raleway;
`

const Inventory = (props) => {
  return (
    <div className={props.className}>
      <InvWrapper>
        <StyledList>
        {props.inventory.map(item => {
          return <li>{item}</li>
        })}
        </StyledList>
      </InvWrapper>
    </div>
  )
}

export default Inventory;