// karty_img.js
window.cardImages = [
    'img2spades.jpg', 'img3spades.jpg', 'img4spades.jpg', 'img5spades.jpg', 'img6spades.jpg',
    'img7spades.jpg', 'img8spades.jpg', 'img9spades.jpg', 'img10spades.jpg', 'imgJspades.jpg',
    'imgQspades.jpg', 'imgKspades.jpg', 'imgAspades.jpg',
    'img2hearts.jpg', 'img3hearts.jpg', 'img4hearts.jpg', 'img5hearts.jpg', 'img6hearts.jpg',
    'img7hearts.jpg', 'img8hearts.jpg', 'img9hearts.jpg', 'img10hearts.jpg', 'imgJhearts.jpg',
    'imgQhearts.jpg', 'imgKhearts.jpg', 'imgAhearts.jpg',
    'img2diamonds.jpg', 'img3diamonds.jpg', 'img4diamonds.jpg', 'img5diamonds.jpg', 'img6diamonds.jpg',
    'img7diamonds.jpg', 'img8diamonds.jpg', 'img9diamonds.jpg', 'img10diamonds.jpg', 'imgJdiamonds.jpg',
    'imgQdiamonds.jpg', 'imgKdiamonds.jpg', 'imgAdiamonds.jpg',
    'img2clubs.jpg', 'img3clubs.jpg', 'img4clubs.jpg', 'img5clubs.jpg', 'img6clubs.jpg',
    'img7clubs.jpg', 'img8clubs.jpg', 'img9clubs.jpg', 'img10clubs.jpg', 'imgJclubs.jpg',
    'imgQclubs.jpg', 'imgKclubs.jpg', 'imgAclubs.jpg'
];

window.cardToImageMap = window.cards.reduce((acc, card, index) => {
    acc[card] = window.cardImages[index];
    return acc;
}, {});
