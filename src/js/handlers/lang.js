import { getData } from "../ajax/request.js";

//init lang
const url = "../../../src/assets/resources/json/lang.json";

const langElems = {
    "duration-time": document.getElementById("duration-time"),
    "title-data": Array.from(document.getElementsByClassName("title-data")),
    "footer-description": document.getElementById("footer-description")
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
}

export const initLang = async storage => {
    try {
        let lang = storage.getItem("lang");
        let data = await getData(url);
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