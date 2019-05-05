import React from 'react';

const Inventory = (props) => {
  return (
    <div style={{border: 'black solid 2px', padding: '5px', margin: '5px'}}>
      <h4>INVENTORY:</h4>
      {props.inventory.map(item => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default Inventory;