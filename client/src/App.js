import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main className="App-main">

      </main>
    </div>

      <Switch>
        <Route exact path="/home">
          {/* <Home/> */}
        </Route>
        <Route  path="/info">
          {/* <Info/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
