
function validateForm(event) {
    // Validate Installation Service Order No
    const isoInput = document.getElementById('iso');
    const isoRegex = /[A-Za-z]{3}\d{10}/;
    if (!isoRegex.test(isoInput.value)) {
        event.preventDefault();
        document.getElementById('errorMessage').innerText =
            'Invalid Installation Service Order No. Please email xyz@gmail.com for warranty registration.';
        return;
    }

    // Clear error message
    document.getElementById('errorMessage').innerText = '';
}

