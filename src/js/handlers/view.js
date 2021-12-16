import { getTime } from "./time.js"

const elems = {
    day: document.getElementById('day-text'),
    hour: document.getElementById('hour-text'),
    min: document.getElementById('min-text'),
    sec: document.getElementById('sec-text'),
}

export const timer = (state,endDate = '00-00-00') => {
    console.log(state);
    if(state === true){
        let id = setInterval(()=>{
            console.log('dentro')
            updateView(elems,id,endDate);
        },1000)
    }
    else setView({},elems,true);
}

const setView = (data,elements,finish = false) =>{
    if(finish){
        let mainContent = document.getElementById("clock-container"),
        finish = document.getElementById("finish-timer");
        mainContent.style.display = 'none';
        finish.style.display = 'block'
        return
    }
    elements.day.textContent = data.d;
    elements.hour.textContent = data.h;
    elements.min.textContent = data.m;
    elements.sec.textContent = data.s;
}

const updateView = (elements, intervalID = false,endDate) => {
    let data = getTime(endDate);
    if(data.d =='00' && data.h =='00' && data.m =='00' && data.s =='00'){ //finish
        setView(data,elements,true);
        clearInterval(intervalID);
    }
    setView(data,elements);
}

