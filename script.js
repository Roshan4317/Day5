// Print all factors of a numbers

// function allFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// }

// console.log(allFactors(24));

// function allFactors(num) {
//   const factors = [];

//   let loopCount = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     loopCount++;
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }
//   factors.push(num);
//   console.log(loopCount);
//   return factors;
// }

// console.log(allFactors(24));
// console.log(allFactors(10));
// console.log(allFactors(39));
// console.log(allFactors(100));
// console.log(allFactors(60));
// console.log(allFactors(56));
// console.log(allFactors(63));
// console.log(allFactors(73));
// console.log(allFactors(19));

// function allFactors(num) {
//   const factors = [];

//   let loopCount = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     loopCount++;
//     if (num % i === 0) {
//       const secondLast = num / i;
//       factors.push(i);
//       if (!factors.includes(secondLast)) factors.push(secondLast);
//     }
//   }

//   console.log(loopCount);
//   return factors.sort((a, b) => a - b);
// }

// console.log(allFactors(24));

// function getAllFactor(num) {
//   let loopCount = 0;
//   const factors = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     loopCount++;

//     if (num % i === 0) {
//       const partnerOfI = num / i;

//       factors.splice(factors.length / 2, 0, i);
//       if (!factors.includes(partnerOfI))
//         factors.splice(factors.length / 2 + 1, 0, partnerOfI);
//     }
//   }

//   console.log(`LoopCount: ${loopCount}`);
//   return factors;
// }

// console.log(getAllFactor(8));
// console.log(getAllFactor(25));
// console.log(getAllFactor(84));
// console.log(getAllFactor(45));
// console.log(getAllFactor(61));
// console.log(getAllFactor(36));
// console.log(getAllFactor(16));

// ********************************************************************************************************************

// Print all multiples of a Number upto N

// Number = 4 , limit = 30

// Output = [4,8,12,16,20,24,28]

// function multiples(num, limit) {
//   const result = [];
//   let loopCount = 0;

//   for (let i = 1; i <= limit / num; i++) {
//     loopCount++;

//     result.push(num * i);
//   }

//   console.log(`LoopCount ${loopCount}`);
//   return result;
// }

// console.log(multiples(4, 40));

// function getMultiples(num, limit) {
//   let result = [];

//   for (let i = num; i <= limit; i += num) {
//     result.push(i);
//   }

//   return result;
// }

// console.log(getMultiples(4, 31));

// ********************************************************************************************************************

// Find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input = 12,18
// Output HCF = 6

// function getHCF(a, b) {
//   const factorsOfa = [];

//   for (let i = 1; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       let partnerIndexOfa = a / i;
//       factorsOfa.splice(factorsOfa.length / 2, 0, i);

//       if (!factorsOfa.includes(partnerIndexOfa))
//         factorsOfa.splice(factorsOfa.length / 2 + 1, 0, partnerIndexOfa);
//     }
//   }

//   const factorsOfb = [];

//   for (let i = 1; i <= Math.sqrt(b); i++) {
//     let partnerIndexOfb = b / i;

//     if (b % i === 0) {
//       factorsOfb.splice(factorsOfb.length / 2, 0, i);

//       if (!factorsOfb.includes(partnerIndexOfb))
//         factorsOfb.splice(factorsOfb.length / 2 + 1, 0, partnerIndexOfb);
//     }
//   }

//   const common = factorsOfa.filter((item) => {
//     return factorsOfb.includes(item);
//   });

//   const max = Math.max(...common);
//   return `HCF = ${max}`;
// }

// console.log(getHCF(24, 36));

// function getHCF(num1, num2) {
//   let factorsOfNum1 = [];
//   let HCF = 0;

//   for (let i = 1; i <= Math.sqrt(num1); i++) {
//     if (num1 % i === 0) {
//       let partnerIndex = num1 / i;

//       factorsOfNum1.splice(factorsOfNum1.length / 2, 0, i);

//       if (!factorsOfNum1.includes(partnerIndex))
//         factorsOfNum1.splice(factorsOfNum1.length / 2 + 1, 0, partnerIndex);
//     }
//   }

//   console.log(factorsOfNum1);

//   for (let i = factorsOfNum1.length - 1; i >= 0; i--) {
//     if (num2 % factorsOfNum1[i] === 0) {
//       return `HCF = ${factorsOfNum1[i]}`;
//     }
//   }
// }

// console.log(getHCF(48, 180));

// ********************************************************************************************************************

// HomeWork

// Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors

// function totalNumbersOfFactors(num) {
//   const digit = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       digit.splice(digit.length / 2, 0, i);

//       let partnerIndex = num / i;
//       if (!digit.includes(partnerIndex))
//         digit.splice(digit.length / 2 + 1, 0, partnerIndex);
//     }
//   }

//   return `${digit.length} factors`;
// }

// console.log(totalNumbersOfFactors(24));

// ********************************************************************************************************************

// Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28

// function sumOfAllFactors(num) {
//   const digit = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       digit.splice(digit.length / 2, 0, i);
//       const partnerIndex = num / i;

//       if (!digit.includes(partnerIndex))
//         digit.splice(digit.length / 2 + 1, 0, partnerIndex);
//     }
//   }

//   const result = digit.reduce((acc, curr) => (acc += curr));

//   return result;
// }

// console.log(sumOfAllFactors(12));
