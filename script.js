//your JS code here. If required.
const lightboxLinks = document.querySelectorAll(".lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxModal = new bootstrap.Modal(document.getElementById("lightboxModal"));

lightboxLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImage.src = link.href;
    lightboxModal.show();
  });
});