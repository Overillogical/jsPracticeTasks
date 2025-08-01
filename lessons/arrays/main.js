// reverse array without using .reverse();

const array = [1,2,3,4,5,6];

function reverseArray(array){
    const reversedArray = [];
    for (let i = array.length-1;i>=0;i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reverseArray(array));