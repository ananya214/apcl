function initCarousel(trackId, totalCards, cardWidthLarge, cardWidthSmall) {
  const track = document.getElementById(trackId);
  let currentIndex = 0;

  // Duplicate all cards for smooth infinite scroll
  track.innerHTML += track.innerHTML;

  function getCardWidth() {
    return window.innerWidth <= 600 ? cardWidthSmall : cardWidthLarge;
  }

  function moveCarousel() {
    const cardWidth = getCardWidth();
    currentIndex += 1;

    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    if (currentIndex >= totalCards) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0px)";
        currentIndex = 0;

        void track.offsetWidth;
        track.style.transition = "transform 0.5s ease-in-out";
      }, 500);
    }
  }

  // Move every 2 seconds
  setInterval(moveCarousel, 2000);
}

// First row (top)
initCarousel("carouselTrack", 10, 310, 210);

// Second row (bottom)
initCarousel("carouselTrack2", 10, 310, 210);
