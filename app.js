function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) === w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function XO(str) {
  let countX = 0;
  let countO = 0;
  const strSplit = str.toLowerCase().split("");

  for (let i of strSplit) {
    if (i === "x") {
      countX += 1;
    } else if (i === "o") {
      countO += 1;
    }
  }
  return countX === countO;
}

function XOBetterSollution(str) {
  str = str.toLowerCase().split("");

  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
}

function longestConsec(strarr, k) {
  // your code

  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  const longestWord = strarr.reduce((a, b) => (a.length > b.length ? a : b));
  const kWord = strarr[k];
  if (indexOf.longestWord < k) {
    return "";
  }

  return `${longestWord}${kWord}`;
}

function componentToHex(c) {
  const hex = c.toString(16).toUpperCase();
  if (hex > 255) {
    hex = 255;
  }
  return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function countZeros(n) {
  // code here
  let word = "";
  for (let i = n; i > 0; i--) {
    word += i;
  }

  return word.split("").filter((w) => w === "0").length;
}

console.log(countZeros(12125));
