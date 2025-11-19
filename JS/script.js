document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalImages = images.length;
    let imageWidth = images.length > 0 ? images[0].clientWidth : 0;

    function showImage(index) {
        if (images.length === 0) return;
        imageWidth = images[0].clientWidth;
        gallery.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    function nextImage() {
        if (images.length === 0) return;
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        if (images.length === 0) return;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    let autoSlideInterval = setInterval(nextImage, 3000);

    function resetInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextImage, 3000);
    }

    window.addEventListener('resize', () => {
        if (images.length === 0) return;
        gallery.style.transition = 'none';
        showImage(currentIndex);
        gallery.style.transition = 'transform 0.5s ease-in-out';
    });
});