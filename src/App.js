import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UploadFile from "./components/UploadFile";
import DisplayFile from "./components/DisplayFile";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <>
    <Header />
    <div className="background-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/" component={UploadFile} />
          <ProtectedRoute exact path="/display" component={DisplayFile} />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);

export default App;
