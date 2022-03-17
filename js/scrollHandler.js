let revealFeature = document.querySelectorAll('.reveal-subtitle');
let revealFeatureCard = document.querySelectorAll('.reveal-card-box');
let windowHeight = window.innerHeight;
// Trigger point
let revealPoint = 100;
let bottomOfThePage = document.body.offsetHeight;
// Adding class active to the elements
const addActiveClass = (group, classActive) => {
    for(let i=0; i < group.length; i++){
        let topPoint = group[i].getBoundingClientRect().top;
        if((windowHeight - revealPoint) > topPoint){
            group[i].classList.add(classActive);
        }
    }
};
// Revealing the elements when they reach the trigger point
const revealInfo = () => {
    addActiveClass(revealFeature, 'info-feature-active');
    addActiveClass(revealFeatureCard, 'info-feature-card-active');
    console.log('Fire');
};
// Assign the scroll event to the window
window.addEventListener('scroll', revealInfo);
// Removing the revealInfo function to the scroll event when we reach the end of the page
window.onscroll =  function(e) {
    if ((window.innerHeight + window.scrollY) >= bottomOfThePage) {
        window.removeEventListener('scroll', revealInfo);
    }
};