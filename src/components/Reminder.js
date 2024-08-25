import React from 'react';

const Reminder = ({ reminder, onDeleteReminder, onEditReminder }) => {
  const handleDelete = () => {
    onDeleteReminder(reminder.id);
  };

  const handleEdit = () => {
    onEditReminder(reminder);
  };

  return (
    <div>
      <p>{reminder.text}</p>
      <p>{reminder.time}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
};

export default Reminder;