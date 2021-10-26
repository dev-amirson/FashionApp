import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home, CheckOut } from 'containers'
import store from 'store'

export const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/cart'} component={CheckOut} />
        </Switch>
      </div>
    </Router>
  </Provider>
)
