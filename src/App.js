import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Profile from './core/Profile'
import Signin from './core/Signin'
import Signup from './core/Signup'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Home}/> {/* Create a private route to redirect user to signin/signup page */}
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/signin" exact component={Signin}/>
                    <Route path="/signup" exact component={Signup}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
