function calculateTaxAndRetirement(salary, contributionPercentage) {
  let tax;
  let retirement = salary * (contributionPercentage / 100);

  // I decided to use if else statements here since it wasn't an overwhelming
  // amount of cases we needed to cover. Alternatively, I could have used an
  // array of objects to represent the tax brackets and then iterated over those
  // to find the tax base and retirement contribution
  if (salary <= 18200) {
    tax = 0;
  } else if (salary <= 37000) {
    tax = (salary - 18200) * 0.19;
  } else if (salary <= 90000) {
    tax = 3572 + (salary - 37000) * 0.325;
  } else if (salary <= 180000) {
    tax = 20797 + (salary - 90000) * 0.37;
  } else {
    tax = 54097 + (salary - 180000) * 0.45;
  }

  return {
    tax: Math.round(tax),
    retirement: Math.round(retirement),
  };
}

console.assert(
  calculateTaxAndRetirement(10000, 10).tax === 0,
  "Test Case 1 Failed"
);
console.assert(
  calculateTaxAndRetirement(10000, 10).retirement === 1000,
  "Test Case 2 Failed"
);
console.assert(
  calculateTaxAndRetirement(20000, 15).tax === 342,
  "Test Case 3 Failed"
);
console.assert(
  calculateTaxAndRetirement(20000, 15).retirement === 3000,
  "Test Case 4 Failed"
);
console.assert(
  calculateTaxAndRetirement(40000, 20).tax === 4547,
  "Test Case 5 Failed"
);
console.assert(
  calculateTaxAndRetirement(40000, 20).retirement === 8000,
  "Test Case 6 Failed"
);
console.assert(
  calculateTaxAndRetirement(100000, 10).tax === 24497,
  "Test Case 7 Failed"
);
console.assert(
  calculateTaxAndRetirement(100000, 10).retirement === 10000,
  "Test Case 8 Failed"
);
console.assert(
  calculateTaxAndRetirement(200000, 25).tax === 63097,
  "Test Case 9 Failed"
);
console.assert(
  calculateTaxAndRetirement(200000, 25).retirement === 50000,
  "Test Case 10 Failed"
);
