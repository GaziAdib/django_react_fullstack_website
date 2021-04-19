import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowStudents from './components/ShowStudents';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import UpdateStudent from './components/UpdateStudent';
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <div className="App">
      <h1>Django React App</h1>
      
        <div>
          <Router>
          <NavbarMenu />
            <Switch>
              <Route exact path="/" component={ShowStudents} />
              <Route exact path="/addStudent" component={AddStudent} />
              <Route exact path="/:id/update" component={UpdateStudent} />
              <Route exact path="/:id/" component={StudentDetail} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
