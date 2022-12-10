const initialPrice = document.querySelector("#init-price"),
  stocksQuantity = document.querySelector("#quant-stocks"),
  currentPrice = document.querySelector("#current-price"),
  checkBtn = document.querySelector("#check-btn"),
  outputBox = document.querySelector(".output");

checkBtn.addEventListener("click", submit);
function submit() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var cur = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, cur);
}
//formula for loss and pofit
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey, the Profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}
function showOutput(massage) {
  outputBox.innerHTML = massage;
}
