const trailContainer = document.getElementById("cursor-trail");

document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("div");
    dot.classList.add("trail-dot");

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    trailContainer.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 800);
});