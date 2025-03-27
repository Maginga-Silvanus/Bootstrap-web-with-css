<?php
$to = "silvamanguye@gmail.com";  // Replace with recipient's email
$subject = "Test HTML Email";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: ZetechUniversity.org" . "\r\n"; // Replace with sender's email

$message = "
<html>
<head>
    <title>HTML Email</title>
</head>
<body>
    <h2 style='color: blue;'>Hello, this is a test email!</h2>
    <p>This email is a spoofing email.</p>
    <a href='https://example.com'>Visit Our Website</a>
</body>
</html>
";

if(mail($to, $subject, $message, $headers)){
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>
