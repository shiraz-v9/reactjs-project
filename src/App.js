import "./App.css";
import useWindowDimensions from "./components/windowDimensions";
import Navbar from "./components/navbar";
import GetData from "./components/getData";
import GetRequest from "./components/getRequest";
import SignUp from "./components/signUp";

function App() {
  const { height, width } = useWindowDimensions("");

  // const AutoCSS = () => {
  //   useEffect(() => {
  //     document.getElementById("content").style.height = { height };
  //     document.getElementById("sideBar").style.height = { height };
  //   });

  //   return null;
  // };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="sideBar">
        <GetData id="list" />
      </div>

      <div id="section">
        <div>
          Editorial width: {width} ~ height: {height}
          <SignUp></SignUp>
          <GetRequest></GetRequest>
        </div>

        {/* <AutoCSS /> */}
      </div>
    </div>
  );
}

export default App;
