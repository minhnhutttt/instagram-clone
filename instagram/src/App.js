import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTE from './constants/routes'
const Login = lazy(() => import ('./pages/login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading....</p>} >
        <Switch>
          <Route path={ROUTE.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
