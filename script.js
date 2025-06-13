function atbashCipher(text) {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);
      // Uppercase letters
      if (code >= 65 && code <= 90) return String.fromCharCode(155 - code);
      // Lowercase letters
      if (code >= 97 && code <= 122) return String.fromCharCode(219 - code);
      return char;
    })
    .join("");
}

const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

input.addEventListener("input", () => {
  output.value = atbashCipher(input.value);
});
