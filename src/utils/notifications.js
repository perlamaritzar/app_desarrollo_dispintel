const notifications = {
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Permiso concedido');
        } else {
          console.log('Permiso denegado');
        }
      } catch (error) {
        console.error('Error al solicitar permiso:', error);
      }
    },
  
    async showNotification(reminder) {
      try {
        const notification = new Notification(reminder.text, {
          body: reminder.time,
          icon: 'https://example.com/icon.png',
        });
        notification.onclick = () => {
          console.log('Notificación clickeada');
        };
      } catch (error) {
        console.error('Error al mostrar notificación:', error);
      }
    },
  };
  
  export default notifications;