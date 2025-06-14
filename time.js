let currentDate = 1;

function nextDay() {
  currentDate++;
  updateSimDate();
  checkSalaryDay();
  triggerRandomEvent();
  checkGoals();
  saveState();
  logAction("You lived another day... 📆 Day " + currentDate);
}
