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

function toggleLang() {
    document.querySelector('body').classList.toggle('en')
    document.querySelector('body').classList.toggle('it')
}

window.addEventListener('load', function() {
    changeColor()
})