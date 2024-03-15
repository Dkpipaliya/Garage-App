import './App.css';
import Header from './Header';
import Home from './Home';
import Singup from './user/SingUp';
import Login from './user/Login';
import Services from './Admin/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminLogin from './Admin/AdminLogin';
import AdminSingUP from './Admin/AdminSingUp';
import UServices from './user/UServices';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/Singup'>
              <Singup />
          </Route>
          <Route path='/Login'>
              <Login />
          </Route>
          <Route path='/Services'>
              <Services />
          </Route>
          <Route path='/AdminLogin'>
              <AdminLogin />
          </Route>
          <Route path='/AdminSingUP'>
              <AdminSingUP />
          </Route>
          <Route path='/UServices'>
              <UServices />
          </Route>
        </Switch>
      </Router> 
     
      
    </>
  );
}

export default App;
