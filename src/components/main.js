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
      <Route exact path="/Mood.github.io/" component={LandingPage}/>
      <Route path="/Mood.github.io/project" component={Project} />
      <Route path="/Mood.github.io/user1" component={User1} />
      <Route path="/Mood.github.io/profile" component={Profile} />
      <Route path="/Mood.github.io/survey" component={Survey} />
    </Switch>
  </>
)

export default Main;
