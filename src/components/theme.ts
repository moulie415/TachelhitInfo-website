import {red} from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import {colors} from '../constants';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: '#007354',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
