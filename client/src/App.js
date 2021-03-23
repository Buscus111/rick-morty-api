import './App.css'
import Header from './components/Header/Header'
import CardsList from './components/CardsList/CardsList'
import Info from './components/Info/Info'
import CharacterInfo from './components/CharacterInfo/CharacterInfo'
// import { useEffect } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
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
        <Switch>
          <Route exact path="/home">
            <CardsList />
          </Route>
          <Route  path="/info">
            <Info/>
          </Route>
          {/* Здесь реализовать переход на инфо по персонажу  */}
          <Route  path="/params/charName">
            <CharacterInfo/>
          </Route>
        </Switch>
      </main>
    </div>

    </Router>
  );
}

export default App;
