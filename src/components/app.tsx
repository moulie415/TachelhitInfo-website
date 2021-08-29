import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { ThemeProvider } from '@material-ui/styles';
import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import theme from './theme';
import Psalms from '../routes/psalms/Psalms';
import Questions from '../routes/questions/Questions';
import Documents from '../routes/documents/Documents';

const App: FunctionalComponent = () => (
        <div id="preact_root">
          <ThemeProvider theme={theme}>
            <Header />
             <Router>
                <Route path="/" component={Home} />
                <Route path="psalms" component={Psalms} />
                <Route path="questions" component={Questions} />
                <Route path="documents" component={Documents} />
                <NotFoundPage default />
            </Router> 

            </ThemeProvider>
        </div>
    );

export default App;
