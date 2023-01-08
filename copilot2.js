// Consider a string consisting of the characters < and only. The string is balanced 
// if each < always appears before (i.e., to the left of) a corresponding > character 
// (they do not need to be adjacent). Moreover, each < and > act as a unique pair of symbols and neither symbol can be considered as part of any other pair of symbols.
// To balance a string, any > character can be replaced with <>. Given an expression and a
// maximum number of replacements, determine whether the string can be balanced.



// function balancedorNot(expressions, maxReplacements) {
//     // Write your code here
//     const result = [];
//     for (let i = 0; i < expressions.length; i++) {
//         let count = 0;
//         let str = expressions[i];
//         for (let j = 0; j < str.length; j++) {
//             if (str[j] == '<') {
//                 count++;
//             } else {
//                 if (count > 0) {
//                     count--;
//                 } else {
//                     count++;
//                 }
//             }
//         }
//         if (count <= maxReplacements[i]) {
//             result.push(1);
//         } else {
//             result.push(0);
//         }
//     }
//     return result;
// }


// function balancedOrNot(expressions, maxReplacements) {
//     let balance = 0;
//     for (const char of expressions) {
//       if (char === '<') {
//         balance++;
//       } else if (char === '>') {
//         balance--;
//       }
  
//       if (balance < 0) {
//         if (maxReplacements > 0) {
//           balance += 2;
//           maxReplacements--;
//         } else {
//           return 0;
//         }
//       }
//     }
  
//     return balance === 0 ? 1 : 0;
//   }

function balancedOrNot(expression, maxReplacements) {
    // Write your code here
    let result = [];
  
    for (let i = 0; i < expression.length; i++) {
      let count = 0;
      for (let j = 0; j < expression[i].length; j++) {
        if (expression[i][j] === "<") {
          count++;
        } else if (expression[i][j] === ">") {
          count--;
        }
        if (count < 0) {
          break;
        }
      }
      if (count === 0) {
        result.push(1);
      } else if (count > 0 && count <= maxReplacements[i]) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  
    return result;
  }
// function balancedOrNot(expressions, maxReplacements) {
//     const result = [];
//     for (let i = 0; i < expressions.length; i++) {
//       let count = 0;
//       let str = expressions[i];
//       for (let j = 0; j < str.length; j++) {
//         if (str[j] === '<') {
//           count++;
//         } else {
//           if (count > 0) {
//             count--;
//           } else {
//             count++;
//           }
//         }
//       }
//       if (count <= maxReplacements[i]) {
//         result.push(1);
//       } else {
//         result.push(0);
//       }
//     }
//     return result;
//   }


// function balancedOrNot(expressions, maxReplacements) {
//     const result = [];
//     for (let i = 0; i < expressions.length; i++) {
//       let count = 0;
//       let str = expressions[i];
//       for (let j = 0; j < str.length; j++) {
//         if (str[j] === '<') {
//           count++;
//         } else {
//           if (count > 0) {
//             count--;
//           } else {
//             count++;
//           }
//         }
//       }
//       if (count === 0) {
//         result.push(1);
//       } else if (count <= maxReplacements[i] * 2) {
//         result.push(1);
//       } else {
//         result.push(0);
//       }
//     }
//     return result;
//   }


function balancedOrNot(expression, maxReplacements) {
    let result = [];
  
    for (let i = 0; i < expression.length; i++) {
      let count = 0;
      let unbalanced = 0;
      for (let j = 0; j < expression[i].length; j++) {
        if (expression[i][j] === "<") {
          count++;
          unbalanced++;
        } else if (expression[i][j] === ">") {
          count--;
        }
        if (count < 0) {
          break;
        }
      }
      if (count === 0 && unbalanced <= maxReplacements[i]) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  
    return result;
  }

console.log(balancedOrNot(['<>', '<>><'], [1, 0]))
console.log(balancedOrNot(['<<<><><>'], [1]))