import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyIntro from '../Components/PorfoliDetail/MyIntro';
import Main from '../Pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/m" exact component={MyIntro} />
      </Switch>
    </Router>
  );
};

export default Routes;
