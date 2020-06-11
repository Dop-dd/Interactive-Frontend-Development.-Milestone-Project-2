# SleepOver InAntwerp

 The concept behind SleepOver InAntwerp is to help tourists or jst about anyone planning to visit Antwerp find accomodation easily. 
 We underatnd that sometimes one might find themselves not initially planned. We could be visiting a nearby city and decide to pop 
 in to Antwerp or we could also just be driving through the the city and decide to make a stop.
 There're variuous reasons why one might need hotel without any prior reservation.
 

 ## UX

This project is for anyone looking for hotel to rent.

- As a user I want to look for a hotel to rent.
- By becoming a member, I can benefit from the monthly sessions organised by Saladlane to try oout different salad dishes and        flavours.

- As a user I want to be able to discover new and interesting places.
  - As a user I want to be recommended hotels based on my chosen destination
  - As a user I want to be recommended hotels no more than 20 hotels within a specific area
  
- As a user I want use to a website that gives me the opportunity to see a short description of each hotel
  - As a user  i want to be recommended well known hotels registered on the Google Maps 
  - As a user I want to able to explore a several hotels so I can make a selection

- As a user I want to be able to create a Geolocation experience by actually clcking on a hotel link
  - As a user I want to be recommended hotels options based on my current location using latitude and longitude
  - As a user I want to be able to decline the Geolocation service and be shown hotels in a diferent location


## Features

The website is made up of a single page. 
- Navigation:
  - The website is easy to navigate through. The navigation is fixed to the top and is consistent on desktop and mobile.
- Visuals: 
  - The map is clear and properly set at the top of the page. It occupies 80% of the view height.
- Panel: 
   - A panel on the left of the page that gives visitors a bit more information about a clicked marker on the map 
- Covid Update:
  - Users can click on the button to get live update of the Corona pandemic in Belgium
- Google map:
  - The map serves a location finder. Users can search for hotels in Awnterp or use Geolocation to find nearby hotels 
- Responsiveness:
  - The website is developed with the notion of mobile-first and is thus, fully reponsible.
- The website is intuitive and the content is relevant 


### Existing Features

- Geolocation accept notification- A user can accept notifiation and then request for search results based on their current location
- Geolocation decline notification- A user can decline Geolocationrequest and be taken to the exact coordinates where the map is centered                        -
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
  - Bootstrap is to make this website responsive and mobile-first websites. Theframework includes HTML and CSS based design templates to help design websites faster and easier. It The Header, Body and Footer are all in Bootstrap containers which creates a very responsive effect on the entire website
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
   1. Open the page, Accept the notication from google and be shown hotels within you location. 
   2. The exact user location is also indicated on the map as 'location found'.
   3. Decline notificatio- The maps displays hotels in the centered location in Antwerp.

3. Markers: 
   1. Click on a marker on the map. This content apperas on a panel fixed to the left of the page
   2. Click on a link on the left pane and be taken to the hotel website.

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
