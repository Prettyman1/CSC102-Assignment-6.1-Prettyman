
// Function to validate the form inputs
function validateForm() {
    // Prevent the form from submitting
    event.preventDefault();

    // Retrieve input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;
    var fullName = firstName + ' ' + lastName; // Combine first name and last name

    // Clear previous messages
    document.getElementById('messageContainer').innerHTML = '';

    // Check if full name is more than 20 characters
    if (fullName.length > 20) {
        document.getElementById('messageContainer').innerHTML = 'Warning: Full name should not exceed 20 characters.';
        return; // Do not continue if invalid
    }

    // Check if zip code is exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        document.getElementById('messageContainer').innerHTML = 'Warning: Zip code must be 5 digits.';
        return; // Do not continue if invalid
    }

    // If inputs are valid, show the secret message
    document.getElementById('messageContainer').innerHTML = 'Congratulations! The secret message is: "Always believe in yourself".';
}

// Add event listener to the form
document.getElementById('userForm').addEventListener('submit', validateForm);
