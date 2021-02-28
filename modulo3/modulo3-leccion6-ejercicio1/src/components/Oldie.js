import React, { useState } from 'react';

const Oldie = () => {
  const [number, setNumber] = useState(32);
  const handleNumber = () => {
    setNumber(number + 1);
  };
  const [present, setPresent] = useState(0);
  const handlePresent = () => {
    setPresent(present + 1);
  };
  return (
    <>
      <input type='button' value='Hazme más vieja' onClick={handleNumber} />
      <p>Hoy tengo {number}años de edad</p>
      <input type='button' value='Dame regalos' onClick={handlePresent} />
      <p>Tengo {present} regalos</p>
    </>
  );
};

export default Oldie;
