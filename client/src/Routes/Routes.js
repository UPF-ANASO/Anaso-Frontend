import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyIntro from '../Components/PorfoliDetail/MyIntro';
import Main from '../Pages/Main/Main';
import Login from '../Pages/User/Login';
import Signup from '../Pages/User/Signup';
import UserEdit from '../Pages/User/UserEdit';

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

        <Route path="/m" exact component={MyIntro} />
      </Switch>
    </Router>
  );
};

export default Routes;
