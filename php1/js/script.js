
    document.getElementById('warrantyForm').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        // Validate Installation Service Order No
        const isoInput = document.getElementById('iso');
        const isoError = document.getElementById('isoError');
        const isoRegex = /[A-Za-z]{3}\d{10}/;
        if (!isoRegex.test(isoInput.value)) {
            isoError.innerText = 'Invalid Installation Service Order No. Please email xyz@gmail.com for warranty registration.';
            return;
        } else {
            isoError.innerText = '';
        }

        // Clear error message
        document.getElementById('errorMessage').innerText = '';

        // Submit the form
        document.getElementById('warrantyForm').submit();
    }
