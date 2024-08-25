import React, { useState } from 'react';
import Reminder from './Reminder';
import EditReminder from './EditReminder';

const ReminderList = ({ reminders, onDeleteReminder, onEditReminder, onSaveReminder }) => {
  const [editingReminder, setEditingReminder] = useState(null);

  const handleEditReminder = (reminder) => {
    setEditingReminder(reminder);
  };

  const handleSaveReminder = (updatedReminder) => {
    setEditingReminder(null);
    onSaveReminder(updatedReminder);
  };

  return (
    <ul>
      {reminders.map((reminder) => (
        <li key={reminder.id}>
          {editingReminder && editingReminder.id === reminder.id ? (
            <EditReminder
              reminder={reminder}
              onSaveReminder={handleSaveReminder}
            />
          ) : (
            <Reminder
              reminder={reminder}
              onDeleteReminder={onDeleteReminder}
              onEditReminder={handleEditReminder}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;