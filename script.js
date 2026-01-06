document.getElementById("welcomeBtn").addEventListener("click", function () {
    alert("Welcome to my Student Profile Website!");
});

document.getElementById("detailsBtn").addEventListener("click", function () {
    const details = document.getElementById("moreDetails");

    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        this.textContent = "Hide Details";
    } else {
        details.classList.add("hidden");
        this.textContent = "Show More Details";
    }
});
