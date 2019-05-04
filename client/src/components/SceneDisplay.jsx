import React from 'react';

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <p>{this.props.scene.text}</p>

        {this.props.scene.options.map((option, idx) => {
          return <button key={idx} onClick={(e) => {
            this.props.changeScene(option.next);
          }}> {option.text} </button>
        })}

      </div>
    )
  }
}

export default SceneDisplay;