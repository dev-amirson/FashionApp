import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ContactUs } from 'components'
import { Home, CheckOut } from 'containers'
import store from 'store'

export const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/cart'} component={CheckOut} />
          <Route path={'/contactus'} component={ContactUs} />
        </Switch>
      </div>
    </Provider>
  </Router>
)
