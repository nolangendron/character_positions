var args = process.argv.slice(2);

function countIndices(str) {
  var string = str[0];
  string = string.replace(/\s/g, '');

  var output = {};

  for (let i = 0; i < string.length; i++) {
    output[string[i]];
    if (!output[string[i]]) {
      output[string[i]] = [i];
    } else {
    output[string[i]].push(i);
    }
  }
  return output;
}

console.log(countIndices(args));



