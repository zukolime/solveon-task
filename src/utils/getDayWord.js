const getDayWord = (number) => {
  const n = Math.abs(number) % 100;
  const lastDigit = n % 10;

  if (n > 10 && n < 20) return "дней";
  if (lastDigit > 1 && lastDigit < 5) return "дня";
  if (lastDigit === 1) return "день";
  return "дней";
};

export default getDayWord;
