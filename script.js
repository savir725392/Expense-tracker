let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const list = document.getElementById("list");
const totalSpan = document.getElementById("total");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addExpense);

function updateUI() {
  list.innerHTML = "";
  let sum = 0;

  expenses.forEach((exp, index) => {
    sum += Number(exp.amount);

    list.innerHTML += `
      <div class="expense-item">
        <div>${exp.title} (₹${exp.amount}) - ${exp.category}</div>
        <button onclick="deleteExpense(${index})">X</button>
      </div>
    `;
  });

  totalSpan.innerText = sum;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
  const title = titleInput.value.trim();
  const amount = amountInput.value.trim();
  const category = categoryInput.value;

  if (!title || !amount) {
    alert("Please fill all fields!");
    return;
  }

  expenses.push({ title, amount, category });
  updateUI();

  titleInput.value = "";
  amountInput.value = "";
}

function deleteExpense(i) {
  expenses.splice(i, 1);
  updateUI();
}

updateUI();
