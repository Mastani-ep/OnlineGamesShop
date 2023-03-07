import './App.css';
import {Component} from "react";
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Hello from './Hello';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from "./ProductsList";
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/products' exact={true} component={ProductsList}/>
                    <Route path='/register' exact={true} component={Register}/>
                    <Route path='/login' exact={true} component={Login}/>
                    <Route path='/hello' exact={true} component={Hello}/>
                </Switch>
            </Router>
        )
    }
}
export default App;
