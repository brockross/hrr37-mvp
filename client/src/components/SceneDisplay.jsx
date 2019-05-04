import React from 'react';

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.scene.text}</p>
        <button onClick={}>OPTION 1</button>
      </div>
    )
  }
}

export default SceneDisplay;