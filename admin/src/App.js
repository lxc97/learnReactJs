import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./share_components/PrivateRoute";
// import HomePage from "./views/pages/HomePage";
import DefaultLayout from "./views/layout/DefaultLayout"
import LoginPage from './views/pages/LoginPage'
function App() {
  return (
    <>
      <Router>
        {/* <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li> */}

        <Switch>
          <Route exact path="/page404">PAGE400=4</Route>
          <Route exact path="/login"><LoginPage /></Route>
          {/* <Route path="/"><DefaultLayout /></Route> */}
          <PrivateRoute>
            <DefaultLayout></DefaultLayout>
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
