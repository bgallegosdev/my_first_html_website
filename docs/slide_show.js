"use strict";
var $ = function(id) { return document.getElementById(id); };

//var changeSpeed = function(e) {
//    var msg = "Current speed is ".concat(slideshow.speed, 
//            " milliseconds.\nPlease enter a new speed in milliseconds.");
//    var milliseconds = prompt(msg, "2000");
//    
//    if (isNaN(milliseconds)) { 
//	    alert ("Please enter a number"); 
//	}
//    else {
//        slideshow.speed = milliseconds;
//        slideshow.stopSlideShow().startSlideShow();
//    } 
//    evt.preventDefault(e);
//};

window.onload = function() {  
     var slides = [
        {href:"graphics/photo_gallery_resized_photos/arizona5-tree.jpg", title:"Bright Colored Tree, Arizona"}, 
        {href:"graphics/photo_gallery_resized_photos/beachtown_bikes_bengallegos.jpg", title:"Beachtown Bikes, Oregon"},
        {href:"graphics/photo_gallery_resized_photos/Climb-Basilica-of-Santa-Maria-del-Fiore-2.jpg", title:"Basilica of Santa Maria del Fiore - Florence, Italy"},
        {href:"graphics/photo_gallery_resized_photos/tetons_bengallegos.jpg", title:"Grand Tetons, Wyoming"},
        {href:"graphics/photo_gallery_resized_photos/alaska7.jpg", title:"Hubbard Glacier Mountains, Alaska"},
        {href:"graphics/photo_gallery_resized_photos/spain6.jpg", title:"Four Seasons Hotel, Spain"},
        {href:"graphics/photo_gallery_resized_photos/biltmore_gardens_bengallegos.jpg", title:"Biltmore Gardens, North Carolina"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    evt.attach($("play_pause"), "click", slideshow.togglePlay); 
    evt.attach($("change_speed"), "click", slideshow.changeSpeed); 
};