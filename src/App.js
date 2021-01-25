import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'

function App () {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact component={Users}/>
          <Route path="/places/new" exact component={NewPlace}/>
          <Route path="/:userId/places" exact component={UserPlaces}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
