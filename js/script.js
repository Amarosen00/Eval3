document.getElementById('formulario-calorias').addEventListener('submit', function (event) {
    event.preventDefault();

    const weightInput = document.getElementById('Peso');
    const minutesInput = document.getElementById('min');
    const activity = document.querySelector('input[name="act"]:checked').value;
    const resultAlert = document.getElementById('result-alert');

    const weight = parseFloat(weightInput.value);
    const minutes = parseInt(minutesInput.value);

    let valid = true;

    if (weight < 1 || weight > 120) {
        weightInput.classList.add('is-invalid');
        valid = false;
    } else {
        weightInput.classList.remove('is-invalid');
    }

    if (minutes < 5 || minutes > 150) {
        minutesInput.classList.add('is-invalid');
        valid = false;
    } else {
        minutesInput.classList.remove('is-invalid');
    }

    if (valid) {
        let met;
        if (activity === 'Caminar') {
            met = 3.5;
        } else if (activity === 'Correr') {
            met = 7.0;
        }

        const caloriesBurned = met * 3.5 * weight * (minutes / 200);
        resultAlert.innerHTML = `<div class="alert alert-info" role="alert">Calorías quemadas: ${caloriesBurned.toFixed(2)}</div>`;
    } else {
        resultAlert.innerHTML = '';
    }
});
