const round = (number) => {
  let numberInt = Math.trunc(number);
  let numberDecimal = number - numberInt;
  let result;

  if (numberDecimal < 0.5) {
    result = numberInt;
  } else if (numberDecimal > 0.5) {
    result = Math.ceil(number);
  } else if (numberDecimal === 0.5) {
    if (numberInt % 2 === 0) {
      result = numberInt;
    } else {
      result = numberInt + 1;
    }
  } else {
    result = "Toto není číslo.";
  }
  return result;
};

const userInput = Number(
  prompt("Zadejte číslo, které chcete zaokrouhlit. Použijde desetinnou tečku.")
);
const roundedNumber = round(userInput);
document.body.innerHTML = userInput + " je zaokrouhleno na " + roundedNumber;
