import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Cta from './cta.js'
import Portfolio from './portfolio.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Cta}/>
      <Route path='/portfolio' component={Portfolio}/>
    </Switch>
    <img id="daveCartoon" alt="A cartoon of Dave" src={require("../images/man-me.svg")} />
  </main>
)

export default Main;
