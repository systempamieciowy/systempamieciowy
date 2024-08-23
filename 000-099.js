// 000-099.js
window.numbers000to099 = Array.from({ length: 100 }, (_, i) => (i < 10 ? '00' + i : i < 100 ? '0' + i : i.toString()));

window.images000to099 = [
    '099 - SaPPoro.jpg', '098 - SPłaWik.jpg', '097 - ZaPałKa.jpg', '096 - SPoJler.jpg', '095 - ZaPaLniczka.jpg',
    '094 - ZeBRa.jpg', '093 - ZaPoMnienie.jpg', '092 - SPiNacz.jpg', '091 - SPoDek.jpg', '090 - SPiSa.jpg',
    '089 - SiWoPióry.jpg', '088 - SWiFt.jpg', '087 - SóWKa.jpg', '086 - ZaWiJas.jpg', '085 - SaFLor.jpg',
    '084 - SWaRóg.jpg', '083 - SuWMiarka.jpg', '082 - SFiNks.jpg', '081 - SWeTer.jpg', '080 - SWaStyka.jpg',
    '079 - SuKuB.png', '078 - SKaFander.jpg', '077 - SKaKanka.jpg', '076 - SKóJka.jpg', '075 - SKaLpel.jpg',
    '074 - ZeGaR.jpg', '073 - eSKiMos.jpg', '072 - SyGNet.jpg', '071 - SKrzyDło.jpg', '070 - ZaKaZ.png',
    '069 - SeJPak.jpg', '068 - SoJoWy.jpg', '067 - ZaJączeK.jpg', '066 - aSocJacJa.jpg', '065 - SocJaLista.jpg',
    '064 - SaJRa.jpg', '063 - SeJMitar.jpg', '062 - SeJNer.jpg', '061 - ZJaDacz.jpg', '060 - SJeSta.jpg',
    '059 - SLaPstick.jpg', '058 - ZLeW.jpg', '057 - SuLKi.jpg', '056 - SLaJd.png', '055 - SLaLom.jfif',
    '054 - SoLaRium.jpg', '053 - SaLaMi.jpg', '052 - SoLNiczka.jpg', '051 - SaLuT.jpg', '050 - SiLoS.png',
    '049 - SieRP.jpg', '048 - SeRaFin.jpg', '047 - ShReK.jpg', '046 - SuRoJadka.jpg', '045 - ZRośLak.jpg',
    '044 - SheRRy.jpg', '043 - SaRuMan.jpg', '042 - SyReNka.jpg', '041 - SuRDut.jpg', '040 - ZaRaZek.jpg',
    '039 - ZoMBie.jpg', '038 - ZMyWarka.jpg', '037 - SMoczeK.jpg', '036 - ZMaJstrować.jpg', '035 - SaMoLot.jpg',
    '034 - SMeRf.jpg', '033 - SaMuM.jpg', '032 - ZieMNiak.jpg', '031 - ZMioTka.jpg', '030 - ZMaZywacz.jpg',
    '029 - SiNoBrody.jpg', '028 - SNoWboard.jpg', '027 - SłoNKo.jpg', '026 - SNaJperka.jpg', '025 - SyNaLek.jpg',
    '024 - SoNaR.jpg', '023 - ZNaMię.jpg', '022 - ZaNNi.jpg', '021 - SaNDał.jpg', '020 - ZeNZa.jpg',
    '019 - SToPa.jpg', '018 - STaW.jpg', '017 - STrzyKawka.jpg', '016 - SToJak.jpg', '015 - SToLnica.jpg',
    '014 - STRuś.jpg', '013 - STeMpel.jpg', '012 - SToNoga.jpg', '011 - STaTyw.jpg', '010 - SeDeS.jpg',
    '009 - ZeSPół.jpg', '008 - ZaSuWa.jpg', '007 - SSaK.jpg', '006 - SoSJerka.jpg', '005 - SiSaL.jpg',
    '004 - SoSeR.jpg', '003 - SeZaM.jpg', '002 - ZaSłoNa.jpg', '001 - ZeSTaw.jpg', '000 - SaSSolin (minerał).jpg'
];

window.numberImageMap000to099 = window.images000to099.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


