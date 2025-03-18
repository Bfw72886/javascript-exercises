const add = function(num, num2) {
  return num + num2;
};

const subtract = function(num, num2) {
	return num - num2;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => (sum += num), 0);
};

const multiply = function(nums) {
  return nums.reduce((result, num) => result * num);
};

const power = function(num, pow) {
	let powerOfNum = 1;
  for (let i = 0; i < pow; i++) {
    powerOfNum *= num;
  }

  return powerOfNum;
};

const factorial = function(num) {
	let factorialNum = 1;
  for (let i = num; i > 0; i--) {
    factorialNum *= i;
  }
  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
