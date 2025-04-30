document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-track");

  carousels.forEach((track) => {
    const cards = track.querySelectorAll(".card");
    const cardCount = cards.length;
    let currentIndex = 0;
    let isAnimating = false;

    const firstCards = Array.from(cards).slice(0, 4);
    firstCards.forEach((card) => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    function slideNext() {
      if (isAnimating) return;

      isAnimating = true;
      const cardWidth = cards[0].offsetWidth + 10;
      currentIndex++;

      // Apply the slide animation
      track.style.transition = "transform 1s ease";
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      setTimeout(() => {
        if (currentIndex >= cardCount) {
          track.style.transition = "none";
          currentIndex = 0;
          track.style.transform = `translateX(0)`;

          track.offsetHeight;

          track.style.transition = "transform 1s ease";
        }

        isAnimating = false;
      }, 1000);
    }

    setInterval(slideNext, 3000);

    setTimeout(slideNext, 2000);
  });
});
