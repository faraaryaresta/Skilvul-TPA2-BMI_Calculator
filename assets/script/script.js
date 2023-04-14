function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    let bmi = weight / Math.pow(height / 100, 2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    if (height !== '' && weight !== '') {
        document.getElementById('result').innerHTML = "Your BMI is " + bmi.toFixed(1) + " which means You are " + category;
        document.getElementById('height_error').innerHTML = '';
        document.getElementById('weight_error').innerHTML = '';
    } else {
        if(height === ''){
            document.getElementById('height_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please provide a valid height';
            document.getElementById('result').innerHTML = '';
        }else if (height !== ''){
            document.getElementById('height_error').innerHTML = '';
        }
    
        if(weight === ''){
            document.getElementById('weight_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please provide a valid weight';
            document.getElementById('result').innerHTML = '';
        }else if (weight !== '' ){
            document.getElementById('weight_error').innerHTML = '';
        }
    } 
};
