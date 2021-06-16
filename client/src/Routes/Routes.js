import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../Pages/Main/Main';
import Login from '../Pages/User/Login';
import Signup from '../Pages/User/Signup';
import UserEdit from '../Pages/User/UserEdit';

import PortfolioDetail from '../Pages/Portfolio/PortfolioDetail';
import PortfolioList from '../Pages/Portfolio/PortfolioList';
import ApiTest from '../Pages/Portfolio/ApiTest';

import ContestMain from '../Pages/Contest/ContestMain';
import ContestDetail from '../Pages/Contest/ContestDetail';
import ContestCreate from '../Pages/Contest/ContestCreate';
import ContestEdit from '../Pages/Contest/ContestEdit';
import PortfolioCreate from '../Pages/Portfolio/PortfolioCreate';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Main */}
        <Route path="/" exact component={Main} />
        {/* User */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/useredit" component={UserEdit} />
        {/* portfolio */}
        <Route path="/portfoliodetail" exact component={PortfolioDetail} />
        <Route path="/portfoliolist" component={PortfolioList} />
        <Route path="/portfoliocreate" component={PortfolioCreate} />
        <Route path="/apitest" component={ApiTest} />
        {/* Contest */}
        <Route path="/contests" exact component={ContestMain} />
        <Route path="/contestdetail/:id" component={ContestDetail} />
        <Route path="/contests/create" component={ContestCreate} />
        <Route path="/contests/edit" component={ContestEdit} />
      </Switch>
    </Router>
  );
};

export default Routes;
