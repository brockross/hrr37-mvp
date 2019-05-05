import React from 'react';

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

        <p>{this.props.scene.text}</p>

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