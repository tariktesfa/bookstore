const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateId = () => {
  let id = '';
  for (let i = 0; i < 9; i += 1) {
    id += digits[Math.floor(Math.random() * digits.length)];
  }
  return id;
};

export default generateId;
