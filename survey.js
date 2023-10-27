function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(checkbox => checkbox.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const resultPopup = document.getElementById("resultPopup");
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    resultPopup.style.display = "block";
    return false;
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    const resultPopup = document.getElementById("resultPopup");
    resultPopup.style.display = "none";
    resetForm();
}