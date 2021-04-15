import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from './componentns/LoginComponent';
import DashboardComponent from './componentns/DashboardComponent';
import RegisterComponent from './componentns/RegisterComponent';
import AuthComponent from './componentns/AuthComponent';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Todo <span>APp</span></h1>
        <Route exact component={LoginComponent} path='/' />
        <Route component={AuthComponent(DashboardComponent)} path='/dashboard' />
        <Route exact component={RegisterComponent} path='/register' />
      </div>
    </BrowserRouter>
  );
}

export default App;
