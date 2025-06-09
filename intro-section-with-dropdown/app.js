const ham  = document.querySelector(".hamburger");
const header  = document.querySelector(".header");
const featuresBtn  = document.querySelector(".features-btn");
const hiddenFeaturesBtn  = document.querySelector(".hidden-features");
const companyBtn  = document.querySelector(".company-btn");
const hiddenCompanyBtn  = document.querySelector(".hidden-company");



ham.addEventListener("click", function(){
    header.classList.toggle("active");
})
featuresBtn.addEventListener("click", function(){
    hiddenFeaturesBtn.classList.toggle("active");
})
companyBtn.addEventListener("click", function(){
    hiddenCompanyBtn.classList.toggle("active");
})


window.addEventListener('click', (e)=> {
    if(hiddenFeaturesBtn.classList.contains("active") && e.target.innerText !== 'Features') {
        hiddenFeaturesBtn.classList.remove("active");
    }
    if(hiddenCompanyBtn.classList.contains("active") && e.target.innerText !== 'Company') {
        hiddenCompanyBtn.classList.remove("active");
    }
})