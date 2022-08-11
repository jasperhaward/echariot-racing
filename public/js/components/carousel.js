document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.getElementsByClassName("carousel");

    for (const carousel of carousels) {
        for (var index = 0; index < carousel.children.length; index++) {
            const image = carousel.children[index];

            if (index === 1) {
                image.style.left = "500px";
            }
        }
    }
});
