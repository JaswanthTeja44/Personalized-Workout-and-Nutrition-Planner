    const form = document.getElementById('plannerForm');
    const output = document.getElementById('output');
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('ageError');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const age = parseInt(ageInput.value);
      const gender = document.getElementById('gender').value;
      const goal = document.getElementById('goal').value;
      const activity = document.getElementById('activity').value;

      // Validate age range
      if (isNaN(age) || age < 12 || age > 100) {
        ageError.style.display = 'block';
        output.style.display = 'none';
        return;
      } else {
        ageError.style.display = 'none';
      }

      if (!gender || !goal || !activity) {
        alert('Please fill out all fields correctly.');
        return;
      }

      let workout, nutrition;

      switch (goal) {
        case 'lose':
          workout = 'Cardio 5x/week, Strength training 2x/week';
          nutrition = 'High protein, Low carb, Calorie deficit';
          break;
        case 'gain':
          workout = 'Strength training 5x/week, Cardio 2x/week';
          nutrition = 'High protein, Moderate carb, Calorie surplus';
          break;
        case 'maintain':
          workout = 'Balanced routine 4-5x/week';
          nutrition = 'Balanced macros, Maintenance calories';
          break;
      }

      let activityMessage = '';
      if (activity === 'low') activityMessage = 'Consider increasing daily movement for better results.';
      else if (activity === 'moderate') activityMessage = 'Good activity level. Stay consistent!';
      else if (activity === 'high') activityMessage = 'Excellent activity level. Keep up the great work!';

      output.innerHTML = `
        <h3>Personalized Plan:</h3>
        <p><strong>Workout Plan:</strong> ${workout}</p>
        <p><strong>Nutrition Plan:</strong> ${nutrition}</p>
        <p>${activityMessage}</p>
      `;
      output.style.display = 'block';
    });