import "./App.css";
import Otish from "./Components/Otish";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route component={Register} path="/" exact />
      <Route component={Otish} path="/Otish" exact />
      <Route component={Login} path="/Login" exact />
    </div>
  );
}

export default App;
