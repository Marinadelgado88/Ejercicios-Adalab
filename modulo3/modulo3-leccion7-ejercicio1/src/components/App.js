import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  const handleInput = (ev) => {
    // const key = ev.target.name;
    // const value = ev.target.value;
    setName(ev.currentTarget.value);
  };

  const handleTextarea = (ev) => {
    setDescription(ev.currentTarget.value);
  };
  const handleSelect = (ev) => {
    setLanguage(ev.currentTarget.value);
  };
  // const handleTextarea = (ev) => {
  //   const value = ev.target.value;
  //   setName(value);
  // };

  return (
    <div>
      <form>
        <label className='disply-block' htmlFor='name'>
          Name:
        </label>
        <input value={name} type='text' onChange={handleInput} name='name' />

        <label className='disply-block' htmlFor='name'>
          Descripción:
        </label>
        <textarea
          name='description'
          cols='30'
          rows='10'
          value={description}
          onChange={handleTextarea}
        ></textarea>

        <label className='disply-block' htmlFor='name'>
          Idioma:
        </label>
        <select name='language' value={language} onChange={handleSelect}>
          <option selected value='Español'>
            Español
          </option>
          <option value='Inglés'>Inglés</option>
          <option value='Portugués'>Portugués</option>
        </select>

        <input type='submit' value='Enviar' />
      </form>
      <div className='boder--medium'>
        <p>El Nombre es {name}</p>
        <p> La descripción es:{description}</p>
        <p>El idioma es:{language}</p>
      </div>
    </div>
  );
};

export default App;
