function PageLoad(){

    addStyleSheet();
    addNavbar();
    addFooter();

}

function addStyleSheet(){
    //setting the stylesheet of the page
    let insertCSS = '<link rel="stylesheet" type="text/css" href="style.css" media="screen" />';
    document.querySelector("head").innerHTML += insertCSS;
}

function addNavbar(){
    //variables
    let pages = ["index.html", "about.html", "homework.html","index.php"];
    let page_names = ["Home", "About", "Homework", "Pretty Page"];
    let outputNavbar = "";

    //setting up the navigation bar
    outputNavbar = '<nav class="navbar page_nav">';
    outputNavbar += '<ul>';
    outputNavbar += '<li><a href="index.html" class="logo">Trever Cluney</a></li>';
    for(let i = 0; i < pages.length; i++){
        outputNavbar += '<li>';
        outputNavbar += '<a href=' + pages[i] + '>' + page_names[i] + '</a>';
        outputNavbar += '</li>';
    }
    outputNavbar += '</ul>';
    outputNavbar += '</nav>';
    
    //outputting the navbar
    document.querySelector("header").innerHTML += outputNavbar;
}

function addFooter(){
    //set the footer to what we want
    let outputFooter = "";

    outputFooter = '<div class="foot">';
    outputFooter += '<p>CopyRight &copy 2022 Trever Cluney <p>';
    outputFooter += "</div>";

    document.querySelector("footer").innerHTML += outputFooter;
}

function blinker(){
    let myelement = document.getElementById('blink');
    myelement.style.visibility = (myelement.style.visibility == 'hidden' ? '' : 'hidden');
}

let interval = 1000;
let blink = setInterval(blinker, interval);