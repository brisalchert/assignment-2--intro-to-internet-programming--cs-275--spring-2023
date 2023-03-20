const body = document.getElementsByTagName(`body`)[0];
const nav = document.getElementsByTagName(`nav`)[0];
const leftArrow = nav.children[0];
const rightArrow = nav.children[1];
const carouselSlides = document.getElementsByClassName(`carousel-slides`)[0];
let slidesLeft = carouselSlides.clientLeft;

leftArrow.id = `left-arrow`;
rightArrow.id = `right-arrow`;

function slides(data) {
    for (let index = 0; index < data.length; index++) {
        let slide = document.createElement(`div`);
        slide.classList.add(`slide`);
        carouselSlides.appendChild(slide);

        let albumInfo = document.createElement(`span`);
        albumInfo.classList.add(`album-info`);
        slide.appendChild(albumInfo);

        let albumTitle = document.createElement(`p`);
        albumTitle.classList.add(`album-title`);
        albumTitle.textContent += data[index].album;
        albumInfo.appendChild(albumTitle);

        let artist = document.createElement(`a`);
        artist.textContent += data[index].artist;
        artist.href = data[index].url;
        albumInfo.appendChild(artist);
    }
}

document.body.addEventListener(`keydown`, (event) => {
    const key = event.key;

    switch (key) {
        case `ArrowLeft`:
            if (slidesLeft > -2040) {
                carouselSlides.style.transform = `translateX(${slidesLeft -= 680}px)`;

                if (slidesLeft === -2040) {
                    leftArrow.style.visibility = `hidden`;
                }

                if (slidesLeft === -680) {
                    rightArrow.style.visibility = `visible`;
                }
            }

            break;

        case `ArrowRight`:
            if (slidesLeft < 0) {
                carouselSlides.style.transform = `translateX(${slidesLeft += 680}px)`;

                if (slidesLeft === 0) {
                    rightArrow.style.visibility = `hidden`;
                }

                if (slidesLeft === -1360) {
                    leftArrow.style.visibility = `visible`;
                }
            }

            break;
    }
});

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

let script = document.createElement(`script`);
script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
