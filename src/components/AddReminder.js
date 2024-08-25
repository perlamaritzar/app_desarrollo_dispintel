import React, { useState } from 'react';

const AddReminder = ({ onAddReminder }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reminder = { text, time, id: Date.now() };
    onAddReminder(reminder);
    setText('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Nombre del recordatorio"
      /> 
      <br></br>
      <br></br>
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        placeholder="Hora"
      />
      <button>Agregar recordatorio</button>
    </form>
  );
};

export default AddReminder;