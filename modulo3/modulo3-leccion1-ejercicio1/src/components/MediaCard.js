import React from "react";
import '../App.css';


class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const header = (
      <header className="App-header">
        <h1>Marina Delgado</h1>
        <p>Martes, 16 de Febrero de 2021</p>


      </header >
    );
    const main = (

      <main className="App-main">
        <p className="App-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus id, sint delectus explicabo reiciendis deserunt. Tempore totam eum magni harum, ut laboriosam quis, facilis beatae culpa maxime, aspernatur sapiente similique!</p>
      </main>
    );
    const footer = (
      <footer className="App-footer">
        <p className="paragraph"> Leer mas...</p>
        <p>37</p>
        <i class="fa fa-heart App-heart" className="App-heart" aria-hidden="true"></i>
      </footer>
    );
    return (
      <div className="App">
        {header}
        {main}
        {footer}
        <MediaCard name={this.props.name} />
      </div>
    );
  }
}
export default MediaCard;