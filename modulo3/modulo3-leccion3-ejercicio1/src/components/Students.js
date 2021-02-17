import React from 'react';

class Students extends React.Component {
  render() {

    console.log('Props que recibe la madre', this.props);
    return (
      <div className="border">
        <Students name={this.props} />
      </div>
    );
  }
}

export default Students;
