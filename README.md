# Weather App - Accuweather
Responsive Front Reactjs App that presents live weather forecast to the user by his searching. 
The App was build in React and using third libraries such as React-Bootstrap, Material-UI, react-router-dom, etc. 
Using AccuWeather API to receive live data of weather from all over the world. 

# State manegment 
Using react-redux to manage the state with using tools (hooks) such as useDisptach and useSelector to call actions 
and use the ability to get the current state from any component. 
The state split into three parts: 
1. App state - manage the theme color, the current location, and degree type.
2. Favorites locations of the user - using local storage to save the locations and manage the changes.
3. Error state.

# Pages
The head page presents the current location forecast and allowed the user to find the live weather of any city in the world.
The page build from three main components:
1. Autocomplete - for the user searching.
2. LocalLocation - the current location (by the user search) - the default is Tel-Aviv, Israel.
3. Forecast - List of the 5 days of forecast.

![](/image/head.png)


