import { onError } from "./onError";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import{ refs } from "./refs";
import{ makeMarcup } from "./makeMarcup";


export function makeGalleryItem(res) {
    const result = res.hits.map(makeMarcup).join('');
  
    if (res.hits.length) {
      refs.galleryList.innerHTML = result;
      let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
      });
      lightbox.refresh();
    } else {
      onError();
    }
  }