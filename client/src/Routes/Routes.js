import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Login from '../Pages/User/Login';
import Signup from '../Pages/User/Signup';
import UserEdit from '../Pages/User/UserEdit';
import PortfolioDetail from '../Pages/Portfolio/PortfolioDetail';
import PortfolioList from '../Pages/Portfolio/PortfolioList';

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
      </Switch>
    </Router>
  );
};

export default Routes;
