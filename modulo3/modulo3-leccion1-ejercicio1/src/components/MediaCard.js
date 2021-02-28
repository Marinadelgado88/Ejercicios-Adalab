import '../stylesheets/App.css';

function MediaCard(props) {
  return (
    <div className='container'>
      <h1>Marina Delgado</h1>
      <title>Martes 21 de febrero de 2021</title>
      <p>{props.name}</p>
      <p>Leer mas...</p>
      <p>37</p>
    </div>
  );
}

export default MediaCard;
