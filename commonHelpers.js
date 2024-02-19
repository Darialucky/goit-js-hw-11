import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={container:document.querySelector(".container"),form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function d(t){return`<li class="gallery-item">
          <a href="${t.largeImageURL}" class="gallery-link">
            <img
              src="${t.webformatURL}"
              class="gallery-image"
              alt="${t.tags}"
            />
          </a>
          <div class="modat-text">
          
              <div class="modal-element"><p>Likes</p><span>${t.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${t.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${t.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${t.downloads}</span></div>
          </div>
        </li>`}function m(t){const o=t.hits.map(d).join("");t.hits.length?(n.galleryList.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):l()}function f(t){const o="42449656-b144528722562b12d5a1b87bf",s="https://pixabay.com/api/",i="?q=$(input)&image_type=photo&orientation=horizontal&safesearch=true",e=o+s+i;return fetch(e).then(r=>{if(!r.ok)throw new Error(response.status);return r.json()})}function p(){n.loader.classList.remove("hidden")}function y(){n.loader.classList.add("hidden")}function h(t){t.preventDefault(),p(),n.galleryList.innerHTML="",t.currentTarget.elements.input.value.trim(),f().then(m).catch(l).finally(y),n.form.reset()}n.form.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
