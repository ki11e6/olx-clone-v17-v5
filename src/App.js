// import firebase from './Firebase/config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { AuthContext } from './store/FirebaseContext';

function App() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
