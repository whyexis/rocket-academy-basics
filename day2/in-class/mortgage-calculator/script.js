/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */
function calcMortage(loanAmount) {
  var numOfMonthsInYear = Number(12);
  var loanTenure = Number(10); // years
  var interestRate = Number(0.03); // APR
  var monthlyInterestRate = interestRate / numOfMonthsInYear;
  var numOfPayments = loanTenure * numOfMonthsInYear;

  /**
   * ------------------------------------------------------------------------
   * Formula for monthly mortgage payment: M = P[r(1+r)^n/((1+r)^n)-1)]
   * M = the total monthly mortgage payment
   * P = the principal loan amount
   * r = your monthly interest rate.
   * n = number of payments over loan's lifetime
   * ------------------------------------------------------------------------
   */
  var monthlyPayment =
    Number(loanAmount) *
    ((monthlyInterestRate * (1 + monthlyInterestRate) ** numOfPayments) /
      ((1 + monthlyInterestRate) ** numOfPayments - 1));
  var totalDebt = monthlyPayment * numOfPayments;
  var interest = totalDebt - loanAmount;
  return `For a loan of $${Number(loanAmount).toFixed(
    2
  )}, you will have to pay $${totalDebt.toFixed(
    2
  )} back in total, $${interest.toFixed(
    2
  )} in interest and $${monthlyPayment.toFixed(2)} every month for 10 years.`;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  return calcMortage(input);
}
