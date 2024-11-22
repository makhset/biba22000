function calculateNumbers() {

    const count = parseInt(prompt("Неше сан енгізесіз?"), 10);
  
    if (isNaN(count) || count <= 0) {
      console.log("Дұрыс мән енгізіңіз!");
      return;
    }
  
    const numbers = [];
    let negativeCount = 0;
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const num = parseInt(prompt(`Сан енгізіңіз (${i + 1}/${count}):`), 10);
  
      if (isNaN(num)) {
        console.log("Дұрыс сан енгізіңіз!");
        return;
      }
  
      numbers.push(num);
  
      if (num < 0) negativeCount++;
  
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    console.log("Кері сандар саны:", negativeCount);
    console.log("Жұп сандар саны:", evenCount);
    console.log("Тақ сандар саны:", oddCount);
  }

  calculateNumbers();