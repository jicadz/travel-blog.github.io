const hamburgerIcon = document.querySelector('.hamburger-icon');
const cross = document.querySelector('.exit-icon');
const links = document.querySelector('.links');

// hamburgerIcon.addEventListener("click", function () {

//     links.classList.toggle("show");
//     hamburgerIcon.classList.toggle("hide");

// });

// cross.addEventListener("click", function () {

//     links.classList.toggle("show");
//     hamburgerIcon.classList.toggle("hide");

// });

function toggleMenu() {

    hamburgerIcon.classList.toggle('hide');
    links.classList.toggle('show');
    
}




const span1 = document.querySelector('#abt :first-child');
const span2 = document.querySelector('#abt :nth-child(2)');
const abtSection = document.getElementById('about');

function checkViewport() {
    // this returns a number value
    const rect1 = abtSection.getBoundingClientRect();

    // Check if the section is in the viewport
    // This condition checks if the top of the element (rect1.top) is less than or equal to 100 pixels from the top 
    // of the viewport.
    // It also checks if the bottom of the element (rect1.bottom) is greater than or equal to the height of the 
    // viewport (window.innerHeight).
    // Essentially, this condition is checking if the entire element is within 100 pixels from the top and fully 
    // visible within the viewport.
    if (rect1.top <= 100 && rect1.bottom >= window.innerHeight-50) {
        span1.style.width = "100%";
        span2.style.width = "50%";
    } else {
        span1.style.width = "0";
        span2.style.width = "0";
    }

    console.log(rect1.bottom);
}

// Initial check on page load
checkViewport();

// Listen for scroll events to check viewport on scroll
window.addEventListener('scroll', checkViewport);



const span3 = document.querySelector('#blg :first-child');
const span4 = document.querySelector('#blg :nth-child(2)');
const blgSection = document.getElementById('blogs');

function checkViewport2() {
    const rect2 = blgSection.getBoundingClientRect();

    if (rect2.top <= 100 && rect2.bottom >= window.innerHeight-50) {
        span3.style.width = "100%";
        span4.style.width = "50%";
    } else {
        span3.style.width = "0";
        span4.style.width = "0";
    }
}

checkViewport2();

window.addEventListener('scroll', checkViewport2);



const span5 = document.querySelector('#cnt :first-child');
const span6 = document.querySelector('#cnt :nth-child(2)');
const cntSection = document.getElementById('contacts');

function checkViewport3() {
    const rect3 = cntSection.getBoundingClientRect();

    if (rect3.top <= 100 && rect3.bottom >= window.innerHeight-50) {
        span5.style.width = "100%";
        span6.style.width = "50%";
    } else {
        span5.style.width = "0";
        span6.style.width = "0";
    }
}

checkViewport3();

window.addEventListener('scroll', checkViewport3);



const span7 = document.querySelector('.logo :first-child');
const span8 = document.querySelector('.logo :nth-child(2)');
const hmSection = document.getElementById('home');

function checkViewport4() {
    const rect4 = hmSection.getBoundingClientRect();

    if (rect4.top <= 0 && rect4.bottom >= window.innerHeight) {
        span7.style.width = "100%";
        span8.style.width = "50%";
    } else {
        span7.style.width = "0";
        span8.style.width = "0";
    }
}

checkViewport4();

window.addEventListener('scroll', checkViewport4);






// const links = document.querySelectorAll('a');

// links.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         // Prevent the default behavior of the anchor tag
       
//     });
// });