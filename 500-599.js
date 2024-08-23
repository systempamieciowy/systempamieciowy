// 500-599.js
window.numbers500to599 = Array.from({ length: 100 }, (_, i) => (i + 500).toString());

window.images500to599 = [
    '599 - LoBBysta.jpg', '598 - LoBoWać.jpg', '597 - LuPKa.png', '596 - LiBacJa.jpg', '595 - LoBeLia.jpg',
    '594 - haLaBaRda.jpg', '593 - aLBuM.jpg', '592 - LePiaNka.jpg', '591 - LaPTop.jpg', '590 - LaPiS.jpg',
    '589 - aLFaBet.jpg', '588 - LuFFa.jpg', '587 - oLiWKa.jpg', '586 - eLeWacJa.jpg', '585 - LioFiLizator.jpg',
    '584 - szLaFRok.jpg', '583 - aLuWiuM.jpg', '582 - cLoWN.jpg', '581 - LeWaTywa.jpg', '580 - LWiSko.jpg',
    '579 - heLiKoPter.jpg', '578 - LiKWidator.jpg', '577 - LeKKoatleta.jpg', '576 - LoKaJ.jpg', '575 - LiGuLe.jpg',
    '574 - LeKaRka.jpg', '573 - aLKoMat.jpg', '572 - haLoGeN.jpg', '571 - eLeKTron.jpg', '570 - eLiKSir.jpg',
    '569 - LeJB.jpg', '568 - LeJoWy lejek.jpg', '567 - LeJeK.jpg', '566 - aLe JoJo !.jpg', '565 - LoJaLista.jpg',
    '564 - oLeJaRka.jpg', '563 - LacJuM.png', '562 - LeJNia.jpg', '561 - LeJDis.jpg', '560 - LeJS.png',
    '559 - LiLiPut.jpg', '558 - LiLoWiec.jpg', '557 - LaLKa.jpg', '556 - LiLiJka.png', '555 - aLLeLuja.jpg',
    '554 - LiLaRóż.jpg', '553 - LeLuM.jpg', '552 - aLLieN.jpg', '551 - aLLaDyn.jpg', '550 - LaLuSiowaty.jpg',
    '549 - chLoRoBenzen.jpg', '548 - LaRWa.jpg', '547 - LauRKa.jpg', '546 - iLiRyJski jaskier.jpg', '545 - chLoReLla.jpg',
    '544 - LuRRose.jpg', '543 - aLaRM.jpg', '542 - LoRNetka.jpg', '541 - LoRD.jpg', '540 - LacRoSse.jpg',
    '539 - LaMPa.jpg', '538 - LiMFa.jpg', '537 - śLiMaK.jpg', '536 - aLMeJa.jpg', '535 - LaMeLka.jpg',
    '534 - LeMuR.jpg', '533 - LeMMon.jpg', '532 - LeMiNg.jpg', '531 - LiMiTer.jpg', '530 - LiMuZyna.jpg',
    '529 - LuNaPark.jpg', '528 - LeNiWiec.jpg', '527 - LoNGan.jpg', '526 - LiNiJka.jpg', '525 - LaNoLina.jpg',
    '524 - LNiaRstwo.jpg', '523 - LaNaMetr.jpg', '522 - LeNiN.jpg', '521 - LuNeTa.jpg', '520 - LiNoSkoczek.jpg',
    '519 - LiToPtern.jpg', '518 - LaTaWiec.jpg', '517 - LoTKa.jpg', '516 - LuDoJad.jpg', '515 - LuDoLfina.png',
    '514 - LaTRyna.jfif', '513 - LoDołaMacz.jpg', '512 - LoTNia.jpg', '511 - LoTTo.jpg', '510 - LoToS.jpg',
    '509 - LeZBijki.jpg', '508 - LiZaWka.jpg', '507 - LiZaK.jpg', '506 - iLuZJa.jpg', '505 - LaZuL (madame).jpg',
    '504 - LaSeR.jpg', '503 - LaSeM.jpg', '502 - LiZeNa.JPG', '501 - LiST.png', '500 - LaSSo.jpg'
];

window.numberImageMap500to599 = window.images500to599.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


