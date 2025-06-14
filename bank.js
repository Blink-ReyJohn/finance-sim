let bankBalance = 50000;

function depositToBank(amount, reason = "Income") {
  bankBalance += amount;
  logAction(reason + ": ₱" + amount.toLocaleString());
  saveState();
}

function validatePurchase(total) {
  if (total <= bankBalance) {
    logAction("✅ Purchase allowed");
    return true;
  } else {
    logAction("❌ Not enough funds");
    return false;
  }
}
