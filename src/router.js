import React from 'react';
import {
  Router,
  Switch,
  Route,
  routerRedux
} from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter} = routerRedux;
function RouterConfig({
  history,
  app
}) {

  const Camera = dynamic({
    app,
    component: () =>
      import ('./routes/Camera'),
  });

  const IndexPage = dynamic({
    app,
    component: () =>
      import ('./routes/IndexPage'),
  });

  const Users = dynamic({
     app,
    // models: () => [
    //   import('./models/users'),
    // ],
    component: () =>
      import ('./routes/Users'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Camera} />
        <Route exact path="/home" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;