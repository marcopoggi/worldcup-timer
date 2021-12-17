import { timer } from "./handlers/view.js";
import { initLang,langButton } from "./handlers/lang.js";
import { getData } from "./services/request.js";


export const init = () => {
    let path = window.location.pathname;
    let storage = window.localStorage;
    let settings = getData(`${path}/assets/resources/json/settings.json`)
    settings.then( res => {
        const end = new Date(res["end-date"]).getTime() + (new Date().getTimezoneOffset() * 60000);
        let today = new Date().getTime();
        
        (end > today) ? timer(true,end) : timer(false);
    })
    initLang(storage);
    langButton(storage);
}