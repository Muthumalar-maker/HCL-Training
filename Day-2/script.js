// Mobile menu

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Project details

function showProject(project) {

    const modal = document.getElementById("projectModal");

    const title = document.getElementById("modalTitle");

    const description = document.getElementById("modalDescription");


    if (project === "hospital") {

        title.innerText = "Hospital Management System";

        description.innerText =
            "A full-stack hospital management system developed using React.js, Node.js, Express.js and MongoDB. It manages patients, doctors and appointments, with authentication, REST APIs and Postman testing.";

    }


    if (project === "expense") {

        title.innerText = "Smart Expense & Budget Management";

        description.innerText =
            "A full-stack expense management application developed using Spring Boot and MySQL. It helps users track and analyze personal budgets and expenses.";

    }


    if (project === "travel") {

        title.innerText = "Travel Booking System";

        description.innerText =
            "A travel booking system developed using HTML, CSS, JavaScript, PHP and MySQL. It includes search, seat selection, payment, booking confirmation and ticket generation.";

    }


    modal.style.display = "flex";

}


// Close project modal

function closeProject() {

    document.getElementById("projectModal").style.display = "none";

}


// Close modal when clicking outside

window.onclick = function(event) {

    const modal = document.getElementById("projectModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};