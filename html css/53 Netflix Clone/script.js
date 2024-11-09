
let scr = document.querySelector(".movie-list");
let leftbtn = document.getElementById("leftBtn");
let rightbtn = document.getElementById("rightBtn");

scr.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (e.deltaY !== 0) {
        scr.scrollLeft -= e.deltaY * 4
    } else if (e.deltaX !== 0) {
        scr.scrollLeft -= e.deltaX * 4;
    }
});

leftbtn.addEventListener("click", () => {
    scr.scrollLeft -= 1000;
    leftbtn.style.visibility = "hidden"
    rightbtn.style.visibility = "visible"
    leftbtn.style.transition = "400ms ease"
});


rightbtn.addEventListener("click", () => {
    scr.scrollLeft += 1000;
    rightbtn.style.visibility = "hidden"
    leftbtn.style.visibility = "visible"
    rightbtn.style.transition = "400ms ease"

});

function toggleFAQ(expandclass, svg) {
    const expandElement = document.querySelector(`.${expandclass}`);
    const plusSvgElement = document.querySelector(`.${svg}`);
    const faqElement = document.querySelector(".faq");
    let currentHeight = parseInt(window.getComputedStyle(faqElement).height);
    let height_plus = currentHeight + 250
    let height_minus = currentHeight - 250
    if (expandElement.style.display === "none" || expandElement.style.display === "") {
        expandElement.style.display = "block";
        faqElement.style.height = `${height_plus}px`;
        plusSvgElement.style.transform = "rotate(135deg)";
    } else {
        expandElement.style.display = "none";
        faqElement.style.height = `${height_minus}px`;
        plusSvgElement.style.transform = "rotate(-90deg)";
    }

    plusSvgElement.style.transition = "400ms ease";
}


document.querySelector(".exp1").addEventListener("click", () => toggleFAQ("expand", "plus-svg"));
document.querySelector(".exp2").addEventListener("click", () => toggleFAQ("expand2", "plus-svg2"));
document.querySelector(".exp3").addEventListener("click", () => toggleFAQ("expand3", "plus-svg3"));
document.querySelector(".exp4").addEventListener("click", () => toggleFAQ("expand4", "plus-svg4"));
document.querySelector(".exp5").addEventListener("click", () => toggleFAQ("expand5", "plus-svg5"));
document.querySelector(".exp6").addEventListener("click", () => toggleFAQ("expand6", "plus-svg6"));
