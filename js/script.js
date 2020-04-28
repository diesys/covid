// changes colors to link and titles and text element with THEME-COLORED class
function changeColor(hue) {
    base_clr = "hsla(" + hue + ",60%,40%,1)"
    base_alpha_clr = "hsla(" + hue + ",60%,40%,.8)"
    dark_clr = "hsla(" + hue + ",60%,20%,1)"
    semilight_clr = "hsla(" + hue + ",70%,60%,1)"
    light_clr = "hsla(" + hue + ",80%,80%,1)"
    // ultralight_clr = "hsla(" + hue + ",100%,90%,1)"
    anim_duration = .5
    document.querySelectorAll('.theme-colored').forEach(element => {
        if(element.classList.contains('darktext'))
            gsap.to(element, anim_duration, {css: {color: dark_clr}})
        if(element.classList.contains('lighttext'))
            gsap.to(element, anim_duration, {css: {color: light_clr}})
        if(element.classList.contains('text'))
            gsap.to(element, anim_duration, {css: {color: base_clr}})
            // gsap.to(element, anim_duration, {css: {color: base_clr, background: light_clr}})
        if(element.classList.contains('background')) 
            gsap.to(element, anim_duration, {css: {background: base_clr, color: light_clr}})
        if(element.classList.contains('backgroundAlpha')) 
            gsap.to(element, anim_duration, {css: {background: base_alpha_clr, color: light_clr}})
        if(element.classList.contains('browser'))
            gsap.to(element, anim_duration, {attr: {content: base_clr}})
    })

    // gsap.to(document.querySelector('header'), anim_duration, {css: {background: 'linear-gradient('+ dark_clr + ',' + base_alpha_clr}})
}

function toggleLang() {
    document.querySelector('body').classList.toggle('en')
    document.querySelector('body').classList.toggle('it')
}

paletteHue = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34]

window.addEventListener('load', function() {
    // changeColor(Math.floor(Math.random()*36)+'0')
    changeColor(paletteHue[Math.floor(Math.random() * 18)] + '0')
})