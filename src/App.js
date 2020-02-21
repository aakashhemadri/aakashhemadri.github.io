import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

function Loading() {
  return <div className="animated fadeIn pt-3 text-center">Loading...</div>;
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
