function onPageLoad(){
    let outputNavbar = '<img src="images/koala_banner.jpg" alt="Koalas in trees and the site logo" width="100%" >';
    outputNavbar += '<h1>Koala Bear National Information Center</h1>';
    outputNavbar += '<nav class="navbar page_nav">';
    outputNavbar += '<ul><li><a href="index.html">Home</a></li><li><a href="faq.html">About Koalas</a></li><li><a href="save_koalas.html">Save Koalas</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="adopt.html">Adopt</a></li><li><a href="contact_us.html">Contact Us</a></li></ul>';
    outputNavbar += '</nav>';
    let outputStyleSheet = '<link rel="stylesheet" type="text/css" href="style.css" media="screen" />';
    let outputFooter = '<p>Copyright &copy; 2018 All rights reserved. Australian Koala Foundation <img src="images/koala_logo.svg" alt="Koalas" width="20" height="20"></p>';

    document.querySelector("header").innerHTML = outputNavbar;
    document.querySelector("head").innerHTML += outputStyleSheet;
    document.querySelector("footer").innerHTML = outputFooter;
}

