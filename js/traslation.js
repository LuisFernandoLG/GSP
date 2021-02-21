
const title = document.querySelector(".welcome-text__title");
const subtitle = document.querySelector(".welcome-text__quote");
const donateBtn = document.querySelector(".donate-btn");

// Nav
const aboutUsLink = document.querySelector(".nav__about-us")
const howToApplyLink = document.querySelector(".nav__how-to-apply")
const ourProgramsLink = document.querySelector(".nav__our-programs")
const contactUsLink = document.querySelector(".nav__contact-us")

const aboutUsTitle = document.querySelector(".about-us .title");
const aboutUsSubtitle = document.querySelector(".about-us .information .information__title");
const contactUsSubtitle = document.querySelector(".contact-us .subtitle");



const howToApplyTitle = document.querySelector(".how-to-apply .title")
const ourPrograms = document.querySelector(".our-programs .title")
const contactUs = document.querySelector(".contact-us .title")

const programMBP = document.querySelector(".programMBP");
const programGHP = document.querySelector(".programGHP");



// Mission
const missionP = document.querySelector(".about-us .information .information__quote");



let lenguage = "EN";

const changeToES = ()=>{
    title.textContent = "¡Se parte de la familia GSP!";
    subtitle.textContent = "Impacta la vida de un joven para siempre proveyendole acceso a educación universitaria, libros, seminarios habilidades de vida, clases de Inglés y ayuda personalizada."
    donateBtn.textContent = "Donar"

    aboutUsTitle.textContent = "¿Quiénes somos?"
    aboutUsTitle.firstChild.textContent = "Misión"
    

    lenguage = "ES";

    // Nav
    aboutUsLink.textContent = "¿Quiénes somos?";
    howToApplyLink.textContent = "Cómo aplicar";
    ourProgramsLink.textContent = "Nuestros programas";
    contactUsLink.textContent = "Contáctanos";

    aboutUsSubtitle.textContent = "Misión"

    missionP.textContent = " Green Scholarship Programs es una organización sin fines de lucro que tiene como misión yudar a los jóvenes mediante la educación y de este modo construir un mejor futuro para ellos, sus familias, la comunidad y México, todo esto con la visión de eliminar la pobreza mediante la capacitación laboral, capacitación vocacional y acceso a la educación.";

    howToApplyTitle.textContent = "¿Cómo aplicar?";
    ourPrograms.textContent = "Nuestros programas";
    contactUs.textContent = "Contáctanos"

    contactUsSubtitle.textContent = "Puede contáctarnos a través de"

    programMBP.children[2].textContent = "El programa de biología marina ayuda a conservar y proteger ... y la vida salvahe alrededor del mundo creando lideres a través de la educación"

    programGHP.children[2].textContent = "El Programa de Hospitalidad Green es un curso de entrenamiento de 6 semanas, donde...."

    localStorage.setItem("lenguage", "ES")

    
}

const changeToEN = ()=>{
    title.textContent = "Be part of GSP family!";
    subtitle.textContent = "Impact a young student's life forever providing him/her with access to University education, books, Life Skills seminars, English classes and individualized support."
    donateBtn.textContent = "Donate"
    aboutUsTitle.textContent = "About us"
    
    lenguage = "EN";
    
    
    aboutUsLink.textContent = "About us";
    howToApplyLink.textContent = "How to apply";
    ourProgramsLink.textContent = "Our programs";
    contactUsLink.textContent = "Contact us";

    
    aboutUsSubtitle.textContent = "Mission"
    
    missionP.textContent = "The Green Scholarship Program (GSP) is a not-for-profit organization that helps young people by educations in order to build a well life to them, their families, their comunity and Mexico . . ."
    
    howToApplyTitle.textContent = "How to apply";
    ourPrograms.textContent = "Our programs";
    contactUs.textContent = "Contact us"

    contactUsSubtitle.textContent = "You can contact us by"

    programMBP.children[2].textContent = "This Marine Biology Scholarship Program helps conserve and protect endangered fish and wildlife around the world by creating leaders through education."

    programGHP.children[2].textContent = "The GHP is a 12-week training course (6-weeks classroom & 6-weeks hands-on). The training incorporates a comprehensive approach to professional . . ."

    
    localStorage.setItem("lenguage", "EN")
    
    
}

export {
    changeToEN, changeToES, lenguage
}