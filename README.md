# Assignment 1 - ReactJS app.

Name: Mateusz Kolodziejczyk

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Watchlist Page - Adding movies to watchlist on the upcoming page adds them to this page.
 + Movie page Cast List - The movie has a list of its cast members on its page, allowing users to see who acted in the movie.
 + Full Cast List - The movie cast list is shorter, as casts can be extremely large. The full cast list is in a separate page.
 + etc
 + etc

## Setup requirements (If required).

Create your own .env file with your own TMDB API key in the root folder.. 

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated - get a list of the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/credits - get a list of credits(cast members) for a specific movie
+ https://api.themoviedb.org/3/person/${id} - get details on a specific person
+ 

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movie/:id/cast (public) - displays an abridged version of the cast list on a movie page
+ /reviews/:id/full-cast (public) - displays the full cast of a movie on a separate page
+ /movies/top-rated(public) - displays a list of the top rated movies on tmdb
+ /person/:id(public) - displays information about a particular person
+ /movies/watchlist(public) - displays a list of all the movies added to the watchlist

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
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png