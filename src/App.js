import "./App.css";
import Navbar from "./components/navbar";
import GetData from "./components/getData";
import GetRequest from "./components/getRequest";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="sideBar">
        <GetData id="list" />
      </div>

      <div id="section">
        <div>
          <Login></Login>
          <GetRequest></GetRequest>
        </div>
      </div>
    </div>
  );
}

export default App;
