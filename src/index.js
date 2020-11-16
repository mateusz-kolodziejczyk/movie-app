import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieReviewPage from "./pages/movieReviewPage";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'   
import UpcomingMoviesPage from './pages/upcomingMoviesPage'   
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
        <Switch>
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));