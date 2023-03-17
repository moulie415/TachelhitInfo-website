import {FunctionalComponent, h} from 'preact';
import {Route, Router} from 'preact-router';
import {ThemeProvider} from '@material-ui/styles';
import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import theme from './theme';
import Psalms from '../routes/psalms/Psalms';
import Questions from '../routes/questions/Questions';
import Documents from '../routes/documents/Documents';
import Email from '../routes/email/Email';
import Applications from './applications';
// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';

const App: FunctionalComponent = () => {
  // const firebaseConfig = {
  //   apiKey: process.env.PREACT_APP_API_KEY,
  //   authDomain: process.env.PREACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.PREACT_APP_DATABASE_URL,
  //   projectId: process.env.PREACT_APP_PROJECT_ID,
  //   storageBucket: process.env.PREACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.PREACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.PREACT_APP_APP_ID,
  //   measurementId: process.env.PREACT_APP_MEASUREMENT_ID,
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  return (
    <div id="preact_root">
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Route path="/" component={Home} />
          <Route path="psalms" component={Psalms} />
          <Route path="questions" component={Questions} />
          <Route path="documents" component={Documents} />
          <Route path="email" component={Email} />
          <Route path="applications" component={Applications} />
          <NotFoundPage default />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
