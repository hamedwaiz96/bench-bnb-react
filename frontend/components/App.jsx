import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';
import BenchShowContainer from './bench_show_container';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
        <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
        <Route exact path="/benches/:benchId" component={BenchShowContainer}/>
    </div>
);

export default App;