import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const App = () => {
  const [reminders, setReminders] = React.useState([]);

  const handleAddReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const handleEditReminder = (updatedReminder) => {
    setReminders(
      reminders.map((reminder) => {
        if (reminder.id === updatedReminder.id) {
          return updatedReminder;
        }
        return reminder;
      })
    );
  };

  return (
    <div>
      <h1>Recordatorio de movimiento</h1>
      <AddReminder onAddReminder={handleAddReminder} />
      <ReminderList
        reminders={reminders}
        onDeleteReminder={handleDeleteReminder}
        onEditReminder={handleEditReminder}
      />
    </div>
  );
};


export default App;
