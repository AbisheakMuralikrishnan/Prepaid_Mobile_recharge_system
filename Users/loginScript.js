// Global variables
let generatedOtp = "";

// DOM Elements
const mobileNumberInput = document.getElementById("mobileNumber");
const mobileError = document.getElementById("mobileError");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const mobileInputSection = document.getElementById("mobileInputSection");
const otpInputSection = document.getElementById("otpInputSection");
const otpInputs = document.querySelectorAll(".otp-input");
const otpError = document.getElementById("otpError");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const resendOtpBtn = document.getElementById("resendOtpBtn");
const otpPopup = document.getElementById("otpPopup");
const otpPopupMessage = document.getElementById("otpPopupMessage");

// Restrict input to 10 digits and block non-numeric characters
mobileNumberInput.addEventListener("input", function () {
    // Remove non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, "");

    // Limit to 10 digits
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

// Prevent non-numeric input
mobileNumberInput.addEventListener("keydown", function (event) {
    // Allow only numeric keys, backspace, delete, and arrow keys
    if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(event.key)) {
        event.preventDefault();
    }
});

// Validate mobile number format
function isValidMobileNumber(number) {
    return /^\d{10}$/.test(number);
}

// Generate a 4-digit OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Show mobile section
function showMobileSection() {
    otpInputSection.classList.add("d-none");
    mobileInputSection.classList.remove("d-none");
    mobileNumberInput.focus();
}

// Show OTP section
function showOtpSection() {
    mobileInputSection.classList.add("d-none");
    otpInputSection.classList.remove("d-none");
    otpInputs[0].focus();
    // Clear previous OTP inputs
    otpInputs.forEach(input => input.value = "");
    otpError.classList.add("d-none");
}

// Show OTP popup
function showOtpPopup(otp) {
    otpPopupMessage.textContent = otp;
    otpPopup.classList.remove("d-none");

    // Hide the popup after 5 seconds
    setTimeout(() => {
        otpPopup.classList.add("d-none");
    }, 5000);
}

// Send OTP button click handler
sendOtpBtn.addEventListener("click", function () {
    let mobileNumber = mobileNumberInput.value.trim();

    if (isValidMobileNumber(mobileNumber)) {
        mobileError.classList.add("d-none");

        // Generate a random 4-digit OTP
        generatedOtp = generateOTP();

        // Show OTP in the popup
        showOtpPopup(generatedOtp);

        // Show OTP section
        showOtpSection();
    } else {
        mobileError.classList.remove("d-none");
        mobileNumberInput.focus();
    }
});

// OTP input handling - auto-advance & backspace
otpInputs.forEach((input, index, inputs) => {
    // Auto-advance to next input
    input.addEventListener("input", function() {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, "");
        
        if (this.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Handle backspace
    input.addEventListener("keydown", function(event) {
        if (event.key === "Backspace" && index > 0 && this.value === "") {
            inputs[index - 1].focus();
        }
    });

    // Handle paste event for OTP
    input.addEventListener("paste", function(event) {
        event.preventDefault();
        const pastedData = (event.clipboardData || window.clipboardData).getData("text");
        if (/^\d+$/.test(pastedData) && pastedData.length === inputs.length) {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = pastedData.charAt(i);
            }
            // Focus the last input after pasting
            inputs[inputs.length - 1].focus();
        }
    });
});

// Verify OTP button click handler
verifyOtpBtn.addEventListener("click", function() {
    // Combine the 4 OTP inputs into a single string
    let enteredOtp = Array.from(otpInputs)
                   .map(input => input.value)
                   .join("");

    // Verify the OTP
    if (enteredOtp === generatedOtp) {
        // Redirect on successful login
        window.location.href = "dashboard.html";
    } else {
        otpError.classList.remove("d-none");
        // Clear the inputs for retry
        otpInputs.forEach(input => input.value = "");
        otpInputs[0].focus();
    }
});

resendOtpBtn.addEventListener("click", function() {
    generatedOtp = generateOTP(); // Generate a new OTP
    showOtpSection();  // Show the OTP section
    showOtpPopup(generatedOtp); // Display the OTP popup

    // Clear previous OTP inputs
    otpInputs.forEach(input => input.value = "");
    otpError.classList.add("d-none");
    otpInputs[0].focus();
});

// Function to show OTP section
function showOtpSection() {
    mobileInputSection.classList.add("d-none");
    otpInputSection.classList.remove("d-none");
    otpInputs[0].focus();

    // Clear previous OTP inputs
    otpInputs.forEach(input => input.value = "");
    otpError.classList.add("d-none");
}

// Function to show OTP popup
function showOtpPopup(otp) {
    otpPopupMessage.textContent = otp;
    otpPopup.classList.remove("d-none");

    // Hide the popup after 5 seconds
    setTimeout(() => {
        otpPopup.classList.add("d-none");
    }, 7000);
}


// Initial focus
window.addEventListener("DOMContentLoaded", function() {
    mobileNumberInput.focus();
});

document.getElementById("editMobileBtn").addEventListener("click", function() {
    // Show the mobile input section
    mobileInputSection.classList.remove("d-none");

    // Hide the OTP input section
    otpInputSection.classList.add("d-none");

    // Clear previous OTP inputs
    otpInputs.forEach(input => input.value = "");
    otpError.classList.add("d-none");

    // Focus back on the mobile number input field
    mobileInput.focus();
});

document.getElementById("mobileInput").addEventListener("input", function() {
    let mobileNumber = this.value;

    // Format the number as "+91 XXXXX XXXXX"
    if (mobileNumber.length === 10) {
        let formattedNumber = `+91 ${mobileNumber.substring(0, 5)} ${mobileNumber.substring(5, 10)}`;
        document.getElementById("displayMobile").textContent = formattedNumber;
    } else {
        document.getElementById("displayMobile").textContent = "+91 XXXXX XXXXX"; // Default text
    }
});

document.getElementById("sendOtpBtn").addEventListener("click", function() {
    let mobileNumber = document.getElementById("mobileInput").value;

    if (mobileNumber.length === 10) {
        document.getElementById("mobileInputSection").classList.add("d-none");
        document.getElementById("otpInputSection").classList.remove("d-none");
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
});

document.getElementById("editMobileBtn").addEventListener("click", function() {
    document.getElementById("otpInputSection").classList.add("d-none");
    document.getElementById("mobileInputSection").classList.remove("d-none");
});