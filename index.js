const round = (number) => {
  let decimalPoint = number.indexOf(".");
  let numberDecimals = number.slice(decimalPoint, -1);
  let numberInt = Math.trunc(number);

  if (numberDecimals < 0.5) {
    result = numberInt;
  } else if (numberDecimals > 0.5) {
    result = numberInt + 1;
  } else if (numberDecimals === 0.5) {
      if (numberInt % 2 === 0) {
      result = numberInt - 1;
      } else {
      result = numberInt + 1;
      }
  } else {
    result = "Toto není číslo."
  }
  return result;
};

const userInput = prompt(
  "Zadejte číslo, které chcete zaokrouhlit. Použijde desetinnou tečku."
);
const roundedNumber = round(userInput);
document.body.innerHTML = userInput + " je zaokrouhleno na " + roundedNumber;


