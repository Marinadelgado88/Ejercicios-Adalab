function Students(props) {
  console.log('Props que recibe la madre', props);
  return (
    <div className='border'>
      <h2>Promocion: {props.promo}</h2>
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
    </div>
  );
}

Students.defaultProps = { name: 'Marina' };
export default Students;
