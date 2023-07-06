// import Todo from  './components/Todo';
import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetup'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
  
      {/* <h1>TODO</h1>
      <Todo data = 'react'/>  
      <Todo data = 'nodeJs'/>  
      <Todo data= 'mongodb' />   */}
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>//custom comp tht we create
  );
}

export default App







