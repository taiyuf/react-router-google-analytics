# react-router-google-analytics

The react router implementation for Google Analytics, server side rendring ready.

## How to use

in your universal.js.

```
import Ga from 'react-router-google-analytics';

.
.
.

export function createClientApp(store, history, trackingCode, env) {
  const ga  = Ga(trackingCode);

  return (
    <Provider store={store}>
      <Router
         history={history}
         onUpdate={() => env === 'production' && ga('send', 'pageview', location.pathname)}
         >
        {routes}
      </Router>
    </Provider>
  );
}

export function createServerApp(store, props) {
  return (
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>
  );
}

```
