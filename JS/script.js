let number = (document.getElementById("demo").innerHTML = 0);

let A = 0;
let B = 0;
let simbol;
let summ = 0;

function counterSumm(value) {
  document.getElementById("demo").innerHTML = value;
  if (simbol === "+") {
    summ = B + A;
    B = summ;
  } else if (simbol === "-") {
    summ = B - A;
    B = summ;
  } else if (simbol === "*") {
    summ = B * A;
    B = summ;
  } else if (simbol === "/") {
    summ = B / A;
    B = summ;
  }
  console.log("Summa:" + summ);
  document.getElementById("demo").innerHTML = summ;
}

function counter(value) {
  if (simbol === undefined) {
    simbol = value;
    document.getElementById("demo").innerHTML = simbol;
    B = A;
    A = 0;
  } else {
    simbol = value;
    document.getElementById("demo").innerHTML = simbol;
    A = 0;
  }
}

function count(value) {
  document.getElementById("demo").innerHTML = value;
  newNumberAfterZero(value);
}

function newNumberAfterZero(value) {
  A = (A + value) / 1;
  document.getElementById("demo").innerHTML = A;
}
function reload() {
  location.reload();
}
