let counterResult = 0;

const counterDisplay = document.querySelector('#counter');
const countButtons = document.querySelector('#count-buttons');
const addCountButton = document.querySelector('#add-count');
const lowerCountButton = document.querySelector('#lower-count');

const counterDisplayColor = () => {
    if (counterResult < 0) {
        counterDisplay.classList.add('text-danger')
        counterDisplay.classList.remove('text-success')
    } else if (counterResult > 0) {
        counterDisplay.classList.add('text-success')
        counterDisplay.classList.remove('text-danger')
    } else {
        counterDisplay.classList.remove('text-danger')
        counterDisplay.classList.remove('text-success')
    }
}

addCountButton.addEventListener('click', () => {
    counterResult++
    counterDisplay.textContent = counterResult;
    counterDisplayColor();
})

lowerCountButton.addEventListener('click', () => {
    counterResult--
    counterDisplay.textContent = counterResult;
    counterDisplayColor();
})

// countButtons.addEventListener('click', (e) => {
//     if (e.target.id === 'add-count') {
//         counterResult++
//     } else if (e.target.id === 'lower-count') {
//         counterResult--
//     }
//     counterDisplay.textContent = counterResult;
//     if (counterResult < 0) {
//         counterDisplay.classList.add('text-danger')
//         counterDisplay.classList.remove('text-success')
//     } else if (counterResult > 0) {
//         counterDisplay.classList.add('text-success')
//         counterDisplay.classList.remove('text-danger')
//     } else {
//         counterDisplay.classList.remove('text-danger')
//         counterDisplay.classList.remove('text-success')
//     }
// })

// countButtons.addEventListener('click', (e) => {
//     if (e.target.id === 'add-count') {
//         counterResult++
//     } else if (e.target.id === 'lower-count') {
//         counterResult--
//     }
//     counterDisplay.textContent = counterResult;
//     if (counterResult < 0) {
//         counterDisplay.style.color = 'red';
//     } else if (counterResult > 0) {
//         counterDisplay.style.color = 'green';
//     } else {
//         counterDisplay.style.removeProperty('color');
//     }
// })