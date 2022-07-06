function Fibonacci(n) {
  let current = 0;
  let next = 1;
  //   let sum = 0;
  console.log(current);
  console.log(next);
  //   sum = current + next;

  for (i = 1; i <= n - 2; i++) {
    sum = current + next;
    current = next;
    next = sum;
    console.log(sum);
  }
}
// Fibonacci(10);

function GreatestOfThree(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log(c);
  }
}

// GreatestOfThree(200, 201, 500);

// function Prime(n) {
//   for (i = 2; i <= n / 2; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// Prime(50);

function multiplicationTable(n) {
  for (i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}

multiplicationTable(10);
