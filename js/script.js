// changes colors to link and titles and text element with THEME-COLORED class
function changeColor(hue) {
    anim_duration = .5
    if(!hue) {
        paletteHue = [0, 15, 25, 40, 50, 75, 100, 125, 145, 185, 205, 240]
        hue = paletteHue[Math.floor(Math.random() * 12)]
    }
    base_clr = "hsla(" + hue + ",60%,40%,1)"
    base_alpha_clr = "hsla(" + hue + ",60%,40%,.8)"
    dark_clr = "hsla(" + hue + ",60%,20%,1)"
    semilight_clr = "hsla(" + hue + ",70%,60%,1)"
    light_clr = "hsla(" + hue + ",80%,80%,1)"
    // ultralight_clr = "hsla(" + hue + ",100%,90%,1)"
    document.querySelectorAll('.theme-colored').forEach(element => {
        if(element.classList.contains('darktext'))
            gsap.to(element, anim_duration, {css: {color: dark_clr}})
        if(element.classList.contains('lighttext'))
            gsap.to(element, anim_duration, {css: {color: light_clr}})
        if(element.classList.contains('text'))
            gsap.to(element, anim_duration, {css: {color: base_clr}})
        if(element.classList.contains('background')) 
            gsap.to(element, anim_duration, {css: {background: base_clr, color: light_clr}})
        if(element.classList.contains('backgroundAlpha')) 
            gsap.to(element, anim_duration, {css: {background: base_alpha_clr, color: light_clr}})
        if(element.classList.contains('browser'))
            gsap.to(element, anim_duration, {attr: {content: base_clr}})
        if(element.classList.contains('image'))
            gsap.to(element, anim_duration, {css: {filter: 'hue-rotate('+hue+'deg)'}})
    })

    // gsap.to(document.querySelector('header'), anim_duration, {css: {background: 'linear-gradient('+ dark_clr + ',' + base_alpha_clr}})
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function toggleLang() {
    document.querySelector('body').classList.toggle('en')
    document.querySelector('body').classList.toggle('it')
    lang = document.querySelector('body').classList.contains('it') ? 'it' : 'en'
    window.history.replaceState({
        'lang': lang
    }, 'langtoggle', '?lang=' + lang);
}


let mainNavLinks = document.querySelectorAll("#menu li a");
let mainSections = document.querySelectorAll("#container .list");

// let lastId;
// let cur = [];

// https://css-tricks.com/sticky-smooth-active-nav/
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    customOffset = 100;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (section.offsetTop - customOffset <= fromTop && 
            section.offsetTop + section.offsetHeight - customOffset > fromTop) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

window.addEventListener('load', function() {
    changeColor()
    vars = getUrlVars()
    if (vars['lang'] == 'en')
        toggleLang()
})