// 900-999.js
window.numbers900to999 = Array.from({ length: 100 }, (_, i) => (i + 900).toString());

window.images900to999 = [
    '999 - BaoBaB.jpg', '998 - BoBoFrut.png', '997 - PaPuGa.jpg', '996 - PaPaJ.jpg', '995 - PoPieLniczka.jpg',
    '994 - PaPieRos.jpg', '993 - PaPaMobil.jpg', '992 - BęBeN.jpg', '991 - hiPoPoTam.jpg', '990 - BeBZon.jpg',
    '989 - PoWaB.jpg', '988 - BiFF.jpg', '987 - PiWKo.jpg', '986 - BiFyJ.jpg', '985 - BoWLing.jpg',
    '984 - PoWeR rangers.jpg', '983 - BoWieM.jpg', '982 - BałWaN.jpg', '981 - BeFszTyk.jpg', '980 - PoWóZ.jpg',
    '979 - BiszKoPt.jpg', '978 - BuKieW.jpg', '977 - BuKłaK.jpg', '976 - BąKoJad.jpg', '975 - BaGLama.jpg',
    '974 - PoKRętło.jpg', '973 - BiGMilk.jpg', '972 - BeKoN.jpg', '971 - BaGieTka.jpg', '970 - BoKS.jpg',
    '969 - BaJBot.jpg', '968 - BoJoWnik.png', '967 - PaJąK.jpg', '966 - uPaJaJąco.jpg', '965 - BoJLer.jpg',
    '964 - BaJeR.png', '963 - PoJeMnik.jpg', '962 - BaJaN.jpg', '961 - BaJaDerka.jpg', '960 - BeJSbol.png',
    '959 - BuLBasaur.jpg', '958 - BuLWa.jpg', '957 - PLecaK.jpg', '956 - PoLicJant.jpg', '955 - BeLL.jpg',
    '954 - BiLaRd.jpg', '953 - PaLMa.jpg', '952 - BaLoN.jpg', '951 - PaLeTka.jpg', '950 - PLaSter.jpg',
    '949 - PióRopusz.jpg', '948 - PaRóWki.jpg', '947 - PieRoGi.jpg', '946 - PRoJektor.jpg', '945 - PRaLka.jpg',
    '944 - BaRieRka.jpg', '943 - PiRaMida.jpg', '942 - PRyszNic.jpg', '941 - PoRTfel.jpg', '940 - PaRaSol.jpg',
    '939 - BoMBka.jpg', '938 - BMW.jpg', '937 - PłoMyK.jpg', '936 - PoMyJe.jpg', '935 - PoMaLuj.jpg',
    '934 - BuMeRang.jpg', '933 - PoMiMo.jpg', '932 - PoMNik.jpg', '931 - PoMiDor.jpg', '930 - PoMoSt.jpg',
    '929 - PaNoPilia.jpg', '928 - BeNeFicjent.jpg', '927 - PiNoKio.jpg', '926 - BaNJo.jpg', '925 - BiNoL.jpg',
    '924 - BaNdzioR.jpg', '923 - PNeuMatyk.jpg', '922 - BaNaN.jpg', '921 - PoNTon.jpg', '920 - PiNeZka.jpg',
    '919 - PoDPaska.jpg', '918 - PłeTWa.jpg', '917 - PoDuszKa.jpg', '916 - PoDeJrzany.jpg', '915 - PaTeLnia.jpg',
    '914 - PeTaRda.jpg', '913 - BaTMan.jpg', '912 - PochoDNia.jpg', '911 - BiDeT.jpg', '910 - PaToS.jpg',
    '909 - PoSyPka.jpg', '908 - PaSoWanie.jpg', '907 - BaZooKa.jpg', '906 - PaSJa.jpg', '905 - BuSoLa.jpg',
    '904 - PaZuR.jpg', '903 - PaSManteria.jpg', '902 - PaZNokcie.jpg', '901 - PaSTa.jpg', '900 - PiZZa.jpg'
];

window.numberImageMap900to999 = window.images900to999.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


