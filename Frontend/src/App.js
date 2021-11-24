import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Perfile from './components/Navbar/Perfile'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/miperfil" component={Perfile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
