document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstnameRegex = /^[a-zA-Z'-]{3,16}$/;
    const lastnameRegex = /^[a-zA-Z'-]{3,16}$/;
    const emailRegex = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,40}$/;
    const phoneRegex = /^00\s?962\s?\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    const bioRegex = /^[a-z\s.,!?()-]{8,50}$/;

    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('first-Error');   

    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('last-Error');

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-Error');

    const password = document.getElementById('pass').value;
    const passwordError = document.getElementById('password-Error');

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phone-Error');

    const bio = document.getElementById('bio').value;
    const bioError = document.getElementById('bio-Error');

    let isValid = true;
    const errors = [];

    if (!firstnameRegex.test(firstName)) {
        errors.push("First Name must be alphanumeric and contain 3-16 characters");
        firstNameError.innerText = "First Name must be alphanumeric and contain 3-16 characters";
        isValid = false;
    } else {
        firstNameError.innerText = "";
    }

    if (!lastnameRegex.test(lastName)) {
        errors.push("Last Name must be alphanumeric and contain 3-16 characters");
        lastNameError.innerText = "Last Name must be alphanumeric and contain 3-16 characters";
        isValid = false;
    } else {
        lastNameError.innerText = "";
    }

    if (!emailRegex.test(email)) {
        errors.push("Email must be a valid address, e.g. example@example.com");
        emailError.innerText = "Email must be a valid address, e.g. example@example.com";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    if (!passwordRegex.test(password)) {
        errors.push("Password must be alphanumeric and strong (A-z and numbers are also allowed) and between 8-20 characters");
        passwordError.innerText = "Password must be alphanumeric and strong (A-z and numbers are also allowed) and between 8-20 characters";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    if (!phoneRegex.test(phone)) {
        errors.push("A Valid Telephone numbers (14 digits and start with 00 962)");
        phoneError.innerText = "A Valid Telephone numbers (14 digits and start with 00 962)";
        isValid = false;
    } else {
        phoneError.innerText = "";
    }

    if (!bioRegex.test(bio)) {
        errors.push("Bio must contain only lowercase letters, underscore, hyphens and be 8-50 characters");
        bioError.innerText = "Bio must contain only lowercase letters, underscore, hyphens and be 8-50 characters";
        isValid = false;
    } else {
        bioError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully');
    }
});
