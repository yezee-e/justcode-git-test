even = () => {
  let a = [];
  for (let i = 2; i < 50; i += 2) {
    a.push(i);
  }
  return a;
};
console.log(even());
