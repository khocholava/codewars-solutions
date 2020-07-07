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

function pairSum(array, sum) {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    console.log(hashMap);

    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  return results;
}

function diamond(n) {
  if (n < 0 || n % 2 === 0) return null;
  let diamond = "";

  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    diamond += " ".repeat(len);
    diamond += "*".repeat(n - 2 * len);
    diamond += "\n";
  }
  return diamond;
}

function removeSmallest(numbers) {
  const indexOfMin = numbers.indexOf(Math.min(...numbers));
  // if (indexOfMin > -1) {
  //   numbers.splice(indexOfMin, 1);
  // }
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  // return numbers;
}
