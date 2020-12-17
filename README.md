# Assignment 1 - ReactJS app.

Name: Mateusz Kolodziejczyk

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Watchlist Page - Adding movies to watchlist on the upcoming page adds them to this page.
 + Movie page Cast List - The movie has a list of its cast members on its page, allowing users to see who acted in the movie.
 + Full Cast List - The movie cast list is shorter, as casts can be extremely large. The full cast list is in a separate page.
 + Discover Search - Added a search feature to the home page to query the API to send back movies fitting the given criteria
 + 

## Setup requirements (If required).

Create your own .env file with your own TMDB API key in the root folder.. 

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated - get a list of the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/credits - get a list of credits(cast members) for a specific movie
+ https://api.themoviedb.org/3/person/${id} - get details on a specific person
+ https://api.themoviedb.org/3/person/${id}/images - get all the images of the person
+ https://api.themoviedb.org/3/person/${id}/movie_credits - gets a list of all the credits a person has, as cast or crew. 

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][personDetail]
> Shows detailed information on a person, mostly actors. Clicking on "Show Other Images" shows all the other profile pictures of the actor. Clicking on "Show Movies the Person Starred in" shows all the movies the person starred or co-starred in.

![][movieDetail]
> Updated movie detail screen, shows detailed information on the movie. Clicking on Show Reviews shows extracts of the reviews on the movie. The new button Show Cast brings up 10 cast member by order of relevance.

![][movieCast]
> Shows the entire cast of the movie by order of relevance. The lead and starring actors are listed at the top. Clicking on Actor profile sends the user to the person detail page.

![][topRated]
> Shows the top rated movies on the entire database, with a minimum amount of user scores. Clicking on the add to favorites button allows the user to add the movie to the favorites view.

![][watchlist]
> Shows all the movies added to the watchlist

![][homePage]
> Updated. The table can be hidden by clickin on the Hide Discover Movies Form button. The various options allow the user to search for movies that fit their criteria. The Submit button will submit the form and send an api request changing the movie list. Reset will reset the form. Reset Movie List will reset the displayed list of movies.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movie/:id/cast (public) - displays an abridged version of the cast list on a movie page
+ /reviews/:id/full-cast (public) - displays the full cast of a movie on a separate page
+ /movies/top-rated(public) - displays a list of the top rated movies on tmdb
+ /person/:id(public) - displays information about a particular person
+ /movies/watchlist(public) - displays a list of all the movies added to the watchlist
+ /search-form?query - displays a search form on the main page.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.



![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[stories]: ./public/storybook.png
[personDetail]: ./public/personDetail.png
[movieCast]: ./public/movieCast.png
[topRated]: ./public/topRated.png
[homePage]: ./public/homePage.png
[actorPRofileLink]: ./public/actorProfileLink.png