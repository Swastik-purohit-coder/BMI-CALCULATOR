function bmi() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid weight and height.";
        return;
    }

    const bmiValue = weight / (height * height);
    let category;

    if (bmiValue < 18.5) {
        category = "Underweight";
    } else if (bmiValue < 24.9) {
        category = "Normal weight";
    } else if (bmiValue < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("result").textContent = `Your BMI is ${bmiValue.toFixed(2)} (${category}).`;
}

