const leftArrow = document.getElementById(`left-arrow`);
const rightArrow = document.getElementById(`right-arrow`);
const carouselSlides = document.getElementsByClassName(`carousel-slides`)[0];

let slidesLeft = carouselSlides.clientLeft;

window.onload = () => {
    alert(`Test`);
};

leftArrow.addEventListener(`click`, () => {
    carouselSlides.style.transform = `translateX(${slidesLeft -= 680}px)`;

    if (slidesLeft === -2040) {
        leftArrow.style.visibility = `hidden`;
    }

    if (slidesLeft === -680) {
        rightArrow.style.visibility = `visible`;
    }
});

rightArrow.addEventListener(`click`, () => {
    carouselSlides.style.transform = `translateX(${slidesLeft += 680}px)`;

    if (slidesLeft === 0) {
        rightArrow.style.visibility = `hidden`;
    }

    if (slidesLeft === -1360) {
        leftArrow.style.visibility = `visible`;
    }
});
