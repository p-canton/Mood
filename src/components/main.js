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
      <Route exact path="/Mood/" component={LandingPage}/>
      <Route path="/Mood/project" component={Project} />
      <Route path="/Mood/user1" component={User1} />
      <Route path="/Mood/profile" component={Profile} />
      <Route path="/Mood/survey" component={Survey} />
    </Switch>
  </>
)

export default Main;
