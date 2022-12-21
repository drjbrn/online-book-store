function initRatings() {
  const ratings = document.querySelectorAll('.rating') as NodeListOf<HTMLElement>;
  let ratingActive: HTMLElement, ratingValue: HTMLElement;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating: HTMLElement) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating: HTMLElement) {
    ratingActive = rating.querySelector('.rating__active') as HTMLElement;
    ratingValue = rating.querySelector('.rating__value') as HTMLElement;
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = Number(index) / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}

export { initRatings };
