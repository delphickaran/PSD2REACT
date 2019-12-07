import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main:'#83a52e'},
    secondary: {main:'#fff'},
  },
  status: {
    danger: 'orange',
  },
});

export default theme;