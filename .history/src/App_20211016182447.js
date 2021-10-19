import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Intour from './pages/intour/Intour';
import Outtour from './pages/outtour/Outtour';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';
import TopBar from './components/topbar/TopBar';
import Bottombar from "./components/bottombar/Bottombar";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
    <TopBar />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/intour">
          <Intour />
        </Route>
        <Route path="/outtour">
          <Outtour />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
