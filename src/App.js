import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./helpers/ScrollToTop";
import GoTop from "./helpers/GoTop";
import Loader from "./helpers/Loader";

const Accueil = React.lazy(() => import("./pages/Accueil"));
const Parcours = React.lazy(() => import("./pages/Parcours"));
const Rugby = React.lazy(() => import("./pages/Rugby"));
const Amorino = React.lazy(() => import("./pages/Amorino"));
const Erreur = React.lazy(() => import("./pages/Erreur"));

function App() {
  return (
    <div className="app-container">
      <Router>
        <GoTop />
        <ScrollToTop />
        <Navbar />
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/Parcours" exact component={Parcours} />
            <Route path="/Rugby" exact component={Rugby} />
            <Route path="/Amorino" exact component={Amorino} />
            <Route path="/" component={Erreur} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
