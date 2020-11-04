const sentence = "hello there from lighthouse labs";
let x = 0;
let time = 50;
for (const char of sentence) {
  setTimeout(() => {
    sentence[x] = char
    x++;
    if (x !== sentence.length) {
      process.stdout.write(char);
    } else {
      process.stdout.write(char + '\n');
    }
  }, time += 50)

}