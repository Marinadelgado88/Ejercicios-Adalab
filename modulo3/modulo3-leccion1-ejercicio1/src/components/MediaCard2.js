function MediaCard2(props) {
  return (
    <div className='container'>
      <h1>Rafael Fernández</h1>
      <title>Martes 21 de febrero de 2021</title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        totam nemo, molestias in earum rem quam praesentium impedit tempora,
        beatae a omnis quae laudantium, expedita neque eligendi cumque quibusdam
        explicabo.
      </p>
      <p>Leer mas...</p>
      <p>{props.name}</p>
    </div>
  );
}

export default MediaCard2;
