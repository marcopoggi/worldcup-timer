# WorldCup-Timer
**Is a simple native javascript application, with the aim of providing the user with a timer that shows the time remaining until the next world cup.**  
## Basic functionality
_Its operation is based on obtaining the user's local time **(not UTC time)** and comparing it with the start date of the World Cup._  

>**The files in charge of this functionality are**:  
  * [**time.js**](https://github.com/MarcoPoggi/WorldCup-Timer/blob/dev/src/js/handlers/time.js)  :
    * This file exports the `getTime()` function, which returns in a javascript object,  
      with **_day, hour, min, sec_** remaining compared to the **end date**.
  * [**view.js**](https://github.com/MarcoPoggi/WorldCup-Timer/blob/dev/src/js/handlers/view.js)  :  
    * The display file exports a constant with all four elements of the DOM.
         These will be rendered constantly and also a function `timer (bool, date)`, a status (true or false) that determines if the timer should continue and as an optional second parameter an end date that will serve to update the DOM elements every **1 second**.


>**JSON settings**: 
  * **settings.json** ➡ File in which the end date is defined for the timer (and for future configurations)


>**Translate**
  * [**lang.js**](https://github.com/MarcoPoggi/WorldCup-Timer/blob/dev/src/js/handlers/lang.js) : 
    * This file defines how the translation button works and how it stores the user's option for future visits.
     `initLang(LocalStorage)` receives local storage and tries to start the site by looking for the item **"lang"** which contains value **"es"** or **"en"**.
     `updateLang(lang,elems,data)` receives the language obtained, the DOM elements to be translated and the object with the translations. 
     
  * **lang.json** ➡ File where translations are stored. 

>**AJAX** 
  * [**request.js**](https://github.com/MarcoPoggi/WorldCup-Timer/blob/dev/src/js/services/request.js) ➡ In the timer, http requests are used to access the different files, this is done through the `getData (path / url)` function that receives a path and returns the JSON object.
  
