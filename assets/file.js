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
    window.location = 'instagram://user?username=retrogradeofficialband';
    setTimeout(function(){
        if (document.visibilityState == "visible")
        {
            window.location = 'https://www.instagram.com/retrogradeofficialband'
        }        
    },1500)

}

function openSpotify()
{
    window.location = 'spotify:artist:0WkxXleKZbhDF4t15nCtke';
    setTimeout(function(){
        if (document.visibilityState == "visible")
        {
            window.location = 'https://open.spotify.com/artist/0WkxXleKZbhDF4t15nCtke';
        }
    },1500)
}

function openWhatsapp()
{
    window.location = 'https://wa.me/353851356490';
    setTimeout(function(){
        if (document.visibilityState == "visible")
        {
        window.location = 'https://web.whatsapp.com/send?phone=353851456490';
        }
    },1500)
}

function openYoutube(){
    window.location = 'vnd.youtube:Qswj55u5khk';
    setTimeout(function(){
        if (document.visibilityState == "visible")
        {
        window.location = 'https://www.youtube.com/watch?v=Qswj55u5khk';
        }
    },1500)
}

function openSpotifyTrack(t_track){
    window.location = 'spotify:track:' +t_track;
    setTimeout(function(){
        if (document.visibilityState == "visible")
        {
        window.location = 'https://open.spotify.com/track/'+t_track;
        }
    },3000)
}