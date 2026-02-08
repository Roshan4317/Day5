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
//     let partnerIndexOfa = a / i;

//     if (a % i === 0) {
//       factorsOfa.push(i);

//       if (!factorsOfa.includes(partnerIndexOfa)) factorsOfa.push(i);
//     }
//   }
// }

// console.log(getHCF(12, 18));

function getFactors(num) {
  let factors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    let partnerIndexOfa = num / i;

    if (num % i === 0) {
      factors.slice(factors.length / 2, 0, i);
      if (!factors.includes(partnerIndexOfa)) {
        factors.slice(factors.length / 2 + 1, 0, partnerIndexOfa);
      }
    }
  }

  return factors;
}

console.log(getFactors(25));
console.log(getFactors(18));
console.log(getFactors(80));
console.log(getFactors(36));
console.log(getFactors(44));
console.log(getFactors(96));
