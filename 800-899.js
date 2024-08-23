// 800-899.js
window.numbers800to899 = Array.from({ length: 100 }, (_, i) => (i + 800).toString());

window.images800to899 = [
    '899 - WBęBnić.JPG', '898 - WyBaWiciel.jpg', '897 - WBieGać.JPG', '896 - WBiJacz.jpg', '895 - WyBieLacz.jpg',
    '894 - WiBRator.jpg', '893 - WPoMpować.jpg', '892 - WaPNiak.jpg', '891 - WyBuDowania.jpg', '890 - WPuSt.png',
    '889 - WyWaBić.png', '888 - WyWieW.jpg', '887 - FiFKa.jpg', '886 - FuFaJka.jpg', '885 - WaFeLek.jpg', '884 - WyWRotka.jpg',
    '883 - WaWM.jpg', '882 - WyWiNąć.jpg', '881 - WyśWieTlacz.jpg', '880 - WąWóZ.jpg', '879 - WaGaBunda.jpg',
    '878 - WiGWam.jpg', '877 - Wykałaczka.jpg', '876 - FiKcJa.jpg', '875 - WęGieL.jpg',
    '874 - FaKiR.jpg', '873 - FoKMaszt.png', '872 - WaGiNa.jpg', '871 - FaGoT.jpg', '870 - FaKS.jpg',
    '869 - WoJPol.jpg', '868 - FaJFus.jpg', '867 - FaJKa.jpg', '866 - FuJiJama.jpg', '865 - oFicJaLny.jpg',
    '864 - FaJeRwerk.jpg', '863 - WoJMir.jpg', '862 - FaJaNs.jpg', '861 - FaJTłapa.jpg', '860 - heFaJStos.jpg',
    '859 - WieLBiciel.jpg', '858 - WLeW.jpg', '857 - WiLKołak.jpg', '856 - FLeJa.jpg', '855 - FaLLus.jpg',
    '854 - FLaRa.jpg', '853 - FLaMaster.jpg', '852 - WeLoN.jpg', '851 - FLeT.jpg', '850 - WaLiZa.jpg',
    '849 - WRóBel.jpg', '848 - FRaWaszi.jpg', '847 - WaRKocz.jpg', '846 - FReJa.jpg', '845 - FRędzeL.jpg',
    '844 - FeRRari.jpg', '843 - FoReMka.jpg', '842 - FiRaNka.jpg', '841 - WieRTło.jpg', '840 - FoRSa.jpg',
    '839 - WoMBat.jpg', '838 - WłaMyWacz.jpg', '837 - FuMiGant.jpg', '836 - WyMiJanie.jpg', '835 - FaMiLia.jpg',
    '834 - WyMaRły.jpg', '833 - FeMMe.jpg', '832 - WiedźMiN.jpg', '831 - WyMioTy.jpg', '830 - WyMaZ.jpg',
    '829 - FeNoPlast.jpg', '828 - FaNFara.jpg', '827 - FeNiKs.jpg', '826 - WyNaJem.jpg', '825 - FiNaLizacja.jpg',
    '824 - WiNRar.jpg', '823 - FeNoMen.png', '822 - WaNNa.jpg', '821 - FoNTanna.jpg', '820 - WNuSia.jpg',
    '819 - FoTooPornik.jpg', '818 - FiToFag.jpg', '817 - WóDKa.jpg', '816 - WyDóJ.jpg', '815 - WiDeLec.jpg',
    '814 - WiaDRo.jpg', '813 - WiDMo.jpg', '812 - FeToN.jpg', '811 - FeTT boba.jpg', '810 - FeTyszyZm.jpg',
    '809 - WSPółżycie.jpg', '808 - WoZoWnia.jpg', '807 - WóZeK.jpg', '806 - WiZJer.jpg', '805 - WiSieLec.jpg',
    '804 - WeZyR.jpg', '803 - WaZoM.jpg', '802 - WiSieNka.jpg', '801 - FauST.jpg', '800 - FaSceS.png'
];

window.numberImageMap800to899 = window.images800to899.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


