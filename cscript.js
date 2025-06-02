function visitUrl(uri) {
    window.location.href=uri;
}

// Slide show element
const ss = {};
ss.slides = document.getElementsByClassName("slideshow");
ss.numberSlides = ss.slides.length;
ss.showing = 0;
function slideShowAuto(duration) {
    // auto displayer
    setInterval(function() {
        showSlide(ss.showing);
        ss.showing++;
        if(ss.showing >= ss.numberSlides) {
            ss.showing = 0;
        }
    }, duration);
}

function slideControl(control) {
    if(control == "next") {
        ss.showing++;
    }
    if(control == "prev") {
        ss.showing--;
    }
}

function showSlide(slide) {
    // renderer
    for (let i = 0; i<ss.numberSlides; i++) {
        ss.slides[i].style.display = "none";
    }
    ss.slides[slide].style.display = "block";
}

function backgroundChange(element, uri) {
    document.getElementById(element).style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('"+uri+"')";
}