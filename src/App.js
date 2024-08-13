import React from "react";
import "./App.css";
import { Route  , Switch} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
