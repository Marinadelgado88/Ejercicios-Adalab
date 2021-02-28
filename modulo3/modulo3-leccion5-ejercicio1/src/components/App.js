import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      email: '',
    };
  }
  handleInput(ev) {
    this.setState({ email: ev.target.value });
  }

  render() {
    return (
      <div>
        <h1>El estado de react en un solo componente</h1>
        <form action=''>
          <label htmlFor=''>Escribe aqui tu email</label>
          <input
            type='text'
            name='email'
            id='email'
            onChange={this.handleInput}
          />
        </form>
        <div>
          <p>el email de una usuaria es {this.state.email}</p>
        </div>
      </div>
    );
  }
}
export default App;
