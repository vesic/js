function add(a=0, b=0) {
  return a + b;
}

function sub(a=0, b=0) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function ff() {
  return '';
}

function foo() {
  if (Math.random() > .5) return true;
  return false;
}

let ab = add(1, 2); // 3
console.log(ab) // 3