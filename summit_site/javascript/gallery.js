function PopulateGallery(){
    let gallery_images = ['dog1.jpg','dog2.jpg','dog3.jpg','dog4.jpg'];
    let gallery_names = ['Tom', 'Henry', 'Frank', 'Sally'];
    let outputGallery = "";

    outputGallery += "<div class='gallerybody'>";
    for(let i = 0; i < gallery_images.length; i++){
        outputGallery += "<div class='gallerycard'>";
        outputGallery += "<img src=" + "images/" + gallery_images[i] +">";
        outputGallery += "<div class='gallerycarddesc'>";
        outputGallery += "<h4><strong>Name: " + gallery_names[i] + "</strong></h4>";
        outputGallery += "<p>Age: PLACEHOLDER</p>";
        outputGallery += "<p>Breed: PLACEHOLDER</p>";
        outputGallery += "<p>Price: $PLACEHOLDER</p>";
        outputGallery += "</div>";
        outputGallery += "</div>";
    }
    outputGallery += "</div>"

    document.querySelector("section").innerHTML += outputGallery;
}