var ImageRecognition = require("image-recognition");
new ImageRecognition("http://www.actualplumbing.ca/wp-content/uploads/2013/04/broken-pipe.jpg", function (res) {
    console.log(res); //gas leak
});