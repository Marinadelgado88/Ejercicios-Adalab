import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <button className={this.props.active === true ? 'active' : 'disable'}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
