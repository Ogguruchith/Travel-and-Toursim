document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-btn");
    const locationInput = document.getElementById("location-input");

    // Mapping places to their respective pages
    const places = {
        "ananthagiri": "Discover More.html",
        "nehru zoological park": "Nehru Park.html",
        "wonderla": "Wonderla.html",
        "ramoji film city": "Ramoji.html",
        "charminar": "charminar.html"
    };

    searchButton.addEventListener("click", function () {
        const userInput = locationInput.value.toLowerCase().trim();

        if (userInput in places) {
            window.location.href = places[userInput]; // Redirect to the matched place
        } else {
            alert("Destination not found. Please enter a valid place.");
        }
    });
});
