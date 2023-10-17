/**
 * Slider
 */
class Slider {
    constructor(sliderContainer) {
        this.sliderContainer = sliderContainer;
        this.scrollDistance = 0;
    }

    scroll(event) {
        if (event.deltaY > 0) {

            this.sliderContainer.scrollLeft += event.deltaY;
            console.log(this.sliderContainer.scrollLeft += event.deltaY)
        }
    }

}

// Slider Container
const sliderContainer = document.querySelector(".slide-container");

const slider = new Slider(sliderContainer)

sliderContainer.addEventListener("wheel", (event) => {
    slider.scroll(event);
})