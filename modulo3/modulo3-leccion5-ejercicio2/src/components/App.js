import '../stylesheets/App.css';
import React from React.Component;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.state = {
      color: '',
    };
  }

  handleColor() {
    this.setState((prevState, props) => {
      let newColor;
      if (prevState.color === 'App') {
        newColor = 'red';
      } else {
        newColor = 'App';
      }
    });
  }

  render() {
    return (
      <div
        className='App ${this.state.color}'
        type='color'
        onClick={this.handleColor}
      ></div>
    );
  }
}
export default App;
