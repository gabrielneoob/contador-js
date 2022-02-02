// let h1Wrapper = document.getElementsByTagName('h1')[0];

// h1Wrapper.innerHTML = "Olá!";
const currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
};

function decrement() {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
