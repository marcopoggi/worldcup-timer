import { getTime } from "./time.js"

export const elems = {
    day: document.getElementById('day-text'),
    hour: document.getElementById('hour-text'),
    min: document.getElementById('min-text'),
    sec: document.getElementById('sec-text'),
}

export const timer = elements => {
    updateView(elements);
    setInterval(()=>{
        updateView(elements);
    },1000)
}

const setView = (data,elements) =>{
    elements.day.textContent = data.d;
    elements.hour.textContent = data.h;
    elements.min.textContent = data.m;
    elements.sec.textContent = data.s;
}

const updateView = (elements) => {
    let data = getTime();
    setView(data,elements)
}

