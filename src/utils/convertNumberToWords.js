const convertNumberToWords = (number) => {
  const words = {
    ones: [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ],

    tens: [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
    teens: [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
  };

  const scale = ["", "thousand", "million", "billion", "trillion"];

  let chunks = [];
  let num = number;
  let final = "";

  // divide numbers to 3 per chunks
  while (num > 0) {
    const chunk = num % 1000;
    chunks.push(chunk);
    num = Math.floor(num / 1000);
  }

  for (let i = chunks.length - 1; i >= 0; i--) {
    let translated = "";
    const hundreds = Math.floor(chunks[i] / 100);
    const remainder = chunks[i] % 100;
    const tens = Math.floor(remainder / 10);
    const ones = remainder % 10;

    if (hundreds) translated += words.ones[hundreds] + " hundred ";

    if (remainder >= 10 && remainder <= 19) {
      translated += words.teens[remainder - 10];
    } else {
      if (tens) translated += words.tens[tens] + " ";
      if (ones) translated += words.ones[ones] + " ";
    }

    if (chunks[i] !== 0) final += translated + " " + scale[i] + " ";
  }

  return final.trim().replace(/\s+/g, " ");
};

export default convertNumberToWords;
