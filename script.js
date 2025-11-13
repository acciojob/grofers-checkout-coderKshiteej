// Create the "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements having class "prices"
  const prices = document.querySelectorAll(".prices");
  
  let total = 0;
  // Convert NodeList to array and sum the values
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Create a new row for showing total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2"); // Make it span both columns
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

// Add click listener
getSumBtn.addEventListener("click", getSum);
