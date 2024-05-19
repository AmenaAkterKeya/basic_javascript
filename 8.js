function monthlySavings(payments, livingCost) {
  const firstIsValid = Array.isArray(payments);

  const secondIsValid = typeof livingCost == "number";
  if (firstIsValid && secondIsValid) {
    let totalIncome = 0;

    for (let i = 0; i < payments.length; i++) {
      if (typeof payments[i] == "number") {
        if (payments[i] >= 3000) {
          totalIncome += payments[i] * 0.8;
        } else {
          totalIncome += payments[i];
        }
      } else {
        return "invalid";
      }
    }
    const savings = totalIncome - livingCost;

    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
  } else {
    return "invalid";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
