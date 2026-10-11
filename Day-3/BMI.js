function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML =
            "BMI: " + bmi + " - Underweight";
    }
    else if (bmi < 25) {
        document.getElementById("result").innerHTML =
            "BMI: " + bmi + " - Normal Weight";
    }
    else if (bmi < 30) {
        document.getElementById("result").innerHTML =
            "BMI: " + bmi + " - Overweight";
    }
    else {
        document.getElementById("result").innerHTML =
            "BMI: " + bmi + " - Obese";
    }
}