
/* Search Destinations */
function searchPlaces() {
    let input = document.getElementById("searchInput")
        .value.toLowerCase().trim();

    let destinations = document.querySelectorAll(".destination");
    let found = 0;

    destinations.forEach(function (destination) {
        let name = destination.querySelector(".card-title")
            .textContent.toLowerCase();

        if (name.includes(input)) {
            destination.style.display = "block";
            found++;
        } else {
            destination.style.display = "none";
        }
    });

    document.getElementById("noResults").hidden = found !== 0;
}

/* Press Enter to Search */
document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchPlaces();
    }
});

/* Book a Destination or Package */
function bookPlace(place) {
    document.getElementById("place").value = place;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

/* Enquiry Form */
document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let place = document.getElementById("place").value;

    if (name === "" || email === "" || place === "") {
        alert("Please fill in all required fields.");
        return;
    }

    document.getElementById("successMessage").textContent =
        "Thank you, " + name + "! Your enquiry for " +
        place + " has been received.";

    this.reset();
});
