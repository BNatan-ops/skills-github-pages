function addItem(section) {
    const container = document.getElementById(`${section}-list`);
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Value" oninput="updateTotals('${section}')" />
    `;
    container.appendChild(div);
}

function updateTotals(section) {
    const inputs = document.querySelectorAll(`#${section}-list input[type="number"]`);
    let total = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        total += value;
    });

    document.getElementById(`${section}-total`).textContent = total.toFixed(2);
}

function calculateCashflow() {
    const totalIncome = parseFloat(document.getElementById('income-total').textContent) || 0;
    const totalSpendings = parseFloat(document.getElementById('spendings-total').textContent) || 0;
    const cashflow = totalIncome - totalSpendings;

    const cashflowResult = document.getElementById('cashflow-result');
    cashflowResult.textContent = `Net Cashflow: ${cashflow.toFixed(2)}`;
}