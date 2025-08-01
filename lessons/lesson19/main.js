const words1 = ['Мой кот', 'Моя собака', 'Мой попугай'];
const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
const words3 = ['морковку', 'макароны', 'косточку'];
function makePhrase() {
    return `${choosePhraseFromArray(words1)} ${choosePhraseFromArray(words2)} ${choosePhraseFromArray(words3)}`;
}
function choosePhraseFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}
console.log(makePhrase());