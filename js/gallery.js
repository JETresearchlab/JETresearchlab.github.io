document.querySelector(".modal-close").onclick = function (){
    const modal = document.querySelector(".modal");
    modal.classList.remove("is-active");
};

document.querySelectorAll(".gallery-image-container").forEach(container => {
    const image = container.querySelector(".gallery-image");
    const backgroundStyle = image.style.backgroundImage; // Looks like 'url("images/image.png")'
    const imageUrl = backgroundStyle.substring(5, backgroundStyle.length - 2);

    image.onclick = function() {
        const modalImage = document.querySelector("#modal-image");
        modalImage.src = imageUrl;

        const modal = document.querySelector(".modal");
        modal.classList.add("is-active");
    };
});