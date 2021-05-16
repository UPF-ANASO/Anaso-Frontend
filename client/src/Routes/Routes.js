import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import PortfolioDetail from '../Pages/Portfolio/PortfolioDetail';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/portfoliodetail" exact component={PortfolioDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
