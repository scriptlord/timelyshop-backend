// Consider an array of decimal integers. 
// Rearrange the array according to the following rules:Sort the integers in ascending order by the
// number of 1's in their binary representations. • Elements having the same number of 1's 
// in their biary representations are ordered by increasing decimal value.

// Example

// Consider the array [7, 8, 6, 5]10= [0111, 1000, 0110, 0101) 
//     First, group the items by number of binary digits equal to 1: 
//     [[1000], [0101, 0110], [0111]] 
//     The elements with two 1's now must be ordered: (0110, 010112 [6, 5]10 
//         Sort those two elements in ascending order by value making the final array [1000, 0101, 0110, 0111), 18, 5, 6, 7110

function rearrange(elements){

    const binary = elements.map(el => el.toString(2));
    const ones = binary.map(el => el.split('').filter(x => x == 1).length);
    const result = [];
    let max = Math.max(...ones);
    let min = Math.min(...ones);
    while (min <= max) {
        const temp = [];
        for (let i = 0; i < ones.length; i++) {
            if (ones[i] == min) {
                temp.push(elements[i]);
            }
        }
        temp.sort((a, b) => a - b);
        result.push(temp);
        min++;
    }
    return result.flat();
}

console.log(rearrange([5,3,7,10,14]))
console.log(rearrange([1,2,3]))