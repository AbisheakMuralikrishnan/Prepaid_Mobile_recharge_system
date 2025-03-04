let currentCategory = 'popular';
let allPlans = [];

const plans = {
popular: [
{ price: 299, data: "1.5 GB/day", validity: "28 days", details: "1.5 GB of data per day for 28 days." },
{ price: 1029, data: "2 GB/day + OTT", validity: "84 days", details: "2 GB of data per day + access to OTT platforms for 84 days." },
{ price: 749, data: "1.5 GB/day + 20 GB", validity: "72 days", details: "1.5 GB of data per day + 20 GB additional data for 72 days." },
{ price: 599, data: "1 GB/day + 10 GB", validity: "56 days", details: "1 GB of data per day + 10 GB additional data for 56 days." },
{ price: 499, data: "2 GB/day", validity: "28 days", details: "2 GB of data per day for 28 days." }
],
recommended: [
{ price: 499, data: "3 GB/day + OTT", validity: "56 days", details: "3 GB of data per day + access to OTT platforms for 56 days." },
{ price: 999, data: "Unlimited Data + Netflix", validity: "90 days", details: "Unlimited data with Netflix subscription for 90 days." },
{ price: 3599, data: "2.5 GB/day", validity: "365 days", details: "2.5 GB of data per day for 365 days." },
{ price: 1999, data: "1.5 GB/day + Free Calls", validity: "30 days", details: "1.5 GB of data per day + unlimited free calls for 30 days." },
{ price: 799, data: "2 GB/day + Free Netflix", validity: "60 days", details: "2 GB of data per day + Netflix subscription for 60 days." }
],
unlimited: [
{ price: 399, data: "Unlimited Calls + 1.5GB/day", validity: "28 days", details: "Unlimited calls and 1.5 GB of data per day for 28 days." },
{ price: 799, data: "Unlimited Calls + 2GB/day", validity: "84 days", details: "Unlimited calls and 2 GB of data per day for 84 days." },
{ price: 1499, data: "Unlimited Calls + 4GB/day", validity: "30 days", details: "Unlimited calls and 4 GB of data per day for 30 days." },
{ price: 1299, data: "Unlimited Calls + 5GB/day", validity: "60 days", details: "Unlimited calls and 5 GB of data per day for 60 days." }
],
data: [
{ price: 49, data: "1GB", validity: "24 hours", details: "1 GB of data valid for 24 hours." },
{ price: 98, data: "2GB", validity: "48 hours", details: "2 GB of data valid for 48 hours." },
{ price: 199, data: "3GB", validity: "72 hours", details: "3 GB of data valid for 72 hours." },
{ price: 349, data: "5GB", validity: "96 hours", details: "5 GB of data valid for 96 hours." }
],
longValidity: [
{ price: 999, data: "Unlimited Data + Netflix", validity: "90 days", details: "Unlimited data with Netflix subscription for 90 days." },
{ price: 3599, data: "2.5 GB/day", validity: "365 days", details: "2.5 GB of data per day for 365 days." },
{ price: 2499, data: "3 GB/day + OTT", validity: "180 days", details: "3 GB of data per day + access to OTT platforms for 180 days." },
{ price: 1999, data: "Unlimited Data", validity: "180 days", details: "Unlimited data for 180 days." }
],
savers: [
{ price: 199, data: "1.5GB/day", validity: "24 days", details: "1.5 GB of data per day for 24 days." },
{ price: 599, data: "2.5GB/day", validity: "60 days", details: "2.5 GB of data per day for 60 days." },
{ price: 299, data: "1GB/day", validity: "28 days", details: "1 GB of data per day for 28 days." },
{ price: 799, data: "3GB/day", validity: "60 days", details: "3 GB of data per day for 60 days." }
],
entertainment: [
{ price: 349, data: "2GB/day + Amazon Prime", validity: "28 days", details: "2 GB of data per day + Amazon Prime subscription for 28 days." },
{ price: 799, data: "4GB/day + Netflix", validity: "30 days", details: "4 GB of data per day + Netflix subscription for 30 days." },
{ price: 999, data: "2GB/day + Disney+", validity: "60 days", details: "2 GB of data per day + Disney+ subscription for 60 days." },
{ price: 1299, data: "3GB/day + Netflix + Amazon Prime", validity: "60 days", details: "3 GB of data per day + Netflix & Amazon Prime subscriptions for 60 days." }
],
talktime: [
{ price: 10, data: "Talktime ₹7.47", validity: "Unlimited", details: "Talktime of ₹7.47 valid for unlimited duration." },
{ price: 50, data: "Talktime ₹35.50", validity: "Unlimited", details: "Talktime of ₹35.50 valid for unlimited duration." },
{ price: 100, data: "Talktime ₹75", validity: "Unlimited", details: "Talktime of ₹75 valid for unlimited duration." }
],
roaming: [
{ price: 1499, data: "Unlimited Calls + 3GB/day", validity: "10 days", details: "Unlimited calls and 3 GB of data per day for 10 days." },
{ price: 1799, data: "Unlimited Calls + 2GB/day", validity: "14 days", details: "Unlimited calls and 2 GB of data per day for 14 days." },
{ price: 1999, data: "Unlimited Calls + 5GB/day", validity: "7 days", details: "Unlimited calls and 5 GB of data per day for 7 days." }
],
flight: [
{ price: 579, data: "In-Flight Calls & 1GB Data", validity: "24 hours", details: "In-flight calls and 1GB data valid for 24 hours." },
{ price: 799, data: "In-Flight Calls & 2GB Data", validity: "48 hours", details: "In-flight calls and 2GB data valid for 48 hours." },
{ price: 1299, data: "In-Flight Calls & 5GB Data", validity: "72 hours", details: "In-flight calls and 5GB data valid for 72 hours." }
]
};

// Combine all plans into a single array for filtering
// Initialize the plans and display the default category
combineAllPlans();
displayPlans(plans[currentCategory]);

// Call the function when the page loads
function combineAllPlans() {
allPlans = [];
for (const category in plans) {
allPlans = allPlans.concat(plans[category]);
}
}
function changeTab(category, element) {
currentCategory = category;
document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
element.classList.add("active");
displayPlans(plans[category] || []);
}

function displayPlans(filteredPlans) {
const container = document.getElementById("plans-container");
container.innerHTML = "";

filteredPlans.forEach(plan => {
const planDiv = document.createElement("div");
planDiv.className = "plan-card";

planDiv.innerHTML = `
<div class="d-flex justify-content-between align-items-center">
<div>
<p class="price mb-1">₹ ${plan.price}</p>
<p class="data mb-0">${plan.data} | ${plan.validity}</p>
</div>
<button class="view-button" onclick="showPopup('${plan.data}', '${plan.details}', '${plan.price}', '${plan.validity}')">
<i class="fas fa-arrow-right"></i>
</button>
</div>
<hr class="my-3">
`;

container.appendChild(planDiv);
});
}

function searchPlans() {
const input = document.getElementById("searchInput").value.toLowerCase();
const filteredPlans = allPlans.filter(plan =>
plan.data.toLowerCase().includes(input) ||
plan.price.toString().includes(input)
);
displayPlans(filteredPlans);
}

function filterPlans() {
const dataFilter = document.getElementById("dataFilter").value;
const priceFilter = document.getElementById("priceFilter").value;
const validityCheckboxes = document.querySelectorAll(".filter-checkbox[value]:checked");
const featureCheckboxes = document.querySelectorAll(".filter-checkbox[value]:checked");

let filteredPlans = allPlans;

// Filter by data
if (dataFilter) {
filteredPlans = filteredPlans.filter(plan => plan.data.includes(dataFilter));
}

// Filter by price
if (priceFilter) {
const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
filteredPlans = filteredPlans.filter(plan => {
if (maxPrice) {
return plan.price >= minPrice && plan.price <= maxPrice;
} else {
return plan.price >= minPrice; // For "2000+" option
}
});
}

// Filter by validity
if (validityCheckboxes.length > 0) {
const selectedValidities = Array.from(validityCheckboxes).map(cb => parseInt(cb.value));
filteredPlans = filteredPlans.filter(plan => {
const planValidity = parseInt(plan.validity);
return selectedValidities.includes(planValidity);
});
}

// Filter by features
if (featureCheckboxes.length > 0) {
const selectedFeatures = Array.from(featureCheckboxes).map(cb => cb.value);
filteredPlans = filteredPlans.filter(plan => {
return selectedFeatures.some(feature => plan.details.includes(feature));
});
}

displayPlans(filteredPlans);
}

function clearFilters() {
// Reset all filter inputs
document.getElementById("dataFilter").value = "";
document.getElementById("priceFilter").value = "";
document.querySelectorAll(".filter-checkbox").forEach(cb => cb.checked = false);

// Display all plans
displayPlans(allPlans);
}

function toggleFilters() {
const filtersContainer = document.getElementById("filtersContainer");
const filterIcon = document.getElementById("filterIcon");

filtersContainer.classList.toggle("d-none");
// Rotate the icon for visual feedback
if (filtersContainer.classList.contains("d-none")) {
filterIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
} else {
filterIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
}
}
function clearFilters() {
// Clear the dropdown values
document.getElementById("dataFilter").value = "";
document.getElementById("priceFilter").value = "";

// Reset the filter and display all plans
filterPlans();
}

// Initialize the plans and display the default category
combineAllPlans();
displayPlans(plans[currentCategory]);

function showPopup(planData, planDetails, price, validity) {
// Encode the plan details as URL parameters
const url = `payment.html?data=${encodeURIComponent(planData)}&details=${encodeURIComponent(planDetails)}&price=${encodeURIComponent(price)}&validity=${encodeURIComponent(validity)}`;

// Redirect to the payment page
window.location.href = url;
}

function closePopup() {
// Hide the overlay and popup
document.getElementById("overlay").style.display = "none";
document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
loadNumber();
});

function enableChange() {
const button = document.getElementById('changeButton');
const inputField = document.getElementById('changeInput');

inputField.disabled = false;
inputField.focus();
button.innerHTML = '<i class="fas fa-save"></i>';
button.setAttribute('onclick', 'saveChange()');
}

function saveChange() {
const button = document.getElementById('changeButton');
const inputField = document.getElementById('changeInput');

let newNumber = inputField.value.trim();

// Validate the phone number
if (!/^\+?[0-9]{10,13}$/.test(newNumber)) {
alert("Please enter a valid phone number (10-13 digits).");
inputField.focus();
return;
}

localStorage.setItem("mobileNumber", newNumber);
inputField.disabled = true;
button.innerHTML = '<i class="fas fa-pencil-alt"></i>';
button.setAttribute('onclick', 'enableChange()');
}

function loadNumber() {
let savedNumber = localStorage.getItem("mobileNumber");
if (savedNumber) {
document.getElementById("changeInput").value = savedNumber;
}
}

// Call the function when the page loads
window.onload = function() {
loadNumber();
combineAllPlans();
displayPlans(plans[currentCategory]);
};
