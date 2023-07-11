import { Turbo } from "@hotwired/turbo-rails"

document.addEventListener('turbo:load', () => {
  const showGallery = event => {
    event.preventDefault();

    let elems = Array.from(document.getElementsByClassName('third_row'));
    elems.forEach(elem => {
      elem.style.display = 'flex';
      elem.classList.add('horizontal');
    });

    let elems1 = Array.from(document.getElementsByClassName('image_container_4'));
    elems1.forEach(elem => {
      elem.style.display = 'flex';
      elem.classList.add('horizontal');
    });

    let elems2 = Array.from(document.getElementsByClassName('image_container_5'));
    elems2.forEach(elem => {
      elem.style.display = 'flex';
      elem.classList.add('horizontal');
    });
  }

  let imageContainer0 = document.querySelector('.image_container_0');
  let galleryLink = document.getElementById('gallery_link');

  if(imageContainer0) {
    imageContainer0.addEventListener('click', event => {
      event.target.classList.toggle('clicked');
    });
  }

  if(galleryLink) {
    galleryLink.addEventListener('click', showGallery);
  }
});

let contactLink = document.getElementById('contact_link');
let overlay = document.querySelector('.image_container_1 .contact_overlay');

if (contactLink) {
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    overlay.style.display = 'flex';
  });
}
