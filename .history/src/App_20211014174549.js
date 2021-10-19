import Home from './pages/home/Home';
import Intour from './pages/intour/Intour';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TopBar from './components/topbar/TopBar';
import Bottombar from "./components/bottombar/Bottombar";
import "./app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <TopBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
