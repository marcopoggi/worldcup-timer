# WorldCup-Timer
**Is a simple native javascript application, with the aim of providing the user with a timer that shows the time remaining until the next world cup.**  
## Basic functionality
_Its operation is based on obtaining the user's local time **(not UTC time)** and comparing it with the start date of the World Cup._  

>**The files in charge of this functionality are**:  
  * time.js  :
    * This file exports the [`getTime()`](https://github.com/MarcoPoggi/WorldCup-Timer/blob/main/src/handlers/time.js#L9) function, which returns in a javascript object,  
      with **_day, hour, min, sec_** remaining compared to the [**end date**](https://github.com/MarcoPoggi/WorldCup-Timer/blob/main/src/handlers/time.js#L2).
  * view.js  :  
    * The display file exports a constants with the four elements of the DOM.   
      These will be rendered constantly and also a [`timer(elems)`](https://github.com/MarcoPoggi/WorldCup-Timer/blob/main/src/handlers/view.js#L10) function, which receives these elements and updates them every **1 sec**.

  
