import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import LandingPage from './landingpage';
import Project from './project';
import User1 from './user1';
import Profile from './profile';
import Survey from './survey';


const Main = () => (
  <>
  <ScrollToTop />
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/project" component={Project} />
      <Route path="/user1" component={User1} />
      <Route path="/profile" component={Profile} />
      <Route path="/survey" component={Survey} />
    </Switch>
  </>
)

export default Main;
