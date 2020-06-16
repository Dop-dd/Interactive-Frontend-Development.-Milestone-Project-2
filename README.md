# SleepOver InAntwerp

 The concept behind SleepOver InAntwerp is to help tourists or just about anyone planning to visit the city of Antwerp to find accomodation easily. 
 We underatnd that sometimes one might find themselves not initially planned. We could be visiting a nearby city and decide to pop 
 in to Antwerp or we could also just be driving through the the city and decide to make a stop.
 There're variuous reasons why one might need hotel without any prior reservation.
 

 ## UX

This project is for anyone looking for hotel to rent.

- As a user I want to look for a hotel to rent.
- As a user, I can benefit from the hotel pagination search to see different within the area.

- As a user I want to be able to discover new and interesting places.
  - As a user I want to be recommended hotels based on my chosen destination
  - As a user I want to be recommended several hotels within a specific area
  
- As a user I want use to a website that gives me the opportunity to see a short description of each hotel
  - As a user  i want to be recommended well known hotels registered on the Google Maps 
  - As a user I want to able to explore a several hotels so I can make a selection

- As a user I want to be able to create a Search experience by performing a manual search of my choice
  - As a user I want to be recommended hotels options based on my current location 
  - As a user I want to be able to search for any location or anything  and be given the exact address and location coordinates


## Features

The website is made up of a single page. 
- Navigation:
  - The website is easy to navigate through. The navigation is fixed to the top and is consistent on desktop and mobile.
- Visuals: 
  - The map is clear and properly set at the top of the page. It occupies 80% of the view height.
- Panel: 
   - A panel on the left of the page that gives visitors the address of the searched discovered locations 
- Covid Update:
  - Users can click on the button to get live update of the Corona pandemic in Belgium
- Google map:
  - The map serves a location finder. Users can search for hotels in Awnterp or use the search box to find other services and automatically get exact address 
- Responsiveness:
  - The website is developed with the notion of mobile-first and is thus, fully reponsible.
- The website is intuitive and the content is relevant 


### Existing Features

- Geolocation is centered for the city of Antwerp- A user can click on the more button and use pagination to to get more search results 
- Search box- A user can perform a manual search by using the search box and be taken to the exact address and coordinates of the searched results                      -
- Covid-19 API- A user can get live update about the Corona virus while in Belgium.
- Referesh button- User can click on this button to refresh the API updates or the entire page 

### Features left to implement

In the future we plan to include booking forms


## Technology used
This projet is built using HTML, CSS and Bootstrap

- HTML 
  - Html is used the defacto language for the web pages
  - Link: https://www.w3schools.com/html/default.asp
  
- CSS
  - CSS is implemented for styling and layout.
  - Link: https://www.w3schools.com/css/default.asp
    
- BootStrap Framework
  - Bootstrap is to make this website responsive and mobile-first websites. The framework includes HTML and CSS based design templates to help design websites faster and easier. It The Header, Body and Footer are all in Bootstrap containers which creates a very responsive effect on the entire website
  - Link: https://getbootstrap.com/

- jQuery
  - jQuery is implemented for toggling the Covid-19 API hero button.
  - Link: https://jquery.com/

- Google Maps
  - Google Maps is implemented for Geolocation.
  - Link: https://developers.google.com/maps/gmp-get-started

- JavaScript
  - JavaScript is implemented used to call and display the map.  
  - Link: https://www.w3schools.com/js/

- JSON  
  - It is used with JavaScript to make requests to the Covid-19 API for live updates
  - Link: https://www.w3schools.com/JS/js_json_html.asp


## Testing

1. Site Navifation:
   1. This is a single page website. The link s work as intended.
   2. clicking on the logo refreshes the home page.

2. Map:
   1. Open the page, a few search results appear automatically.
   2. The clicks on the more button and uses pagiation to get more esults.
   3. Searc box- Enter a search manually  and be use the autoComplete option to select choose a service, building or location.
   4. The exact formatted address along with the coordinates of the location are shown in a table below the map.

3. Markers: 
   1. Mouse on a marker on the map. This name of the hotel or service is shown in a amal dialog box
   2. Click on a POI to reveal detailed information about it.

4. Covid API:
   1. Click on the 'Live geographic Covid update' button
   2. The button toggles a table with updates about covid-19 in the area 
   3. Click on the button to toggle off the display
   4. Click on the 'refresh' button to efresh the API feed  


## Deployment

The code consist of a single page website in HTML, CSS, Bootstrap, JavaScript and jQuery and does not contain any executable file.

## Credits

### Content

- Tips for map on the home page where taken and edited from:
  - https://developers.google.com/maps/gmp-get-started
  - https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
  - https://developers.google.com/maps/documentation/javascript/examples/rectangle-event
  - https://developers.google.com/maps/documentation/javascript/markers
  - https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
  - https://developers.google.com/maps/documentation/javascript/examples/place-details
  - https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
  
  
- The link for the Covid-19 API update is taken from:
  - https://www.programmableweb.com/coronavirus-covid-19
  
  
### Media
  
- The images on the side panel are taken directly from google maps
  - https://developers.google.com/maps/gmp-get-started


### Acknowledgements
- I received inspiration for this project from AirBnB
