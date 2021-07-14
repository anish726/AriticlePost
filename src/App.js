

import './App.css';
import ArticalAll from './components/section/ArticalAll';
import Navbar from './components/navbar/Navbar'
import{BrowserRouter as Router,  Switch,Route} from 'react-router-dom'
import ArticalForm from './components/ArticalForm./ArticalForm';
import UserProfile from './components/UserProfile/UserProfile';
import Home from './components/section/Home';
import UserDeatils from './components/UserProfile/UserDetails/UserDeatils';
import UserForm from './components/UserProfile/UserForm/UserForm'
import EditForm from './components/UserProfile/EditForm';
import UserPostArticle from './components/UserProfile/UserPostArticle/UserPostArticle';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
    <Switch>
    <Route path="/Home"   component={Home} exact/>
    <Route path="/form"   component={ArticalForm} exact/>
    <Route path="/Profile"   component={UserProfile} exact/>
    <Route path="/Profile"   component={UserDeatils} exact/>
    <Route path="/editForm/:id" component={EditForm} exact/>
    <Route path="/User"   component={UserForm} exact/>
   

   
    <Route path="/" component={ArticalAll}/>
    </Switch>
    </Router>
    </>
  )
}

export default App;
