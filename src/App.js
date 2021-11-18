import React from "react";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AirData from "./pages/AirData";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/airData" component={AirData} />
      </Switch>
    </div>
  );
}

export default App;
