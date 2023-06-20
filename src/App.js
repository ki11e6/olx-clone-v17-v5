// import firebase from './Firebase/config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/PostContext';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
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
      </Post>
    </div>
  );
}

export default App;
