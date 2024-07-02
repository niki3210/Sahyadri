// dashboard.js

document.addEventListener("DOMContentLoaded", function() {
    // Simulating data update
    setInterval(function() {
        updateSalesData();
    }, 5000); // Update every 5 seconds

    function updateSalesData() {
        // Example: Fetch new data from server and update the table
        // This function can fetch JSON data from an API and update the table rows
        // For simplicity, here we just update the sample data
        const salesData = [
            { product: "Product 1", unitsSold: 180, revenue: 27000 },
            { product: "Product 2", unitsSold: 100, revenue: 25000 },
            { product: "Product 3", unitsSold: 140, revenue: 35000 }
        ];

        const tableBody = document.querySelector(".sales-table tbody");
        tableBody.innerHTML = "";

        salesData.forEach(function(item) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.product}</td>
                <td>${item.unitsSold}</td>
                <td>${item.revenue}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
