let userChoice;
let computerChoice;
let isWinner = false;



while(!isWinner) {
    userChoice = prompt("Выбери камень, ножницы или бумагу");
    userChoice = userChoice.toLocaleLowerCase();

    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            computerChoice = 'камень';
            break;
        case 1:
            computerChoice = 'ножницы';
            break;
        case 2:
            computerChoice = 'бумага';
            break;
    }
    if (userChoice === computerChoice) {
        alert('Draw! play again');
    }else{
            const isUserWinner = (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень');
        const message = isUserWinner ? 'Ты выиграл!' : 'Ты проиграл!';
        alert(message);
        isWinner = true;
     }
    }



