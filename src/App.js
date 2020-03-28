import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  createMuiTheme, responsiveFontSizes, ThemeProvider,
} from '@material-ui/core/styles';
import Landing from './components/landing';
import Photography from './components/photography';
import Engineering from './components/engineering';
import './App.css';


function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/photography" exact component={Photography} />
            <Route path="/engineering" exact component={Engineering} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>

  );
}
export default App;
