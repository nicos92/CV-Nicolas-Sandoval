window.onscroll = function () {
    let divFloat = document.querySelector(".button");
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        divFloat.style.display = "block";
    } else {
        divFloat.style.display = "none";
    }
};
