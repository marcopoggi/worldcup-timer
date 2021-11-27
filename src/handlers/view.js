import { timeFunctions } from "./time.js"

export function view(){
    let elems = {
        day: document.getElementById('day-text'),
        hour: document.getElementById('hour-text'),
        min: document.getElementById('min-text'),
        sec: document.getElementById('sec-text'),
    }
    const setView = (data,elements) =>{
        elements.day.textContent = data.d;
        elements.hour.textContent = data.h;
        elements.min.textContent = data.m;
        elements.sec.textContent = data.s;
    }
    const setTime = elements => {
        let data = timeFunctions.getTimeData();
        setView(data,elements)
        setInterval(()=>{
            data = timeFunctions.getTimeData();
            setView(data,elements)
        },1000)
    }
    setTime(elems)
}