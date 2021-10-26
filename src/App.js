import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, CheckOut } from 'containers'

export const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/cart'} component={CheckOut} />
      </Switch>
    </div>
  </Router>
)
