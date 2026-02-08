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
