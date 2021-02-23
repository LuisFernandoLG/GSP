import { changeToEN, changeToES, lenguage } from "./traslation.js";
import { responsive } from "./responsiveElements.js"
import { scrollSpy } from "./modules/scrollSpy.js";
import { barSpy } from "./modules/barSpy.js";
import { lazyLoad } from "./modules/lazyLoad.js";

const changeLenguageBtn = document.querySelector(".lenguage-btn");
const themeBtn = document.querySelector(".theme-btn");


changeLenguageBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (localStorage.getItem("lenguage") === "EN") changeToES();
    else changeToEN();
});

addEventListener("DOMContentLoaded", () => {

    lazyLoad();
    // barSpy();
    scrollSpy();

    responsive(".how-to-apply__video", "(max-width:1024px)", 
    `<a href="https://www.youtube.com/watch?v=d5mWnt3A1zI&feature=emb_logo&ab_channel=GreenScholarshipProgram-ProgramadeBecasGreen">
    <i class="fab fa-youtube"></i></a>`,
     `<iframe src="https://www.youtube.com/embed/d5mWnt3A1zI" class="how-to-apply__video" allowfullscreen></iframe>`)
    
    if (localStorage.getItem("lenguage")) localStorage.setItem("lenguage", "EN");
});

localStorage.setItem("Prueba", true);
