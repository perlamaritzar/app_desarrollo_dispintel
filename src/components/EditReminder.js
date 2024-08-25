import React, { useState } from 'react';

const EditReminder = ({ reminder, onSaveReminder }) => {
  const [text, setText] = useState(reminder.text);
  const [time, setTime] = useState(reminder.time);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedReminder = { ...reminder, text, time };
    onSaveReminder(updatedReminder);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Ingrese el texto del recordatorio"
      />
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        placeholder="Ingrese la hora del recordatorio"
      />
      <button>Guardar cambios</button>
    </form>
  );
};

export default EditReminder;