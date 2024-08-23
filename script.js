// script.js

const numbers0to9 = window.numbers0to9;
const numbers00to99 = window.numbers00to99;
const numbers000to099 = window.numbers000to099;
const numbers100to199 = window.numbers100to199;
const numbers200to299 = window.numbers200to299;
const numbers300to399 = window.numbers300to399;
const numbers400to499 = window.numbers400to499;
const numbers500to599 = window.numbers500to599;
const numbers600to699 = window.numbers600to699;
const numbers700to799 = window.numbers700to799;
const numbers800to899 = window.numbers800to899;
const numbers900to999 = window.numbers900to999;
const cards = window.cards;
const cardImages = window.cardImages;
const cardToImageMap = window.cardToImageMap;

const imagesPath = {
    '0-9': '0-9',
    '00-99': '00-99',
    '000-099': '000-099',
    '100-199': '100-199',
    '200-299': '200-299',
    '300-399': '300-399',
    '400-499': '400-499',
    '500-599': '500-599',
    '600-699': '600-699',
    '700-799': '700-799',
    '800-899': '800-899',
    '900-999': '900-999',
    'cards': 'karty_img'
};

const displayArea = document.getElementById('display-area');
const displayImgCard = document.getElementById('display-img-card');
const displayImg = document.getElementById('display-img');
const showButton = document.getElementById('show-button');
const counter = document.getElementById('counter');
const modeSelect = document.getElementById('mode-select');
const customInputContainer = document.getElementById('custom-input-container');
const customInput = document.getElementById('custom-input');
const processCustomInputButton = document.getElementById('process-custom-input');
const range900to999Checkbox = document.getElementById('range-900-999');
const range800to899Checkbox = document.getElementById('range-800-899');
const range700to799Checkbox = document.getElementById('range-700-799');
const range600to699Checkbox = document.getElementById('range-600-699');
const range500to599Checkbox = document.getElementById('range-500-599');
const range400to499Checkbox = document.getElementById('range-400-499');
const range300to399Checkbox = document.getElementById('range-300-399');
const range200to299Checkbox = document.getElementById('range-200-299');
const range100to199Checkbox = document.getElementById('range-100-199');
const range000to099Checkbox = document.getElementById('range-000-099');
const range00to99Checkbox = document.getElementById('range-00-99');
const range0to9Checkbox = document.getElementById('range-0-9');
const rangeCardsCheckbox = document.getElementById('range-cards');
const customRangeCheckbox = document.getElementById('custom-range');

let remainingNumbers = 0;
let currentStep = 0;
let currentNumber = '';
let currentImage = '';
let usedNumbers = new Set();
let customNumbers = [];
let numbers = [];
let images = [];

const updateCounter = () => {
    counter.textContent = `Pozostało liczb: ${remainingNumbers}`;
};

const resetGame = () => {
    numbers = [];
    images = [];
    if (range900to999Checkbox.checked) numbers = numbers.concat(numbers900to999);
    if (range800to899Checkbox.checked) numbers = numbers.concat(numbers800to899);
    if (range700to799Checkbox.checked) numbers = numbers.concat(numbers700to799);
    if (range600to699Checkbox.checked) numbers = numbers.concat(numbers600to699);
    if (range500to599Checkbox.checked) numbers = numbers.concat(numbers500to599);
    if (range400to499Checkbox.checked) numbers = numbers.concat(numbers400to499);
    if (range300to399Checkbox.checked) numbers = numbers.concat(numbers300to399);
    if (range200to299Checkbox.checked) numbers = numbers.concat(numbers200to299);
    if (range100to199Checkbox.checked) numbers = numbers.concat(numbers100to199);
    if (range000to099Checkbox.checked) numbers = numbers.concat(numbers000to099);
    if (range00to99Checkbox.checked) numbers = numbers.concat(numbers00to99);
    if (range0to9Checkbox.checked) numbers = numbers.concat(numbers0to9);

    if (rangeCardsCheckbox.checked) numbers = numbers.concat(cards);

    if (customRangeCheckbox.checked) {
        customNumbers = customInput.value.trim().split(/\s+/);
        numbers = customNumbers;
    }

    remainingNumbers = numbers.length;
    currentStep = 0;
    usedNumbers.clear();
    shuffle(numbers); // Losowe wymieszanie liczb

    updateCounter();
    displayImgCard.style.display = 'none';
    displayImg.style.display = 'none';

    if (modeSelect.value === 'image-to-number' || modeSelect.value === 'number-to-image') {
        const { images: allImages } = getCurrentMapAndPath();
        images = [...allImages];
        shuffle(images);
    }
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const getCurrentMapAndPath = () => {
    const maps = [];
    const paths = [];
    const allImages = [];

    if (range900to999Checkbox.checked) {
        maps.push(window.numberImageMap900to999);
        paths.push(imagesPath['900-999']);
        allImages.push(...window.images900to999);
    }
    if (range800to899Checkbox.checked) {
        maps.push(window.numberImageMap800to899);
        paths.push(imagesPath['800-899']);
        allImages.push(...window.images800to899);
    }
    if (range700to799Checkbox.checked) {
        maps.push(window.numberImageMap700to799);
        paths.push(imagesPath['700-799']);
        allImages.push(...window.images700to799);
    }
    if (range600to699Checkbox.checked) {
        maps.push(window.numberImageMap600to699);
        paths.push(imagesPath['600-699']);
        allImages.push(...window.images600to699);
    }
    if (range500to599Checkbox.checked) {
        maps.push(window.numberImageMap500to599);
        paths.push(imagesPath['500-599']);
        allImages.push(...window.images500to599);
    }
    if (range400to499Checkbox.checked) {
        maps.push(window.numberImageMap400to499);
        paths.push(imagesPath['400-499']);
        allImages.push(...window.images400to499);
    }
    if (range300to399Checkbox.checked) {
        maps.push(window.numberImageMap300to399);
        paths.push(imagesPath['300-399']);
        allImages.push(...window.images300to399);
    }
    if (range200to299Checkbox.checked) {
        maps.push(window.numberImageMap200to299);
        paths.push(imagesPath['200-299']);
        allImages.push(...window.images200to299);
    }
    if (range100to199Checkbox.checked) {
        maps.push(window.numberImageMap100to199);
        paths.push(imagesPath['100-199']);
        allImages.push(...window.images100to199);
    }
    if (range000to099Checkbox.checked) {
        maps.push(window.numberImageMap000to099);
        paths.push(imagesPath['000-099']);
        allImages.push(...window.images000to099);
    }
    if (range00to99Checkbox.checked) {
        maps.push(window.numberImageMap00to99);
        paths.push(imagesPath['00-99']);
        allImages.push(...window.images00to99);
    }
    if (range0to9Checkbox.checked) {
        maps.push(window.numberImageMap0to9);
        paths.push(imagesPath['0-9']);
        allImages.push(...window.images0to9);
    }

    if (rangeCardsCheckbox.checked) {
        maps.push(cardToImageMap);
        paths.push(imagesPath['cards']);
        allImages.push(...cardImages);
    }

    if (customRangeCheckbox.checked) {
        customNumbers = customInput.value.trim().split(/\s+/);
        customNumbers.forEach(number => {
            if (window.numberImageMap0to9[number]) {
                maps.push(window.numberImageMap0to9);
                paths.push(imagesPath['0-9']);
                allImages.push(...window.images0to9.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap00to99[number]) {
                maps.push(window.numberImageMap00to99);
                paths.push(imagesPath['00-99']);
                allImages.push(...window.images00to99.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap000to099[number]) {
                maps.push(window.numberImageMap000to099);
                paths.push(imagesPath['000-099']);
                allImages.push(...window.images000to099.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap100to199[number]) {
                maps.push(window.numberImageMap100to199);
                paths.push(imagesPath['100-199']);
                allImages.push(...window.images100to199.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap200to299[number]) {
                maps.push(window.numberImageMap200to299);
                paths.push(imagesPath['200-299']);
                allImages.push(...window.images200to299.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap300to399[number]) {
                maps.push(window.numberImageMap300to399);
                paths.push(imagesPath['300-399']);
                allImages.push(...window.images300to399.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap400to499[number]) {
                maps.push(window.numberImageMap400to499);
                paths.push(imagesPath['400-499']);
                allImages.push(...window.images400to499.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap500to599[number]) {
                maps.push(window.numberImageMap500to599);
                paths.push(imagesPath['500-599']);
                allImages.push(...window.images500to599.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap600to699[number]) {
                maps.push(window.numberImageMap600to699);
                paths.push(imagesPath['600-699']);
                allImages.push(...window.images600to699.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap700to799[number]) {
                maps.push(window.numberImageMap700to799);
                paths.push(imagesPath['700-799']);
                allImages.push(...window.images700to799.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap800to899[number]) {
                maps.push(window.numberImageMap800to899);
                paths.push(imagesPath['800-899']);
                allImages.push(...window.images800to899.filter(img => img.startsWith(number)));
            } else if (window.numberImageMap900to999[number]) {
                maps.push(window.numberImageMap900to999);
                paths.push(imagesPath['900-999']);
                allImages.push(...window.images900to999.filter(img => img.startsWith(number)));
            }
        });
    }

    return { maps, paths, images: allImages };
};

const showNext = () => {
    const mode = modeSelect.value;
    const { maps, paths } = getCurrentMapAndPath();

    if (remainingNumbers === 0 && currentStep === 0) {
        alert('Wszystkie liczby zostały wyświetlone!');
        return;
    }

    if (mode === 'number-to-image') {
        if (currentStep === 0) {
            if (numbers.length === 0) {
                alert('Wszystkie liczby zostały wyświetlone!');
                return;
            }

            currentNumber = numbers.pop(); // Pobierz losową liczbę lub kartę
            const map = maps.find(map => map[currentNumber]);
            if (map) {
                currentImage = map[currentNumber];
            }

            usedNumbers.add(currentNumber);
            remainingNumbers--;
            updateCounter();

            if (rangeCardsCheckbox.checked && cards.includes(currentNumber)) {
                displayImgCard.style.display = 'none';
                displayImg.src = `karty/${currentNumber}`;
                displayImg.classList.add('card-img'); // Dodaj klasę stylu do obrazów kart
                displayImg.style.display = 'block';
            } else {
                displayImgCard.style.display = 'block';
                displayImgCard.textContent = currentNumber; // Wyświetl liczby jako tekst
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla innych obrazów
                displayImg.style.display = 'none';
            }

            currentStep = 1;
        } else {
            if (rangeCardsCheckbox.checked && cards.includes(currentNumber)) {
                displayImg.src = `karty_img/${currentImage}`;
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla obrazów z karty_img
                displayImg.style.display = 'block';
                displayImgCard.style.display = 'none';
            } else {
                const pathIndex = maps.findIndex(map => map[currentNumber]);
                displayImg.src = `${paths[pathIndex]}/${currentImage}`;
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla innych obrazów
                displayImg.style.display = 'block';
                displayImgCard.style.display = 'none';
            }

            currentStep = 0;

            if (remainingNumbers === 0) {
                setTimeout(() => alert('Wszystkie liczby zostały wyświetlone!'), 100);
            }
        }
    } else if (mode === 'image-to-number') {
        if (currentStep === 0) {
            if (images.length === 0) {
                alert('Wszystkie obrazy zostały wyświetlone!');
                return;
            }

            currentImage = images.pop(); // Pobierz losowy obraz
            const map = maps.find(map => Object.values(map).includes(currentImage));
            if (map) {
                currentNumber = Object.keys(map).find(key => map[key] === currentImage);
            } else if (rangeCardsCheckbox.checked) {
                currentNumber = Object.keys(cardToImageMap).find(key => cardToImageMap[key] === currentImage);
                currentImage = cardToImageMap[currentNumber];
            }

            usedNumbers.add(currentNumber);
            remainingNumbers--;
            updateCounter();

            if (rangeCardsCheckbox.checked && cardImages.includes(currentImage)) {
                displayImg.src = `karty_img/${currentImage}`;
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla obrazów z karty_img
                displayImg.style.display = 'block';
                displayImgCard.style.display = 'none';
            } else {
                const pathIndex = maps.findIndex(map => Object.values(map).includes(currentImage));
                displayImg.src = `${paths[pathIndex]}/${currentImage}`;
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla innych obrazów
                displayImg.style.display = 'block';
                displayImgCard.style.display = 'none';
            }

            currentStep = 1;
        } else {
            if (rangeCardsCheckbox.checked && cardImages.includes(currentImage)) {
                displayImg.src = `karty/${currentNumber}`;
                displayImg.classList.add('card-img'); // Dodaj klasę stylu do obrazów kart
                displayImg.style.display = 'block';
                displayImgCard.style.display = 'none';
            } else {
                displayImgCard.textContent = currentNumber; // Wyświetl numer jako tekst
                displayImg.classList.remove('card-img'); // Usuń klasę stylu dla innych obrazów
                displayImgCard.style.display = 'block';
                displayImg.style.display = 'none';
            }

            currentStep = 0;

            if (remainingNumbers === 0) {
                setTimeout(() => alert('Wszystkie obrazy zostały wyświetlone!'), 100);
            }
        }
    }
};

modeSelect.addEventListener('change', resetGame);
range900to999Checkbox.addEventListener('change', resetGame);
range800to899Checkbox.addEventListener('change', resetGame);
range700to799Checkbox.addEventListener('change', resetGame);
range600to699Checkbox.addEventListener('change', resetGame);
range500to599Checkbox.addEventListener('change', resetGame);
range400to499Checkbox.addEventListener('change', resetGame);
range300to399Checkbox.addEventListener('change', resetGame);
range200to299Checkbox.addEventListener('change', resetGame);
range100to199Checkbox.addEventListener('change', resetGame);
range000to099Checkbox.addEventListener('change', resetGame);
range00to99Checkbox.addEventListener('change', resetGame);
range0to9Checkbox.addEventListener('change', resetGame);
rangeCardsCheckbox.addEventListener('change', resetGame);
customRangeCheckbox.addEventListener('change', () => {
    customInputContainer.style.display = customRangeCheckbox.checked ? 'block' : 'none';
    resetGame();
});
processCustomInputButton.addEventListener('click', resetGame);

showButton.addEventListener('click', showNext);
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC') {
        showNext();
    }
});
resetGame();
