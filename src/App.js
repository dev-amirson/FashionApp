import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, CheckOut } from 'containers'

export const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route path={'/cart'}>
          <CheckOut />
        </Route>
      </Switch>
    </div>
  </Router>
)
