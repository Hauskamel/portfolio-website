class ScrollTo {
    constructor(projects) {
        this.projectsSections = projects;
        this.activeSection = null;
        this.activeIndex = 0;
    }

    scrollToNext(event) {
        if (event.deltaY > 0 && this.activeIndex < this.projectsSections.length - 1) {
            this.activeIndex++;
            this.activeSection = this.projectsSections[this.activeIndex];
            this.activeSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }


    scrollToPrev(event) {
        if (event.deltaY < 0 && this.activeIndex > 0) {
            this.activeIndex--;
            this.activeSection = this.projectsSections[this.activeIndex]
            this.activeSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

}

const projects = document.querySelectorAll(".project");

const scrollTo = new ScrollTo(projects);

window.addEventListener("wheel", (event) => {
    scrollTo.scrollToNext(event)
    scrollTo.scrollToPrev(event)
})