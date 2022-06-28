
function changeCSS() {
    document.getElementsByTagName("body")[0].className += " dzen"
    e = document.createElement("style");
    e.type = "text/css"
    e.innerHTML="input#intext.error{color: #fff !important;}\ndiv#text.error{color: #665d5d !important;}\nspan.warn{background: none !important}";
    let parentDiv = document.getElementsByClassName("gen")[0]
    document.body.insertBefore(e, parentDiv);
    let stat1 = document.getElementById('error')
    let stat2 = document.getElementById('speed')
    stat1.style.display = 'none';
    stat2.style.display = 'none';
}

changeCSS()
