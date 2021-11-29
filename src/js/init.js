import { timer,elems } from "./handlers/view.js";
import { initLang,langButton } from "./handlers/lang.js";


export const init = () => {
    let storage = window.localStorage;
    timer(elems);
    initLang(storage);
    langButton(storage);
}