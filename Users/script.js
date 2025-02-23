// index page //

    // Toggle dropdown visibility when the profile button is clicked
document.getElementById("profileDropdown").addEventListener("click", function() {
  const menu = document.getElementById("profileMenu");
  menu.classList.toggle("hidden");
});

// Logout functionality
function logout() {
  const loadingOverlay = document.createElement("div");
  loadingOverlay.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "bg-gray-800", "bg-opacity-50", "flex", "justify-center", "items-center", "text-white", "text-2xl");
  loadingOverlay.innerHTML = "Logging out...";
  document.body.appendChild(loadingOverlay);

  // Simulate a delay for the logout process
  setTimeout(function() {
    window.location.href = "index.html";
  }, 2000);
}

    // Retrieve phone number from localStorage
    const userPhoneNumber = localStorage.getItem("mobileNumber");
    if (userPhoneNumber) {
        document.getElementById('phoneNumberDisplay').innerHTML = `<strong>${userPhoneNumber}</strong>`;
    }

    function toggleProfileEdit() {
      document.getElementById('profileEdit').classList.toggle('hidden');
    }

    function saveProfile() {
      const newEmail = document.getElementById('emailInput').value;
      const newPhone = document.getElementById('phoneInput').value;
      const newAltPhone = document.getElementById('altPhoneInput').value;

      if (newEmail) document.getElementById('emailDisplay').innerHTML = `<strong>${newEmail}</strong>`;
      if (newPhone) document.getElementById('phoneNumberDisplay').innerHTML = `<strong>${newPhone}</strong>`;
      if (newAltPhone) document.getElementById('altPhoneNumberDisplay').innerHTML = `<strong>${newAltPhone}</strong>`;

      document.getElementById('profileEdit').classList.add('hidden');

      localStorage.setItem("mobileNumber", newPhone);
      localStorage.setItem("altMobileNumber", newAltPhone);
    }

    function filterTransactions() {
      const searchTerm = document.getElementById('transactionSearch').value.toLowerCase();
      document.querySelectorAll('.transaction').forEach(transaction => {
        transaction.style.display = transaction.innerText.toLowerCase().includes(searchTerm) ? 'block' : 'none';
      });
    }

    document.getElementById("username").textContent = "Leo Dass"

    // // Data Usage Chart
    // new Chart(document.getElementById("dataUsageChart"), {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Used Data", "Remaining Data"],
    //     datasets: [{
    //       data: [1.2, 0.8], // Example data: 1.2GB used, 0.8GB remaining
    //       backgroundColor: ["#f87171", "#34d399"],
    //     }]
    //   }
    // });

    window.onload = function() {
    const userPhoneNumber = localStorage.getItem('mobileNumber');
    if (userPhoneNumber) {
        document.getElementById('phoneNumberDisplay').innerHTML = `<strong>${userPhoneNumber}</strong>`;
    }
};

const transactions = [
      { id: 1, amount: 349, date: "19-Feb-2025", month: "Feburary" },
      { id: 2, amount: 299, date: "10-Feb-2025", month: "February" },
      { id: 3, amount: 98, date: "28-Dec-2024", month: "December" },
      { id: 4, amount: 3599, date: "05-Feb-2024", month: "February" },
      { id: 5, amount: 799, date: "02-Mar-2025", month: "March" },
      { id: 6, amount: 1599, date: "15-Jan-2025", month: "January" },
      { id: 7, amount: 1299, date: "2025-Apr-10", month: "April" },
      { id: 8, amount: 449, date: "2025-Feb-25", month: "February" },
      { id: 9, amount: 1200, date: "2025-Mar-18", month: "March" },
      { id: 10, amount: 2550, date: "05-Jan-2025", month: "January" },
      { id: 11, amount: 950, date: "01-Apr-2025", month: "April" },
      { id: 12, amount: 1100, date: "15-Feb-2025", month: "February" },
      { id: 13, amount: 1200, date: "20-Nov-2024", month: "November" },
      { id: 14, amount: 2499, date: "12-Dec-2024", month: "December" },
      { id: 15, amount: 499, date: "03-Mar-2025", month: "March" },
      { id: 16, amount: 2899, date: "25-Jan-2025", month: "January" },
      { id: 17, amount: 1699, date: "20-Apr-2025", month: "April" },
      { id: 18, amount: 1199, date: "12-Oct-2024", month: "October" },
      { id: 19, amount: 549, date: "28-Feb-2025", month: "February" },
      { id: 20, amount: 1899, date: "10-Mar-2025", month: "March" },
    ];

// Function to render transactions dynamically
function renderTransactions(transactionsToShow) {
  const container = document.getElementById("transactionCards");
  container.innerHTML = "";

  transactionsToShow.forEach(transaction => {
    const card = document.createElement("div");
    card.classList.add("bg-gray-100", "p-4", "rounded-lg", "shadow-md", "flex", "justify-between", "items-center", "mb-4");

    card.innerHTML = `
      <div class="flex flex-col">
        <span class="text-gray-600 text-lg"><strong>₹${transaction.amount}</strong></span>
        <span class="text-gray-500 text-sm">${transaction.date}</span>
      </div>

    `;
    container.appendChild(card);
  });
}

// Filter transactions based on the selected month
document.getElementById("monthFilter").addEventListener("change", function() {
  const selectedMonth = this.value;
  if (selectedMonth === "all") {
    renderTransactions(transactions);
  } else {
    const filteredTransactions = transactions.filter(transaction => transaction.month === selectedMonth);
    renderTransactions(filteredTransactions);
  }
});

// Render all transactions initially
renderTransactions(transactions);


// plans page //

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
    planDiv.className = "p-4 bg-white rounded shadow flex justify-between items-center";
    planDiv.innerHTML = `
        <div>
            <p class="text-xl font-bold">₹ ${plan.price}</p>
            <p class="text-sm">${plan.data} | ${plan.validity}</p>
        </div>
        <button class="text-blue-500" onclick="showPopup('${plan.data}', '${plan.details}', '${plan.price}', '${plan.validity}')">
            <i class="fas fa-arrow-right"></i>
        </button>
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
    const priceFilter = document.getElementById("priceFilter").value
    let filteredPlans = allPlans

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
            return plan.price >= minPrice;
        }
    });
}

displayPlans(filteredPlans);
}

function toggleFilters() {
    const filtersContainer = document.getElementById("filtersContainer");
    filtersContainer.classList.toggle("hidden");
}

// Initialize the plans and display the default category
combineAllPlans();
displayPlans(plans[currentCategory])

function showPopup(planData, planDetails, price, validity) {
    const url = `payment.html?data=${encodeURIComponent(planData)}&details=${encodeURIComponent(planDetails)}&price=${encodeURIComponent(price)}&validity=${encodeURIComponent(validity)}`;
    window.location.href = url;
}


function closePopup() {
    // Hide the overlay and popup
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}
function enableChange() {
    const button = document.getElementById('changeButton');
    document.getElementById('changeInput').disabled = false;
    button.textContent = "Save";
    button.setAttribute('onclick', 'saveChange()');
}

function saveChange() {
    const button = document.getElementById('changeButton');
    document.getElementById('changeInput').disabled = true;
    button.textContent = "Change";
    button.setAttribute('onclick', 'enableChange()');
}
    function loadNumber() {
        let savedNumber = localStorage.getItem("mobileNumber");
        if (savedNumber) {
            document.getElementById("changeInput").value = savedNumber
        }
    }
    
window.onload = loadNumber;

// payment page //

    document.addEventListener("DOMContentLoaded", function () {
        const paymentOptions = document.querySelectorAll(".payment-option");
        const dropdowns = document.querySelectorAll(".dropdown");
        paymentOptions.forEach(option => {
            option.addEventListener("click", function () {

                // Remove active class from all buttons
                paymentOptions.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                dropdowns.forEach(dropdown => dropdown.style.display = "none");
                
                // Show selected dropdown
                let targetDropdown = document.getElementById(this.getAttribute("data-target"));
                if (targetDropdown) {
                    targetDropdown.style.display = "block";
                }
            });
        });

        function getQueryParam(name) {
            const params = new URLSearchParams(window.location.search);
            return params.get(name) || "N/A";
        }

        const price = getQueryParam("price");
        const validity = getQueryParam("validity");
        document.getElementById("planData").innerText = getQueryParam("data");
        document.getElementById("validity").innerText = validity
        document.getElementById("planPrice").innerText = "₹ " + price;
        document.getElementById("totalAmountPayable").innerText = "₹ " + price;
    });
        function goBack() {
    window.location.href = "plans.html";
}

function redirectToBank(bankName) {
        let bankURLs = {
            'HDFC': 'https://www.hdfcbank.com',
            'SBI': 'https://sbi.co.in',
            'ICICI': 'https://www.icicibank.com',
            'Axis': 'https://www.axisbank.com',
            'PNB': 'https://www.pnbindia.in',
            'Canara': 'https://www.canarabank.in',
            'Union': 'https://www.unionbankofindia.co.in',
            'Yes': 'https://www.yesbank.in'
        };

        if (bankURLs[bankName]) {
            window.location.href = bankURLs[bankName];
        } else {
            alert("Invalid Bank Selection");
        }
    }

    window.onload = function() {
    const storedNumber = localStorage.getItem('mobileNumber');
    if (storedNumber) {
        document.getElementById('displayMobileNumber').textContent = storedNumber;
    }
}

// Login page //

document.getElementById("sendOtpBtn").addEventListener("click", function () {
    let mobileNumber = document.getElementById("mobileNumber");
    let mobileError = document.getElementById("mobileError");

if (/^\d{10}$/.test(mobileNumber.value)) {
    // Valid number, proceed to OTP input
    mobileNumber.classList.remove("error");
    mobileError.classList.add("hidden");
    document.getElementById("mobileInputSection").classList.add("hidden");
    document.getElementById("otpInputSection").classList.remove("hidden");
} else {
    // Invalid number, show error message
    mobileNumber.classList.add("error");
    mobileError.classList.remove("hidden");
}
});

document.getElementById("verifyOtpBtn").addEventListener("click", function () {
    let otp = document.getElementById("otp").value;
    if (otp) {
        window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
        alert("Please enter a valid OTP.");
    }
});

// dashboard page //

  // Sample data for the pie chart -->
  const ctx = document.getElementById('dataUsageChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Used Data', 'Remaining Data'],
      datasets: [{
        data: [0.8, 1.2],
        backgroundColor: ['#f87171', '#34d399'],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%'
    }
  });