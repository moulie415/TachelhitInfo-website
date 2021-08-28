import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
          <ThemeProvider theme={theme}>
            <Header />
             <Router>
                <Route path="/" component={Home} />
                {/* <Route path="/link1" component={Profile} />
                <Route path="/link2" component={Profile} /> */}
                <NotFoundPage default />
            </Router> 

            </ThemeProvider>
        </div>
    );
};

export default App;
