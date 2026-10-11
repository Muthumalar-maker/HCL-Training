const myMap = new Map();

const userForm = document.getElementById("userForm");
const firstnameInput = document.getElementById("firstname");
const deptInput = document.getElementById("dept");
const outputLabel = document.getElementById("change");

userForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    myMap.set("savedFirstname", firstnameInput.value);
    myMap.set("savedDept", deptInput.value);

    outputLabel.textContent = "Saved: " + myMap.get("savedFirstname") + " from " + myMap.get("savedDept");
});