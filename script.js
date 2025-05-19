var typed = new Typed(".text",{
    strings:["Frontend- developer","Software Developer" , "Mern- Stack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}) ;
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "";

    // Basic validation
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.className = "error";
        return false;
    }

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return false;
    }

    // Simulate form submission
    formMessage.textContent = "Message sent successfully!";
    formMessage.className = "success";

    // Clear form after submission
    document.getElementById("contactForm").reset();
    
    return false;  // Prevent form from actually submitting
}