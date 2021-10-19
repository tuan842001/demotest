import Home from './pages/home/Home';
import Intour from './pages/intour/Intour';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TopBar from './components/topbar/TopBar';
import Bottombar from "./components/bottombar/Bottombar";
import "./app.css"

function App() {
  return (
    <>
      <TopBar/>
      <Register/>
    </>
  );
}

export default App;
