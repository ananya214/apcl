function initCarousel(trackId, totalCards) {
  const track = document.getElementById(trackId);
  let currentIndex = 0;

  // Duplicate all cards
  track.innerHTML += track.innerHTML;

  function getCardWidth() {
    // Get first card's width directly from DOM
    const firstCard = track.querySelector(".card, .card2");
    return firstCard.offsetWidth + 10; // Add margin/padding if needed
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

  setInterval(moveCarousel, 2000);
}

// Initialize
initCarousel("carouselTrack", 10); // 10 cards for first
initCarousel("carouselTrack2", 10); // 10 cards for second
