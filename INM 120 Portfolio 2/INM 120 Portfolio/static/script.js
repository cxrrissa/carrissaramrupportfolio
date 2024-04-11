const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 70);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hello-text',{delay:200, origin:'top'});
sr.reveal('.hello-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

// icon for dark and light theme

var myicon = document.querySelector('#moon-icon');
myicon.onclick = function(){
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')){
        myicon.src = "./static/images/sun.png";
    }else{
        myicon.src = "./static/images/moon.png";
    }
}




// Smooth scroll from navbar to sections

document.addEventListener("DOMContentLoaded", function() {
    
    const aboutLink = document.querySelector('header .navlist li:nth-child(2) a'); 
    const workLink = document.querySelector('header .navlist li:nth-child(3) a'); 
    const contactLink = document.querySelector('header .navlist li:nth-child(5) a');

  
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        const aboutSection = document.querySelector('#about'); 
        aboutSection.scrollIntoView({ behavior: 'smooth' }); 
    });

    workLink.addEventListener('click', function(event) {
        event.preventDefault();
        const workSection = document.querySelector('#work'); 
        workSection.scrollIntoView({ behavior: 'smooth' }); 
    });

    contactLink.addEventListener('click', function(event) { 
        event.preventDefault(); 
        const contactSection = document.querySelector('#contact'); 
        contactSection.scrollIntoView({ behavior: 'smooth' }); 
    });

    // smoothscrool arrow down icon to go to about section


    const scrollDownIcon = document.querySelector('.scroll-down a');

    scrollDownIcon.addEventListener('click', function(event) {
        event.preventDefault(); 

        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // smoothscrool arrow up icon to go to about section

    const scrollTopLink = document.querySelector('.scroll-top'); 

        scrollTopLink.addEventListener('click', function(event) {
            event.preventDefault(); 

            const headerSection = document.querySelector('#header'); 
            headerSection.scrollIntoView({ behavior: 'smooth' }); 
        });

});

// change avatar image

function changeImage(element) {
    element.querySelector('img').src = 'static/images/avatar2.png';
}

function restoreImage(element) {
    element.querySelector('img').src = 'static/images/avatar.png';
}



