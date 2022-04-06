function PageLoad(){

    addStyleSheet();
    addNavbar();
    addFooter();

}

function addStyleSheet(){
    //setting the stylesheet of the page
    let insertCSS = '<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />';
    document.querySelector("head").innerHTML += insertCSS;
}

function addNavbar(){
    //variables
    let pages = ["index.html", "adoption.html", "about.html","care.html"];
    let page_names = ["Home", "Adoption", "About", "Care"];
    let outputNavbar = "";

    //setting up the navigation bar
    outputNavbar = "<img class='logo' src='images/summit_farms.jpg'>";
    outputNavbar += '<nav class="navbar page_nav">';
    outputNavbar += '<ul>';
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
    outputFooter += '<p>CopyRight &copy 2022 Summit Farms <p>';
    outputFooter += "</div>";

    document.querySelector("footer").innerHTML += outputFooter;
}