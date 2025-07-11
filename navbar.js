let state = false;
let topnav = document.getElementsByClassName("topnav")[0];
exContainer = document.getElementsByClassName("nav-hamburger-expand")[0];
expand = document.getElementsByClassName("expand-content")[0];
exText = document.getElementsByClassName("expand-child");
exTextLen = exText.length

function showMenu() {
    if(state) {
        hideExpand();
    }
    else {
        showExpand();
    }
}

function hideExpand() {
    expand.style.height = "0";
    for (let i = 0; i < exTextLen; i++) {
        exText[i].style.display = "none";
        exText[i].style.opacity = 0;
    }
    setTimeout(function() {
        expand.style.display = "none";
        exContainer.style.display = "none";
    }, 300);
    
    // restrict to index.html for come back transparent
    if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
        setTimeout(function() {
            if (document.documentElement.scrollTop < 200) {
                topnav.style.background = "none";
            }
        }, 250);
    }
    state = false;
}

function showExpand() {
    exContainer.style.display = "block";
    expand.style.display = "block";
    setTimeout(function() {
        expand.style.height = "130px";
    }, 300);
    setTimeout(function() {
        for (let i = 0; i < exTextLen; i++) {
            setTimeout(function() {
                exText[i].style.display = "block";
                exText[i].offsetWidth;
                exText[i].style.opacity = 1;
            }, 200+(i*50));
        }
    }, 200);
    setTimeout(function() {
        topnav.style.backgroundColor = "black";
    }, 250);
    state = true;
}

// dynamic nav background, restrict to only works in index.html
if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
    window.addEventListener("scroll", runOnScroll);
    function runOnScroll() {
        if (document.documentElement.scrollTop >= 200) {
            topnav.style.backgroundColor = "black";
        }
        else {
            topnav.style.background = "none";
        }
    }
}
else {
    topnav.style.backgroundColor = "black";
    topnav.style.position = "sticky";
    topnav.style.top = "0";
}

function visitUrl(uri) {
    window.location.href=uri;
}