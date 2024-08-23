// 700-799.js
window.numbers700to799 = Array.from({ length: 100 }, (_, i) => (i + 700).toString());

window.images700to799 = [
    '799 - KeBaB.jpg', '798 - GłuPaWka.jpg', '797 - GąBKa.jpg', '796 - GuPiJos.jpg', '795 - KiBeL.jpg',
    '794 - KacPeRek duszek.jpg', '793 - KaBoMba.jpg', '792 - KaBaNosy.jpg', '791 - KaPTur.jpg', '790 - KiełBaSa.jpg',
    '789 - KWaPiszon.jpg', '788 - KaFFa.jpg', '787 - GWoździK.jpg', '786 - KaFyJ.jpg', '785 - KuFLe.jpg',
    '784 - KaWioR.jpg', '783 - GWiM.jpg', '782 - GóWNo.jpg', '781 - KoWaDło.jpg', '780 - GWiZdek.jpg',
    '779 - KoKPit.jpg', '778 - KoKWa.jpg', '777 - KoKoszKa.jpg', '776 - KoKoJumbo.jpg', '775 - KuGieL.jpeg',
    '774 - KuKuRydza.jpg', '773 - KiKiMora.jpg', '772 - KaGaNiec.jpg', '771 - KaKTus.jpg', '770 - KoKoS.jpg',
    '769 - KoJPasz.jpg', '768 - KaJWa.jpg', '767 - KaJaK.jpg', '766 - KaJaJi school.jpg', '765 - KaJoLi.jpg',
    '764 - KaJoRina.jpg', '763 - KaJMak.jpg', '762 - KiJaNka.jpg', '761 - KaJDanki.jpg', '760 - KaJZerka.jpg',
    '759 - KLePsydra.jpg', '758 - KaLaFior.jpg', '757 - KLaKier.jpg', '756 - KaLeJdoskop.png', '755 - GodziLLa.jpg',
    '754 - GoLaRka.jpg', '753 - KLaMka.jpg', '752 - GLoN.jpg', '751 - KaszaLoT.jpg', '750 - GLiSta.jpg',
    '749 - GRaBki.jpg', '748 - KRaWat.jpg', '747 - KoRKociąg.jpg', '746 - KRaJalnica.jpg', '745 - GóRaL.jpg',
    '744 - KuRoRt.jpg', '743 - KRoMka.png', '742 - KRaN.jpg', '741 - KReT.jpg', '740 - KaRuZela.jpg',
    '739 - KoMPuter.jpg', '738 - KoMiWojażer.jpg', '737 - GuMKa.jpg', '736 - KołoMyJe.jpg', '735 - aKuMuLator.jpg',
    '734 - KałaMaRnica.jpg', '733 - KoMMando.jpg', '732 - KoMiN.jpg', '731 - KoMeTa.jpg', '730 - KoMiSja.jpg',
    '729 - KaNaPka.jpg', '728 - KoNeWka.jpg', '727 - KaNGur.jpg', '726 - KaNJo.jpg', '725 - KiNoL.jpg',
    '724 - GeNeRał.jpg', '723 - GNoM.jpg', '722 - GheNNa.jpg', '721 - KoNDom.jpg', '720 - oGNiSko.jpg',
    '719 - KaTaPulta.jpg', '718 - KoTWica.jpg', '717 - KłóDKa.jpg', '716 - KiTaJec.jpg', '715 - KoTLet.jpg',
    '714 - KościoTRup.jpg', '713 - KaTaMaran.jpg', '712 - KaszTaN.jpg', '711 - KaDeT.jpg', '710 - KuTaS.jpg',
    '709 - eKSPres.jpg', '708 - KłoSoWiec 2.jpg', '707 - KaSK.jpg', '706 - KaSJer.jpg', '705 - KiSieL.jpg',
    '704 - KoSiaRka.jpg', '703 - KoSMita.jpg', '702 - KaSyNo.jpg', '701 - KaSTet.jpg', '700 - KaSSa.JPG'
];

window.numberImageMap700to799 = window.images700to799.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


