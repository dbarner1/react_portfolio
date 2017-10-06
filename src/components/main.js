import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Cta from './cta.js'
import Portfolio from './portfolio.js'
import Contact from './contact.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Cta}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;
