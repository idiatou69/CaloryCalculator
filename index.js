function calculateCalories(event) {
	event.preventDefault();

	// Get the input values
	const weight = parseFloat(document.getElementById("weight").value);
	const height = parseFloat(document.getElementById("height").value);
	const age = parseInt(document.getElementById("age").value);
	const gender = document.getElementById("gender").value;
	const activity = document.getElementById("activity").value;

	// Calculate the basal metabolic rate (BMR)
	let bmr;
	if (gender === "male") {
		bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
	} else {
		bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
	}

	// Apply the activity level multiplier
	let multiplier;
	switch (activity) {
		case "sedentary":
			multiplier = 1.2;
			break;
		case "lightly-active":
			multiplier = 1.375;
			break;
		case "moderately-active":
			multiplier = 1.55;
			break;
		case "very-active":
			multiplier = 1.725;
			break;
		case "extra-active":
			multiplier = 1.9;
			break;
	}
	const calories = Math.round(bmr * multiplier);

	// Display the results
	const resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = `
		<h2>Your Daily Calorie Needs:</h2>
		<p>Basal Metabolic Rate (BMR): ${bmr.toFixed(2)} calories/day</p>
		<p>Activity Level Multiplier: ${multiplier.toFixed(2)}</p>
		<p><strong>Total: ${calories} calories/day</strong></p>
	`;
}
