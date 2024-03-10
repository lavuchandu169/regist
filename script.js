function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // In a real application, you would send this data to a server for processing and storage.
    // For simplicity, we'll just display a message here.

    var message = "User registered successfully! An email has been sent to " + email + ".";
    document.getElementById("message").innerText = message;
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}
