function countLetters(str) {
    let letterCount = {};
    for (const element of str) {
      let letter = element;
      letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1;
    }
    return letterCount;
  }
  
  // Пример использования функции
  let inputString = "абракадабра";
  let letterCounts = countLetters(inputString);
  console.log(letterCounts);

  //Пример от ИИ
  function countAILetters(str) {
    const freq = {};
    for (const char of str) {
      freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
    return freq;
  }
  
  const inputStr = "абракадабра";
  const letterCountsOther = countLetters(inputStr);
  
  for (const [char, count] of Object.entries(letterCountsOther)) {
    console.log(`"${char}" : ${count}`);
  }

  