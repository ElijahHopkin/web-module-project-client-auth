import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout'

function App() {
  return (
    <Router>
    <div className="App">
      <header>
      <h2>FRIENDS DATABASE</h2>
      <nav>
      <Link to = '/login'>LOGIN</Link>
      <Link to = '/friends'>FRIENDLIST</Link>
      <Link to = '/friends/add'>ADD FRIEND</Link>
      <Link to = '/logout'>LOGOUT</Link>
      </nav>
      </header>
      <Switch>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/' component = {Login} />
        <Route exact path = '/friends' component = {FriendsList}/>
        <Route exact path = '/friends/add' component = {AddFriend}/>
        <Route exact path = '/logout'  component = {Logout}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
