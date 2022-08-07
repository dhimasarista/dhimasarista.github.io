const home = document.querySelector(".home");
const homeLink = document.querySelector("#home_link");

const about = document.querySelector(".about");
const aboutLink = document.querySelector("#about_link");

const contact = document.querySelector(".contact");
const contactLink = document.querySelector("#contact_link");

const active = document.querySelector(".active");


homeLink.addEventListener("click", () =>{
    home.classList.remove("none");
    about.classList.add("none");
    contact.classList.add("none");
})

aboutLink.addEventListener("click", () => {
    home.classList.add("none");
    about.classList.remove("none");
    contact.classList.add("none");
})

contactLink.addEventListener("click", () => {
    home.classList.add("none");
    about.classList.add("none");
    contact.classList.remove("none");
})



const myAge = () => {
    var myAge = new Date("01/05/2002");
    var month_diff = Date.now() - myAge.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    let theAge = document.querySelector("#age");
    theAge.innerHTML = age;
}
myAge();

const buttonSubmit = document.querySelector(".btn-submit");
buttonSubmit.addEventListener("click", () => {
    alert("Sorry We Don't Have This Feature!");
})