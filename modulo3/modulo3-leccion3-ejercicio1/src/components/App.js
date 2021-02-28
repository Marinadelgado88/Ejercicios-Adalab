import Students from './Students.js';

function App() {
  const students = [
    {
      promo: 'A',
      name: 'Sofía',
      age: 20,
    },
    {
      promo: 'B',
      name: 'María',
      age: 21,
    },
    {
      promo: 'A',
      name: 'Lucía',
      age: 22,
    },
  ];
  // para filtrar por promo A, tengo que usar filter y despues mapear
  const filterStudents = students.filter((Students) => {
    console.log();
    return Students.promo === 'A';
  });

  return (
    <div>
      <h1>Voy a intentar pintar esta array en un listado de React</h1>
      {filterStudents.map((students) => {
        return (
          <li>
            <Students promo='A' age='32' />
            <Students promo='A' age='44' name='Rafa' />
          </li>
        );
      })}
    </div>
  );
}
export default App;
