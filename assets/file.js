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

function openInstagram()
{
    window.Location = 'instagram://user?username=retrogradeofficialband';
    setTimeout(function(){
        window.location = 'https://www.instagram.com/retrogradeofficialband';
    },500)
}

function openSpotify()
{
    window.Location = 'spotify:artist:0WkxXleKZbhDF4t15nCtke';
    setTimeout(function(){
        window.location = 'https://open.spotify.com/artist/0WkxXleKZbhDF4t15nCtke';
    },500)
}

function openWhatsapp()
{
    window.Location = 'https://wa.me/353851356490';
    setTimeout(function(){
        window.location = 'https://web.whatsapp.com/send?phone=353851456490';
    },500)
}

function openYoutube(){
    window.Location = 'vnd.youtube:Qswj55u5khk';
    setTimeout(function(){
        window.location = 'https://www.youtube.com/watch?v=Qswj55u5khk';
    },500)
}

function openSpotifyTrack(t_track){
    window.Location = 'spotify:track:' +t_track;
    setTimeout(function(){
        window.location = 'https://open.spotify.com/track/'+t_track;
    },500)
}