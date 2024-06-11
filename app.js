const a = (a, b, c) => {
  return {
    name: a,
    age: b,
    job: c,
  };
};

// console.log(a());

const b = a('이연승', 30, '미남');
console.log('첫번쨰 b:', b);
b.adress = '대전';
console.log('두번째 b:', b);
