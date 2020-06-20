# SleepOver InAntwerp

 The concept behind SleepOver Hotels is to help tourists or just about anyone planning to visit Belgium to find accomodation easily. 
 We underatnd that sometimes one might find themselves having to make last minute decisions regarding holidays or sta overs not initially planned. 
 We could be visiting a The Netherlands, France or German and make a last minute decision to pop in to Belgium for a day or two. 

 SleepOver is a small chain of three hotels and two deluxe guest houses for rents. 
 They've got got brances in 5 major cities in Belgium. The hotels are located very close to city center. Tourists are able to find facitilties easily,
 ranging from musuem, shops, public transportations etc.
 
 
 ## UX

This project is for anyone looking for hotel to rent.

- As a user I want to look for a hotel to rent.
- As a user, I can benefit from the hotel pagination search to see different within the area.

- As a user I want to be able to discover new and interesting places.
  - As a user I want to be recommended hotels based on a particular destination
  - As a user I want to be recommended several hotels within a specific area
  
- As a user I want use to a website that gives me the opportunity to see a short description of each hotel
  - As a user  i want to be recommended well known hotels registered on the Google Maps 
  - As a user I want to able to explore a several hotels so I can make a selection

- As a user I want to be able to create an experience by interacting with the page
  - As a user I want to be able to click on the marker and be taken to the hotel link.
  
- Link to Mockups 
  - assets/wireframe/Milestone\ 2\ Mockup.pdf   

- website
  - https://dop-dd.github.io/Interactive-Frontend-Development.-Milestone-Project-2/


## Demo 

- Screen shot
  - ![Image of website](/assets/img/screenshot.png) 


## Features

The website is made up of a single page. 
- Navigation:
  - The website is easy to navigate through. The navigation is fixed to the top and is consistent on desktop and mobile.
- Visuals: 
  - The map is clear and properly set at the top of the page. It occupies 80% of the view height.
- Marker: 
   - The markes on the page gives visitors the address of the location
- Covid Update:
  - Users can click on the button to get live update of the Corona pandemic in Belgium
- Responsiveness:
  - The website is developed with the notion of mobile-first and is thus, fully reponsible.
- The website is intuitive and the content is relevant 


### Existing Features

- Geolocation is centered for the city of Gent- A user can click on each marker to get more results about the specific location.
- Detailed Markers.- Contains useful information about the hotel                      -
- Covid-19 API- A user can get live update about the Corona virus while in Belgium.
- Logo- User can click on this logo to refresh the API updates or the entire page 

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
   1. Open the page, map is centered at the coordinates of Gent.
   2. The clicks on the markers reveal specicific information about the hotel or guest house.
   3. Pegman- Drop the pegman at a specific location for street viem.  

3. Covid API:
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
  - https://developers.google.com/maps/documentation/javascript/markers
     
- The link for the Covid-19 API update is taken from:
  - https://www.programmableweb.com/coronavirus-covid-19
  
  
### Media
  
- The images on the side panel are taken directly from google maps
  - https://developers.google.com/maps/gmp-get-started
  - https://www.pexels.com/


### Acknowledgements
- I got my inspiration for this project from Holiday Inn
