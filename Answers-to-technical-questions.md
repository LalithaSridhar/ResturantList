1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I had completed the test in 45 mins.  I will create separate pipe for the filter the list of restaurants.
I will create separate service to handle the http request and response

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
I had used the filter function 
filterRestuarants(searchString: string) {
return this.restuarant.filter(restuarant =>
  restuarant.city.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
}
}


3.	How would you track down a performance issue in production? Have you ever had to do this?
We can use the lazy loading concept and Webpack Bundle analyzer will gives a helpful breakdown about the anatomy of the bundle. 

4.	Please describe yourself using JSON.
JSON represents the structure of data.  Using JSON we can create our models and implement the data in our program.  In my previous experience, on the first day of sprint, the backend developer will share the json structure with me.  I will create the separate model and I will implement the data using this model.

