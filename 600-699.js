// 600-699.js
window.numbers600to699 = Array.from({ length: 100 }, (_, i) => (i + 600).toString());

window.images600to699 = [
     '699 - JaBBa.jpg', '698 - JeBoWóz.jpg', '697 - JaBłKo.jpg', '696 - oJcoBóJca.jpg', '695 - JaBoL.jpg',
    '694 - JaBRa.jpg', '693 - JeePMania.jpg', '692 - JaPoNka.jpg', '691 - JeBaDło.jfif', '690 - JaPS.jpg',
    '689 - JaWBone.jpg', '688 - JoFFrey.jpg', '687 - JeżóWKa.jpg', '686 - JaWaJka.jpg', '685 - JoWiLny.jpg',
    '684 - JaWoR.jpg', '683 - JeWeM.jpg', '682 - JaWNogrzesznice.jpg', '681 - JoWiTa.jpg', '680 - JeFSki samo.jpg',
    '679 - JuKeBox.jpg', '678 - JaKościoWy.jpg', '677 - JaGGernaut.jpg', '676 - JaKaJa.jpg', '675 - JeKyLl.png',
    '674 - JoGuRt.jpg', '673 - JoKohaMa.jpg', '672 - JaGNię.jpg', '671 - JaGoDa.jpg', '670 - aJaKS.jpg',
    '669 - JoJoBa.jpg', '668 - JaJoWar.jpg', '667 - JaJKo.jpg', '666 - JoJoJo.jpg', '665 - JoJoLion.jpg',
    '664 - JaJoR.jpg', '663 - JaJoMat.jpg', '662 - JaJeczNica.jpg', '661 - JoJoTale.jpg', '660 - JoJStic.jpg',
    '659 - JaLPa.jpg', '658 - JoLoW.jpg', '657 - JuLKa.jpg', '656 - JuLiJskie alpy.jpg', '655 - JoLLy żartowniś.jpg',
    '654 - JeLiciaRnia.jpg', '653 - hJeLMslev.jpg', '652 - JeLoNek.jpg', '651 - JeLiTa.jpg', '650 - JaśLiSka.png',
    '649 - JoRuBa.jpg', '648 - Je RoWan.jpg', '647 - JuReK.jpg', '646 - JuRaJski.jpg', '645 - JaRL.jpg',
    '644 - JeRRy.jpg', '643 - JaRMułka.jpg', '642 - aJRaN.jpg', '641 - JaRD.jpg', '640 - JuRySta.jpg',
    '639 - JuMPer.jpg', '638 - uJMoWać.jpg', '637 - JeMiołKa.jpg', '636 - JaMaJka.jpg', '635 - JeMieLnica.jpg',
    '634 - JeMuR.jpg', '633 - JiMMy.jpg', '632 - JaMNik.jpg', '631 - JaMiTi.jpg', '630 - JaMS chiński.jpg',
    '629 - JaśNiePan.jpg', '628 - ceJNoWa.png', '627 - czaJNiK.jpg', '626 - aJeNcJa.jpg', '625 - cyJaNożeLazin.jpg',
    '624 - JuNioR.jpg', '623 - JeNoMetr.jpg', '622 - JuNoNa.jpg', '621 - JeNoT.jpg', '620 - JeaNSy.jpg',
    '619 - JoDoBromowa sól.jpg', '618 - JeDWabnik.jpg', '617 - JuDoKa.jpg', '616 - JuDeJczyk.jpg', '615 - aJaToLlah.jpg',
    '614 - JąDRa.jpg', '613 - JaDoM.png', '612 - JeDNorożec.jpg', '611 - JaDeiT.jpg', '610 - JuDaiZm.jpg',
    '609 - JaSPis.jpg', '608 - JeżoZWierz.jpg', '607 - JaSKier.jpg', '606 - JeZu Już.jpg', '605 - aJSchyLos.jpg',
    '604 - JęZoR.jpg', '603 - eJSMond.jpg', '602 - JaSNowidzka.jpg', '601 - JoySTick.jpg', '600 - JaZZ.jpg'
];

window.numberImageMap600to699 = window.images600to699.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


