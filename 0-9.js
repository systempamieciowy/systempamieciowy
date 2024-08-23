// 0-9.js
window.numbers0to9 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

window.images0to9 = [
    '0 - Zło.jpg', '1 - Taca.jpg', '2 - Nóż.jpg', '3 - Mysz.jpg', '4 - Róża.jpg', 
    '5 - Liść.jpg', '6 - Jeż.jpg', '7 - Kość.jpg', '8 - Wąż.jpg', '9 - Pszczoła.jpg'
];

window.numberImageMap0to9 = window.images0to9.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});
