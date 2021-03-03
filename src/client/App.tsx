import * as React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./scss/app";

import Details from "./Details";
import Films from "./Films";

const App: React.SFC<IAppProps> = (props) => {

	const [films, setFilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            let res = await fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.filmid);
            let films = await res.json();
            setFilms(films);
        }
        getFilms();
	}, []);
  
  return (
  <BrowserRouter>
    <main className="container">
      <Switch>
        <Route exact path="/" component={Films} />
        <Route exact path="/:id details" component={Details}/>
      </Switch>
    </main>
  </BrowserRouter>
);
 };

export default App;

interface IAppProps { 
 
}
