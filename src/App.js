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
import Favorites from './pages/Favorites';
import { LanguageContext } from "./context/language";
import { useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const [lang, setLang] = useState("EN");
  const language = useSelector((state) => state.language.lang);
  console.log(language)
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
    <div
      className={language === "EN" ? "text-left" : "text-right"}
      dir={language === "EN" ? "ltr" : "rtl"}
    >
     <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path={"/"} exact component={Movies}/>
          <Route path={"/register"} exact component={Register} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"*"} component={NotFound} /> 
        </Switch>
</BrowserRouter>
</div>
</LanguageContext.Provider>
  );
}

export default App;
