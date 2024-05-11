const mobileNav = document.getElementById("mobile-nav")
const hidden = document.getElementsByClassName("start-hidden")
const hamburgerButton = document.getElementsByClassName("hamburger")[0];

let mobileNavDisplay = false;

hamburgerButton.addEventListener("click", displayMobileNav)

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
    mobileNav.classList.remove("start-hidden");
    $(mobileNav).toggle();
})