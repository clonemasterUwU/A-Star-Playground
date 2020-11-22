import Main from './components/Main'
import GlobalFonts from './fonts/fonts'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    button:{
      textTransform:"none",
    },
    fontSize:24,
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Main />
    </ThemeProvider>
    
  )
}

export default App;
