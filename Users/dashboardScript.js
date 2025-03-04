function navigateToPlans(sectionId) {
    window.location.href = 'plans.html#' + sectionId;
  }

function navigateToSection(sectionId) {
    window.location.href = 'index.html#' + sectionId;
  }

  function navigateToInvoice() {
  document.getElementById("invoice").scrollIntoView({ behavior: "smooth" });
}



      // Toggle dropdown visibility when the profile button is clicked
      document.getElementById("profileDropdown").addEventListener("click", function() {
        const menu = document.getElementById("profileMenu");
        menu.classList.toggle("d-none");
      });

      // Logout functionality
      function logout() {
        const loadingOverlay = document.createElement("div");
        loadingOverlay.classList.add("position-fixed", "top-0", "start-0", "w-100", "h-100", "bg-dark", "bg-opacity-50", "d-flex", "justify-content-center", "align-items-center", "text-white", "fs-4");
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
        document.getElementById('profileEdit').classList.toggle('d-none');
      }

      // Function to open modal and load existing data
document.getElementById("profileEditModal").addEventListener("show.bs.modal", function () {
    document.getElementById("emailInput").value = document.getElementById("emailDisplay").textContent.trim();
    document.getElementById("phoneInput").value = document.getElementById("phoneNumberDisplay").textContent.trim();
    document.getElementById("altPhoneInput").value = document.getElementById("altPhoneNumberDisplay").textContent.trim();
});

// Function to save profile updates
function saveProfile() {
    const newEmail = document.getElementById('emailInput').value.trim();
    const newPhone = document.getElementById('phoneInput').value.trim();
    const newAltPhone = document.getElementById('altPhoneInput').value.trim();

    if (newEmail) {
        document.getElementById('emailDisplay').innerHTML = `<strong>${newEmail}</strong>`;
        localStorage.setItem("userEmail", newEmail);
    }
    if (newPhone) {
        document.getElementById('phoneNumberDisplay').innerHTML = `<strong>${newPhone}</strong>`;
        localStorage.setItem("mobileNumber", newPhone);
    }
    if (newAltPhone) {
        document.getElementById('altPhoneNumberDisplay').innerHTML = `<strong>${newAltPhone}</strong>`;
        localStorage.setItem("altMobileNumber", newAltPhone);
    }
}

// Load data from localStorage on page load
window.onload = function () {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPhone = localStorage.getItem("mobileNumber");
    const storedAltPhone = localStorage.getItem("altMobileNumber");

    if (storedEmail) document.getElementById('emailDisplay').innerHTML = `<strong>${storedEmail}</strong>`;
    if (storedPhone) document.getElementById('phoneNumberDisplay').innerHTML = `<strong>${storedPhone}</strong>`;
    if (storedAltPhone) document.getElementById('altPhoneNumberDisplay').innerHTML = `<strong>${storedAltPhone}</strong>`;
};

document.getElementById("profileEditModal").addEventListener("shown.bs.modal", function () {
    document.getElementById("emailInput").focus();
});


      document.getElementById("username").textContent = "Leo Dass"

// Data Usage Chart
const ctx = document.getElementById('dataUsageChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Used Data', 'Remaining Data'],
        datasets: [{
            data: [0.8, 1.2], // Adjusted for 3GB total
            backgroundColor: ['#7ec8e3', '#b3e0dc'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // Adjust the cutout for a better look
        plugins: {
            legend: {
                display: true,
                position: 'right', // Moves legend to the right
                labels: {
                    boxWidth: 15, // Adjust the box size for better readability
                    padding: 10,
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

// Line Chart: Monthly Data Usage
const ctx1 = document.getElementById('MonthlyDataUsageChart').getContext('2d');

const data = {
    labels: ["1", "5", "10", "15", "20", "25", "30"], // Days of the month
    datasets: [{
        label: 'Data Usage (GB)',
        data: [1.5, 2.0, 2.8, 3.5, 3.0, 4.2, 3.8], // Data usage values
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#4CAF50',
        pointRadius: 5,
        tension: 0.3
    }]
};

new Chart(ctx1, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Day of the Month",
                    color: "#333",
                    font: { size: 14, weight: "bold" }
                },
                ticks: { color: "#333" }, // Darker text for visibility
                grid: { color: "rgba(0, 0, 0, 0.1)" } // Light gray grid
            },
            y: {
                title: {
                    display: true,
                    text: "Data Usage (GB)",
                    color: "#333",
                    font: { size: 14, weight: "bold" }
                },
                ticks: { color: "#333" }, // Darker text for visibility
                grid: { color: "rgba(0, 0, 0, 0.1)" } // Light gray grid
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "#333", // Legend text color changed to black
                    font: { size: 14 }
                }
            }
        }
    }
});

// Transactions data
const transactions = [
      { id: 1, amount: 349, date: "19-Feb-2025", time: "14:35", month: "February", paymentmode: "Credit Card" },
      { id: 2, amount: 299, date: "10-Feb-2025", time: "09:12", month: "February", paymentmode: "UPI" },
      { id: 3, amount: 98, date: "28-Dec-2024", time: "16:50", month: "December", paymentmode: "Debit Card" },
      { id: 4, amount: 3599, date: "05-Feb-2024", time: "11:20", month: "February", paymentmode: "Net Banking" },
      { id: 5, amount: 799, date: "02-Mar-2025", time: "08:45", month: "March", paymentmode: "Wallet" },
      { id: 6, amount: 1599, date: "15-Jan-2025", time: "13:10", month: "January", paymentmode: "Credit Card" },
      { id: 7, amount: 1299, date: "10-Apr-2025", time: "18:05", month: "April", paymentmode: "UPI" },
      { id: 8, amount: 449, date: "25-Feb-2025", time: "20:30", month: "February", paymentmode: "Debit Card" },
      { id: 9, amount: 1200, date: "18-Mar-2025", time: "10:15", month: "March", paymentmode: "Net Banking" },
      { id: 10, amount: 2550, date: "05-Jan-2025", time: "12:55", month: "January", paymentmode: "UPI" },
      { id: 11, amount: 950, date: "01-Apr-2025", time: "07:25", month: "April", paymentmode: "Wallet" },
      { id: 12, amount: 1100, date: "15-Feb-2025", time: "21:40", month: "February", paymentmode: "Credit Card" },
      { id: 13, amount: 1200, date: "20-Nov-2024", time: "14:00", month: "November", paymentmode: "Net Banking" },
      { id: 14, amount: 2499, date: "12-Dec-2024", time: "16:30", month: "December", paymentmode: "Debit Card" },
      { id: 15, amount: 499, date: "03-Mar-2025", time: "09:50", month: "March", paymentmode: "UPI" },
      { id: 16, amount: 2899, date: "25-Jan-2025", time: "19:15", month: "January", paymentmode: "Credit Card" },
      { id: 17, amount: 1699, date: "20-Apr-2025", time: "11:05", month: "April", paymentmode: "Wallet" },
      { id: 18, amount: 1199, date: "12-Oct-2024", time: "15:20", month: "October", paymentmode: "Net Banking" },
      { id: 19, amount: 549, date: "28-Feb-2025", time: "17:45", month: "February", paymentmode: "Debit Card" },
      { id: 20, amount: 1899, date: "10-Mar-2025", time: "22:10", month: "March", paymentmode: "UPI" },
    ];
      // Function to render transactions dynamically
      function renderTransactions(transactionsToShow) {
        const container = document.getElementById("transactionCards");
        container.innerHTML = "";

        transactionsToShow.forEach(transaction => {
          const card = document.createElement("div");
          card.classList.add("bg-light", "p-4", "rounded", "shadow-sm", "d-flex", "justify-content-between", "align-items-center", "mb-3");

          card.innerHTML = `
            <div class="d-flex flex-column">
              <span class="text-secondary fs-5"><strong>₹${transaction.amount}</strong></span>
              <span class="text-secondary fs-6">${transaction.date}</span>
            </div>
            <div class="d-flex gap-2">
              <!-- View Button -->
              <button onclick="viewTransaction(${transaction.amount}, '${transaction.date}', '${transaction.time}', '${transaction.paymentmode}')" class="btn btn-info">
                <i class="fas fa-eye"></i> <!-- View Icon -->
              </button>
              <!-- Download Button -->
              <button onclick="generateInvoice(${transaction.amount}, '${transaction.date}', '${transaction.time}', '${transaction.paymentmode}')" class="btn btn-primary">
                <i class="fas fa-download"></i> <!-- Download Icon -->
              </button>
            </div>
          `;
          container.appendChild(card);
        });
      }

     // Function to view transaction details
     function viewTransaction(amount, date, time, paymentmode) {
      // Accessing modal elements
      document.getElementById("amount").textContent = amount;
      document.getElementById("transactionDate").textContent = "Date: " + date;
      document.getElementById("transactionTime").textContent = "Time: " + time;
      document.getElementById("paymentMode").textContent = "Payment Mode: " + paymentmode;

      // Display the modal
      document.getElementById("transactionModal").style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
      document.getElementById("transactionModal").style.display = "none";
    }

    // Initial render of transactions
  renderTransactions(transactions);

// Function to filter transactions by month
document.getElementById("monthFilter").addEventListener("change", function () {
  const selectedMonth = this.value;
  const filteredTransactions =
    selectedMonth === "all"
      ? transactions
      : transactions.filter((t) => t.month === selectedMonth);

  renderTransactions(filteredTransactions);
});

function generateInvoice(amount, date, time, paymentmode) {
    const docDefinition = {
        content: [
            { text: "INVOICE", style: "header" },
            { text: "MobiCom", style: "subheader" },
            { text: "123 Example Street, Tech City, India", style: "address" },
            { text: "\nBill To:", style: "subheader" },
            { text: "Leo Das", style: "customerName" },
            { text: "6381879353", style: "customerPhone" },
            { text: "456 Example Street, Techno City, India", style: "address" },
            { text: `Invoice Date: ${new Date().toLocaleDateString()}`, style: "date" },

            { text: "\nTransaction Details", style: "sectionHeader" },
            {
                table: {
                    widths: ["*", "*"],
                    body: [
                        [{ text: "Date", bold: true }, { text: date }],
                        [{ text: "Time", bold: true }, { text: time }],
                        [{ text: "Amount", bold: true }, { text: `Rs ${amount}`, color: "blue", bold: true }],
                        [{ text: "Payment Mode", bold: true }, { text: paymentmode }]
                    ]
                },
                layout: "lightHorizontalLines"
            },

            { text: "\nThank you for your payment!", style: "footer" }
        ],
        styles: {
            header: { fontSize: 22, bold: true, alignment: "center", color: "black" },
            subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
            address: { fontSize: 12, margin: [0, 0, 0, 10] },
            date: { fontSize: 12, italics: true, margin: [0, 0, 0, 10] },
            sectionHeader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
            customerName: { fontSize: 14, bold: true, margin: [0, 5, 0, 0] },
            customerPhone: { fontSize: 12, margin: [0, 0, 0, 10] },
            footer: { fontSize: 12, alignment: "center", margin: [0, 20, 0, 0], italics: true }
        }
    };

    pdfMake.createPdf(docDefinition).download(`Invoice_${date}.pdf`);
}


// Function to generate a full invoice with all transactions
        function generateFullInvoice() {
            const tableBody = [
                [
                    { text: "Date", bold: true },
                    { text: "Amount", bold: true },
                    { text: "Time", bold: true },
                    { text: "Payment Mode", bold: true }
                ],

                ...transactions.map(t => [t.date, `Rs ${t.amount}`, t.time, t.paymentmode])
            ];

            const docDefinition = {
                content: [
                    { text: "INVOICE", style: "header" },
                    { text: "MobiCom", style: "subheader" },
                    { text: "123 Example Street, Tech City, India", style: "address" },
                    { text: "\nBill To:", style: "subheader" },
                    { text: "Leo Das", style: "customerName" },
                    { text: "6381879353", style: "customerPhone" },
                    { text: "456 Example Street, Techno City, India", style: "address" },
                    { text: `Date: ${new Date().toLocaleDateString()}`, style: "date" },

                    { text: "\nInvoice Summary", style: "sectionHeader" },
                    {
                        table: {
                            widths: ["*", "*"],
                            body: [["Lifetime Total Amount", { text: "Rs 26,784", bold: true, color: "blue" }]],
                        },
                        layout: "lightHorizontalLines",
                    },

                    { text: "\nTransaction Details", style: "sectionHeader" },
                    {
                        table: {
                            headerRows: 1,
                            widths: ["*", "*", "*", "*"],
                            body: tableBody,
                        },
                        layout: "lightHorizontalLines",
                    },
                    { text: "\nThank you for your payment!", style: "footer" }
                ],
                
                styles: {
                    header: { fontSize: 22, bold: true, alignment: "center", color: "black" },
                    subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
                    address: { fontSize: 12, margin: [0, 0, 0, 10] },
                    date: { fontSize: 12, italics: true, margin: [0, 0, 0, 10] },
                    sectionHeader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
                    footer: { fontSize: 12, alignment: "center", margin: [0, 20, 0, 0], italics: true }
                },
            };

            pdfMake.createPdf(docDefinition).download("Full_Invoice.pdf");
        }

    function populateTransactionTable() {
    const table = document.getElementById("transactionTable");
    transactions.forEach((t, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${t.date}</td>
            <td>₹${t.amount}</td>
            <td>${t.time}</td>
            <td>${t.paymentmode}</td>
            <td>
                <button class="btn btn-primary btn-sm download-btn" data-index="${index}">
                    📥
                </button>
            </td>
        `;

        table.appendChild(row);
    });

    // Attach click event to all transaction download buttons
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            generateIndividualInvoice(transactions[index]);
        });
    });
}

        // Attach event listener for full invoice button
        document.getElementById("btnDownloadAll").addEventListener("click", generateFullInvoice);

        // Populate the transaction table on page load
        document.addEventListener("DOMContentLoaded", populateTransactionTable);

      // Filter transactions based on the selected month
      document.getElementById("monthFilter").addEventListener("change", function() {
  const selectedMonth = this.value;
  const filteredTransactions = selectedMonth === "all"
    ? transactions
    : transactions.filter(transaction => transaction.month === selectedMonth);
  
  renderTransactions(filteredTransactions);
});

// Initial render of all transactions
renderTransactions(transactions);
