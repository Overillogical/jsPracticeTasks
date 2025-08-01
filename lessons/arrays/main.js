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


function removeElement(array,element){
    let newArray = [];
    for (let i = 0;i<array.length;i++){
        if(array[i] !== element) newArray.push(array[i]);
    }
    return newArray;
}

console.log(removeElement(array,2));