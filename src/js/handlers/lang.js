import { getData } from "../services/request.js";


const langElems = {
    "duration-time": document.getElementById("duration-time"),
    "title-data": Array.from(document.getElementsByClassName("title-data")),
    "footer-description": document.getElementById("footer-description"),
    "finish-timer":document.getElementById("finish-timer")
}

//update view with json data
const updateLang = (lang,elems,data) =>{
    let i = 0
    elems["duration-time"].textContent = data[lang]["duration-time"];
    elems["title-data"].forEach(title => {
        title.textContent = data[lang]["title-data"][i];
        i++;
    });
    elems["footer-description"].textContent = data[lang]["footer-data"];
    elems["finish-timer"].textContent=data[lang]["finish-data"];
}

export const initLang = async storage => {
    let path = window.location.pathname;
    try {
        let lang = storage.getItem("lang");
        let data = await getData(`${path}/assets/resources/json/lang.json`);
        updateLang(lang,langElems,data);
    } catch (error) {
        if(error instanceof TypeError){
            storage.setItem("lang","en");
            initLang(storage);
        }
    }
}

export const langButton = (storage) => {
    document.getElementById("lang-btn").addEventListener("click",()=>{
        (storage.getItem("lang") == "en") ? storage.setItem("lang","es") : storage.setItem("lang","en");
        initLang(storage);
    })
}