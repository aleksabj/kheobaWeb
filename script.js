const galleryItems = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.onclick = () => {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
    currentIndex = index;
  };
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  } else if (currentIndex > galleryItems.length - 1) {
    currentIndex = 0;
  }

  lightboxImg.src = galleryItems[currentIndex].src;
}
