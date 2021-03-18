import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Home from "./components/home";
import loginPage from "./components/loginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={loginPage}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
