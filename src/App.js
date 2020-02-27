import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.GA);
ReactGA.pageview(window.location.pathname + window.location.search);

function Loading() {
  return <div>[ Loading... ]</div>;
}
const Index = React.lazy(() => import("./views/Index/Index"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" name="Index" render={props => <Index {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
