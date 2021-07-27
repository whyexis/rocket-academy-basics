/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var shakespeareSonnets = 17677;
  var duration = shakespeareSonnets / input / 60;
  return `You will take ${duration.toFixed(
    2
  )} hours to type all of Shakespeare's sonnets if there are ${shakespeareSonnets} words in all of Shakespeare's sonnets.`;
}
