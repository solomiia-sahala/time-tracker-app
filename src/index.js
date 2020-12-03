import React from 'react';
import reactDOM from 'react-dom';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import LogInPage from './components/LogInPage';
import SignInPage from './components/SignInPage'
import Home from './components/Home';
import Firebase, { FirebaseContext } from './components/Firebase';



const App = () => {
    return (
        <div className="root">
            <FirebaseContext.Provider value={new Firebase()}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/logIn" component={LogInPage} />
                        <Route path="/signIn" component={SignInPage} />
                    </Switch>
                </BrowserRouter>
            </FirebaseContext.Provider>
        </div>
    )
}


reactDOM.render(<App />, document.getElementById('root'))