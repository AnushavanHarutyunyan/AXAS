import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import { Login, Home, RightSide } from "./view/index";
const access_token = localStorage.getItem("access_token")

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Theme preset={presetGpnDefault}>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/estimate/:id" component={RightSide} />
            <Route path="/estimate" component={RightSide} />
            <Route exact path="/" component={Login} />
            {/* <Navigate to="/" /> */}
          </Switch>
          {access_token ? <Redirect to="/home" /> : <Redirect to="/" />}

        </Router>
      </Theme>
    </div>
  );
}

export default App;
