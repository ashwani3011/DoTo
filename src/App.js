import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";

// component and page

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to="/login" />}
            {user && <Dashboard />}
          </Route>
          <Route path="/create">
            {!user && <Redirect to="/login" />}
            {user && <Create />}
          </Route>
          <Route path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>
          <Route path="/signup">
            {user && <Redirect to="/" />}
            {!user && <Signup />}
          </Route>
          <Route path="/project/:id">
            {!user && <Redirect to="/login" />}
            {user && <Project />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
