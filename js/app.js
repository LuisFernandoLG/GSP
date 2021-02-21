import {changeToEN, changeToES, lenguage } from "./traslation.js"

const changeLenguageBtn = document.querySelector(".lenguage-btn");
const themeBtn = document.querySelector(".theme-btn");

changeLenguageBtn.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    if ( localStorage.getItem("lenguage") === "EN" ) changeToES();
    else changeToEN();
})


addEventListener("DOMContentLoaded", ()=>{
    console.log("Loaded")
    if ( localStorage.getItem("lenguage")) localStorage.setItem("lenguage", "EN")
});

localStorage.setItem("Prueba", true)
