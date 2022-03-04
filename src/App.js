import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Register from './pages/Register';
import Login from './pages/Login';
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import NotFound from "./pages/Notfound";
function App() {
  return (
<BrowserRouter>
<Navbar/>
        <Switch>
          <Route path={"/"} exact component={Movies} />
          <Route path={"/register"} exact component={Register} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
          <Route path={"*"} component={NotFound} /> 
        </Switch>
</BrowserRouter>
  );
}

export default App;
