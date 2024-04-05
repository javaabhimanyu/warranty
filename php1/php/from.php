<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $iso = $_POST["iso"];
    $modelName = $_POST["modelName"];
    // Collect other form data...

    // Validate and process data as needed
    // ...

    // Send email to hr@unbundl.com
    $to = "hr@unbundl.com";
    $subject = "Warranty Registration Form Submission";
    $message = "Installation Service Order No: $iso\nModel Name: $modelName\n"; // Add other form data...
    $headers = "From: webmaster@example.com"; // Add a valid sender email address

    mail($to, $subject, $message, $headers);

    // Display success message
    echo "Thank you for sharing the documents with us. Our team will verify the details and get back to you within 7 working days. FFIPL reserves the right to reject the warranty application if the registration terms & conditions are not met. Please refer to the product’s user manual for detailed warranty terms & conditions.";
} else {
    // Redirect if accessed directly
    header("./index.html");
    exit();
}
?>
