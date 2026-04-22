var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';
 
function getimg() {
 
    var xhr = new XMLHttpRequest();
 
    xhr.open('GET', dataUrl, true);
    xhr.send();
 
    xhr.onload = function () {
 
        var data = JSON.parse(this.responseText);
 
        console.log(data);
 
        add_new_img(data);
    }
}
 
function add_new_img(dataset) {
 
    var gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
 
    var photos = dataset.photos.photo;
 
    photos.forEach(function(p) {
 
        var imgUrl = `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
 
        var img = document.createElement("img");
        img.src = imgUrl;
 
        gallery.appendChild(img);
    });
}
 