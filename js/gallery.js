let images = ["casa1", "casa2", "casa3", "casa4", "casa5", "casa6", "casa7", "casa8"];

let gallery = [];

for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = `img/${images[i]}.jpg`;
    img.alt = `${images[i]}`;
    img.ondblclick = addToGallery;
    document.querySelector('#gallery').appendChild(img);
}


function addToGallery() {
    if (gallery.includes(this.alt)) {
        alert('La foto ya existe en la galería')
        return;
    }

    gallery.push(this.alt)
    document.querySelector('#selected-images').innerHTML +=
        `<div class='gallery-item'>
            <img class='image' src='img/${this.alt}.jpg' alt='${this.alt}'/>
            <img class='remove-item' src='img/borrar.png' alt='Boton borrar'/>
        </div>`

    document.querySelectorAll('.gallery-item .image').forEach(item => item.onclick = openLightbox)
    document.querySelectorAll('.remove-item').forEach(item => item.onclick = removeImage)
}

function removeImage() {
    let i = gallery.indexOf(this.previousElementSibling.alt);
    if (i !== -1) {
        gallery.splice(i, 1);
    }

    this.parentNode.remove()
}


function openLightbox() {
    console.log(this)

    if (gallery.includes(this.alt)) {
        alert('La foto ya existe en la galería')
        return;
    }

}