import "./App.css";
import Otish from "./Components/Otish";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route } from "react-router-dom";
import Alert from "./Components/utils/Alert";
import "./Components/utils/alert.css";
import DefaultLogin from "./Components/DefaultLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Route component={DefaultLogin} path="/" exact />
      <Route component={Register} path="/register" exact />
      <Route component={Otish} path="/chat" exact />
      <Route component={Login} path="/Login" exact />
    </div>
  );
}

export default App;
