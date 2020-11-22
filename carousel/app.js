const $ = sel => document.querySelectorAll(sel);
const first = arr => arr[0];

const $rightArrowButton = first($(".arrow-button.right-arrow"));
const $leftArrowButton = first($(".arrow-button.left-arrow"));
const $scrollInCarousel = first($(".body .carousel .scroll"))
const $carouselCards = $(".body .carousel .card");
const $indicators = $(".body .action-bar .indicator div");

const updateIndicators = index => {
  $indicators.forEach(e => e.classList.remove("active"));
  $indicators[index].classList.add("active");
}

const maxCardLength = $carouselCards.length;
const scrollWidth = 650;

var carouselIndex = 0;

$rightArrowButton.addEventListener("click", function(e) {
  const btn = e.currentTarget;
  carouselIndex++;

  updateIndicators(carouselIndex);

  $scrollInCarousel.scroll({
    left: scrollWidth * carouselIndex,
    behavior: 'smooth'
  });

  if (maxCardLength - 1 == carouselIndex) {
    btn.classList.remove("active");
  }

  if (carouselIndex > 0) {
    $leftArrowButton.classList.add("active");
  }
});

$leftArrowButton.addEventListener("click", function(e) {
  const btn = e.currentTarget;
  carouselIndex--;

  updateIndicators(carouselIndex);

  $scrollInCarousel.scroll({
    left: scrollWidth * carouselIndex,
    behavior: 'smooth'
  });

  if (maxCardLength - 1 > carouselIndex) {
    $rightArrowButton.classList.add("active");
  }

  if (carouselIndex == 0) {
    btn.classList.remove("active");
  }
})
