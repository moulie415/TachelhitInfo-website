import {FunctionalComponent, h} from 'preact';
import axios from 'axios';
import {useState} from 'preact/hooks';
import {Button, Card, Snackbar, Typography} from '@material-ui/core';

function validEmail(email: string) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}

function Email() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      if (!name) {
        setSnackbarMessage('Please enter a name');
        setSnackbarOpen(true);
        return;
      }
      if (!email || !validEmail(email)) {
        setSnackbarMessage('Invalid email');
        setSnackbarOpen(true);
        return;
      }
      if (!country) {
        setSnackbarMessage('Please enter a country');
        setSnackbarOpen(true);
        return;
      }
      if (!message) {
        setSnackbarMessage('Please enter a message');
        setSnackbarOpen(true);
        return;
      }
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('country', country);
      formData.append('message', message);
      formData.append('surname', surname);

      const response = await axios.post(
        'https://www.tachelhit.info/contact.php',
        formData,
      );
      setSnackbarMessage('Message sent');
      setSnackbarOpen(true);
      setName('');
      setEmail('');
      setCountry('');
      setMessage('');
    } catch (e) {
      // @ts-ignore
      setSnackbarMessage(e.message);
      setSnackbarOpen(true);
    }
  };

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 15,
        backgroundColor: '#f2f3f4',
      }}>
      <Card>
        <div
          style={{
            backgroundColor: 'rgb(238, 28, 37)',
            padding: 10,
            width: '100%',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          <Typography style={{marginRight: 10, color: '#fff'}} variant="h4">
            Ara-yaghd - ⴰⵔⴰ ⵢⴰⵖⴷ
          </Typography>
          <Typography style={{color: '#fff'}} variant="h6">
            Contact us - Contactez-nous - اتصل بنا
          </Typography>
        </div>
        <div className="email-form" style={{padding: 20}}>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group" style={{padding: 10}}>
              <div htmlFor="name" style={{marginBottom: 5}}>
                Isem - ⵉⵙⴻⵎ - Name - Nom - الاسم
              </div>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={e => {
                  // @ts-ignore
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{display: 'none', padding: 10}}>
              <div htmlFor="surname" style={{marginBottom: 5}}>
                Surname
              </div>
              <input
                type="text"
                className="form-control"
                id="surname"
                value={surname}
                onChange={e => {
                  // @ts-ignore
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{padding: 10}}>
              <div htmlFor="country" style={{marginBottom: 5}}>
                Tamazirt - ⵜⵎⴰⵣⵢⵔⵜ - Country - Pays - البلاد
              </div>
              <input
                type="text"
                className="form-control"
                id="country"
                value={country}
                onChange={e => {
                  // @ts-ignore
                  setCountry(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{padding: 10}}>
              <div htmlFor="email" style={{marginBottom: 5}}>
                E-Mail - ⵉ-ⵎⴰⵢⵍ - E-Mail - عنوان البريد الإلكتروني *
              </div>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={e => {
                  // @ts-ignore
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{padding: 10}}>
              <div htmlFor="message" style={{marginBottom: 5}}>
                Tabrat nnek / nnem - ⵜⴰⴱⵔⴰⵜ ⵏⵏⴻⴽ / ⵏⵏⴻⵎ - Your message - Ton
                message - رسالتك
              </div>
              <textarea
                style={{width: '25%', minWidth: 300}}
                className="form-control"
                rows={5}
                id="message"
                value={message}
                onChange={e => {
                  // @ts-ignore
                  setMessage(e.target.value);
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{margin: 10}}
              data-callback="onSubmit"
              data-action="submit"
              type="submit">
              Azn - ⴰⵣⵏ - Submit - Envoyer - الارسال
            </Button>
          </form>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </div>
      </Card>
    </div>
  );
}

export default Email;
