import React from 'react';
import Main from './Main';
import Metrics from './Metrics';
import LastMovie from './LastMovie';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
      <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/Metrics">
                <Metrics />
            </Route>
            <Route path="/LastMovie">
                <LastMovie />
            </Route>
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;


