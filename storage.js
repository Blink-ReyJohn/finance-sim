function saveState() {
  const state = {
    date: currentDate,
    bank: bankBalance,
    inventory,
    orderNumber
  };
  localStorage.setItem("simState", JSON.stringify(state));
}

function loadState() {
  const state = JSON.parse(localStorage.getItem("simState"));
  if (state) {
    currentDate = state.date || 1;
    bankBalance = state.bank || 0;
    inventory = state.inventory || [];
    orderNumber = state.orderNumber || 0;
  }
}
