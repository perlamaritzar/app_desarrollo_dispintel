import React from 'react';
import ReactDOM from 'react-dom';
import ReminderList from './components/ReminderList';
import AddReminder from './components/AddReminder';

const App = () => {
  const [reminders, setReminders] = React.useState([]);

  const handleAddReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div>
      <h1>Recordatorio de movimiento</h1>
      <AddReminder onAddReminder={handleAddReminder} />
      <ReminderList reminders={reminders} onDeleteReminder={handleDeleteReminder} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));