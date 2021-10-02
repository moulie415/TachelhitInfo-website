import { FunctionalComponent, h } from 'preact';
import axios from 'axios';
import { useState } from 'preact/hooks';
import { Snackbar } from '@material-ui/core';
import { colors } from '../../constants';


function Email() {
  const [name, setName] = useState('');
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
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('country', country);
      formData.append('message', message);

      const response = await axios.post("https://www.tachelhit.info/contact.php", formData);
      console.log(response); 
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="Email">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              {/* @ts-ignore */}
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="country">Country</label>
              {/* @ts-ignore */}
              <input type="text" className="form-control" id="country" value={country} onChange={e => setCountry(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="email">Email address</label>
              {/* @ts-ignore */}
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              {/* @ts-ignore */}
              <textarea className="form-control" rows={5} id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />
      </div>
  );
}

export default Email;
