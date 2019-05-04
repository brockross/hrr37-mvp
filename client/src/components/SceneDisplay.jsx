import React from 'react';

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <p>{this.props.scene.text}</p>

        <button onClick={(e) => {
          e.preventDefault();
          this.props.changeScene(this.props.scene.options.opt1.next);
        }}> {this.props.scene.options.opt1.text} </button>

        <button onClick={(e) => {
          e.preventDefault();
          this.props.changeScene(this.props.scene.options.opt2.next);
        }}> {this.props.scene.options.opt2.text} </button>

      </div>
    )
  }
}

export default SceneDisplay;