import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';


import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';


function App() {
    return (
        <div className="App">
            <p>Currency converter</p>
            <Router>
                <ul class="currency__list">
                    <li class="currency__list--item"><Link to="/">Home</Link></li>
                    <li class="currency__list--item"><Link to="/about">About</Link></li>
                    <li class="currency__list--item"><Link to="/contact">Contact</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact>
                        <Calculator />
                    </Route>
                    <Router path="/about">
                        <About />
                    </Router>
                    <Router path="/contact">
                        <Contact />
                    </Router>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
