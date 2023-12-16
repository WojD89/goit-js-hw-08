import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (image) =>
      `<li>
            <a class="gallery__item" href="${image.original}">
              <img
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
              />
            </a>
      </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", createGallery);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
gallery.on("show.simplelightbox");
console.log(galleryItems);
