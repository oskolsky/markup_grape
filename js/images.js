var images = {

  src: [
    '/img/slider/main_bg_1.jpg',
    '/img/slider/main_bg_2.jpg',
    '/img/slider/main_bg_3.jpg',
    '/img/slider/main_bg_4.jpg'
  ],

}

// Load tiles
for(var i = 0; i < images.src.length; i++) {
  images[i] = new Image();
  images[i].src = images.src[i];
}