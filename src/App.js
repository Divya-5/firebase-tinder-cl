import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SwipeButtons from './components/SwipeButtons';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
          <Chat/>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
