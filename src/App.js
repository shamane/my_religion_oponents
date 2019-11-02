import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './navigation/Home';
import About from './navigation/About';
import Contact from './navigation/Contact';

import Indyjism from './components/Indyjism'
import Iydajism from './components/Iydajism'
import Daocusm from './components/Daocusm'
import Konfycianstvo from './components/Konfycianstvo'
import Byddusm from './components/Byddusm'
import Islam from './components/Islam'
import Sintojism from './components/Sintojism'
import Protestantu from './components/Protestantu'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <div>
        <h2>Інаковіри - не християни і в тч всякі </h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> / </Link></li>
            <li><Link to={'/indyjism'} className="nav-link">Індуїзм</Link></li>
            <li><Link to={'/iydajism'} className="nav-link">Іудаїзм</Link></li>
            <li><Link to={'/daocusm'} className="nav-link">Даосизм</Link></li>
            <li><Link to={'/konfycianstvo'} className="nav-link">Конфуціанство</Link></li>
            <li><Link to={'/byddusm'} className="nav-link">Буддизм</Link></li>
            <li><Link to={'/sintojism'} className="nav-link">Сінтоїзм</Link></li>
            <li><Link to={'/islam'} className="nav-link">Іслам</Link></li>
            <li><Link to={'/protestantu'} className="nav-link">Протестанти</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/indyjism' component={Indyjism} />
          <Route path='/iydajism' component={Iydajism} />
          <Route path='/daocusm' component={Daocusm} />
          <Route path='/konfycianstvo' component={Konfycianstvo} />
          <Route path='/byddusm' component={Byddusm} />
          <Route path='/islam' component={Islam} />
          <Route path='/sintojism' component={Sintojism} />
          <Route path='/protestantu' component={Protestantu} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

