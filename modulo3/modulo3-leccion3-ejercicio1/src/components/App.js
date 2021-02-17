import React from "react";
import Students from './Students';


class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20
      },
      {
        promo: 'B',
        name: 'María',
        age: 21
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22
      }
    ];

    return (
      <div>
        <h1>Voy a intentar pintar esta array en un listado de React</h1>
        {students.map(students => {
          return (
            <li>
              <h2>Promocion: {students.promo}</h2>
              <p>Nombre: {students.name}</p>
              <p>Edad: {students.age}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;