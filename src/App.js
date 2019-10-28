import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useUser} from './context/user-context';

import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Search from './Pages/Search.js';
import MyTools from './Pages/MyTools.js';
import MyGroups from './Pages/MyGroups.js';
import Settings from './Pages/Settings.js';

function App() {
  const user = useUser();
  return (
	<Router>
	        <div>
	  	  <h1>Tools Sharing App</h1>
	          <nav>
	            <ul className="nav-links">
	              <li>
	                <Link to="/">Home</Link>
	              </li>
	  	      <li>
	  		<Link to="/about">About</Link>
	  	      </li>
		      <li>
	                <Link to="/search">Search</Link>
	              </li>
	  	      <li>
	                <Link to="/my-tools">My Tools</Link>
	              </li>
		      <li>
	                <Link to="/my-groups">My Groups</Link>
	              </li>
	  	      <li>
	  		<Link to="/settings">Settings</Link>
	  	      </li>
	            </ul>
	          </nav>
	          <h2>User Info</h2>
	  	  <p>{JSON.stringify(user)}</p>
	  	  <Switch>
	  	    <Route path="/about">
	  	      <About />
	  	    </Route>
	            <Route path="/search">
	  	      <Search user={user}/>
	  	    </Route>
	  	    <Route path="/my-tools">
	  	      <MyTools />
	  	    </Route>
	  	    <Route path="/my-groups">
	  	      <MyGroups />
	  	    </Route>
	  	    <Route path="/settings">
	  	      <Settings />
	  	    </Route>
	            <Route path="/">
	              <Home />
	            </Route>
	          </Switch>
	        </div>
      </Router>
  );
}

export default App;
