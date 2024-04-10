//---------------Davaleba_1-----------//
function სტრიქონის_სიგრძე(სტრიქონი) {
    return სტრიქონი.length;
}

let ჩემი_სტრიქონი = "ეს არის ჩემი სტრიქონი";
document.write(სტრიქონის_სიგრძე(ჩემი_სტრიქონი));
document.write("<hr>")



//---------------Davaleba_2-----------//
function countCharacterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }
    return count;
}

const sampleString = "";
document.write("სიმბოლო 'a'-ს რაოდენობა:", countCharacterA(sampleString));
document.write("<hr>")



//---------------Davaleba_3-----------//
function countSubstrings(str, substr) {
    let count = 0;
    let position = str.indexOf(substr);

    while (position !== -1) {
        count++;
        position = str.indexOf(substr, position + 1);
    }

    return count;
}

let string = "ეს ტექსტი შედის შედეგებში რამდენიმე ჯერ";
let substring = "შე";
document.write(countSubstrings(string, substring));
document.write("<hr>")




//---------------Davaleba_5-----------//
function generateRandomWord() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomWord = '';
  
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];
    }
  
    return randomWord;
  }

  document.write(generateRandomWord());
  document.write("<hr>")




  //---------------Davaleba_6-----------//
  function RandomWord(n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      word += alphabet[randomIndex];
    }
    return word;
  }

    document.write(RandomWord(7)); 
    document.write("<hr>")
    

   //---------------Davaleba_7-----------//
   function RandomString(n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < n; j++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet[randomIndex];
      }
      result += ' ';
    }
    return result.trim(); 
  }
  
  const n = 5;
  const randomString = RandomString(n);
  document.write(randomString);
  document.write("<hr>")



  //---------------Davaleba_13-----------//
  function countSubstrings(str, substr) {
    const regex = new RegExp(substr, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
const str = "JavaScript is an awesome programming language, JavaScript is also widely used.";
const substr = "JavaScript";
document.write(countSubstrings(str, substr)); 
document.write("<hr>")
  
  


    
  


