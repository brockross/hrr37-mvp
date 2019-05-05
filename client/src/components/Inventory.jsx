const Inventory = (props) => {
  return (
    <div style={{border: 'black solid 2px'}}>
      {props.inventory.map(item => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default Inventory;