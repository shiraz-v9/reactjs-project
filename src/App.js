import "./App.css";
import Navbar from "./components/navbar";
import Community from "./components/communityPage";
import Home from "./components/home";
import LoginPage from "./components/loginPage";
import Quiz from "./components/quiz";
import WelcomePage from "./components/welcomePage";
// import CodeMirror from "./components/codeMirror";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={WelcomePage}></Route>
          <Route path="/tags" exact component={Home}></Route>
          <Route path="/account" exact component={LoginPage}></Route>
          <Route path="/community" exact component={Community}></Route>
          <Route path="/quiz" exact component={Quiz}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
