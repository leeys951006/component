const a = (a, b, c) => {
  return {
    name: a,
    age: b,
    job: c,
  };
};

// console.log(a());

const b = a('이연승', 30, '미남');
console.log(b);
