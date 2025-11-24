const video = document.getElementById('pac-video');
const heroSection = document.querySelector('.video-hero');

window.addEventListener('scroll', () => {
    // Calculate how far down the user has scrolled
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Calculate opacity: 1 at top, 0 when you scroll past the hero section
    const opacity = 1 - (scrollPosition / heroHeight);

    // Apply the opacity to the video (ensure it doesn't go below 0)
    if (opacity >= 0) {
        video.style.opacity = opacity;
    } else {
        video.style.opacity = 0;
    }
});

// GIF button logic
const gifButton = document.getElementById('gif-button');
const danceGif = document.getElementById('dance-gif');

gifButton.addEventListener('click', () => {
    danceGif.style.display = "block";
});
