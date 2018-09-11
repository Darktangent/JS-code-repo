console.log("utils js is running");
const square = x => {
  return x * x;
};
const add = (a, b) => {
  return a + b;
};

export const isAdult = age => {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
};
export const canDrink = age => {
  if (age < 21) {
    return "Cannot drink";
  } else {
    return "Knock yourself out";
  }
};
const subtract = (a, b) => {
  return a - b;
};

export { square, add, subtract as default };
