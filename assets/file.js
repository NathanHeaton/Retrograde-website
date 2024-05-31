const mobileNav = document.getElementById("mobile-nav")
const hidden = document.getElementsByClassName("start-hidden")
const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const slidesUp = document.getElementsByClassName("slides-up");

let mobileNavDisplay = false;
let scrolledAmount = 0;
let scrolledToTop= false;
hamburgerButton.addEventListener("click", displayMobileNav);
window.addEventListener("scroll",scrollElementUp);


function displayMobileNav()
{

    if(mobileNavDisplay == false) // if the display is off 
    {
        $(mobileNav).slideDown();

        mobileNavDisplay = true;
    }
    else
    {
        $(mobileNav).toggle();
        mobileNavDisplay = false;
    }
}

$(document).ready(function()
{
    // sets up nav to be flex and toggled off
    mobileNav.classList.add("flex");
    if(window.innerWidth < 768)
    {
        mobileNav.classList.remove("start-hidden");
        $(mobileNav).toggle();
    }

    document.documentElement.scrollTop = 0;

})


function scrollElementUp(){

    let elementScrollAmount = 0;

    scrolledAmount = document.documentElement.scrollTop;
    elementScrollAmount = -1*(scrolledAmount);
    if(elementScrollAmount < -240)
    {
        elementScrollAmount = -240;
    }
    // tanslates the element upwards by half the amount you scroll down
    $(slidesUp).stop().css({
        "transform":"translateY("+ elementScrollAmount+"px)"


    });

}