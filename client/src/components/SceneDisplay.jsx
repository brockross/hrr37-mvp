import React from 'react';
import styled from 'styled-components';

const PrimaryText = styled.p`
  color: #282828;
  font-family: Helvetica;
`
const Illustration = styled.img`
  width: 400px;
`

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  checkOptCondition(option) {
    if (option.condition) {
      return this.props.inventory.includes(option.condition);
    }
    return true;
  }

  render() {
    return (
      <div>
        <Illustration src={this.props.scene.illustration}/>

        <PrimaryText>{this.props.scene.text}</PrimaryText>

        {this.props.scene.options.map((option, idx) => {
          return <button key={idx} onClick={(e) => {
            this.props.changeScene(option.next);

            if (option.item) {
              this.props.addToInventory(option.item);
            }
          }}

          disabled={!this.checkOptCondition(option)}>
          {option.text}
          </button>
        })}

      </div>
    )
  }
}

export default SceneDisplay;