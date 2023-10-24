
let scrollContainer = document.querySelector(".cont-gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 469;
})

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 469;
})