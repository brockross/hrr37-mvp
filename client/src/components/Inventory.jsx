import React from 'react';
import styled from 'styled-components';

const InvWrapper = styled.div`
  background-image: url('https://s3-us-west-2.amazonaws.com/fec-brox/images/backpack.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 500px;
`

const Inventory = (props) => {
  return (
    <InvWrapper>
      <h4>INVENTORY:</h4>
      {props.inventory.map(item => {
        return <p>{item}</p>
      })}
    </InvWrapper>
  )
}

export default Inventory;