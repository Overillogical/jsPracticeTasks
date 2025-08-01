const words1 = ['Мой кот', 'Моя собака', 'Мой попугай'];
const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
const words3 = ['морковку', 'макароны', 'косточку'];
function makePhrase() {
    const randomIndex_1 = Math.floor(Math.random() * words1.length);
    const randomIndex_2 = Math.floor(Math.random() * words2.length);
    const randomIndex_3 = Math.floor(Math.random() * words3.length);
    const phrase = `${words1[randomIndex_1]} ${words2[randomIndex_2]} ${words3[randomIndex_3]}`;
    return phrase;
}
console.log(makePhrase());