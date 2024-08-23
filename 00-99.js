// 00-99.js
window.numbers00to99 = Array.from({ length: 100 }, (_, i) => (i < 10 ? '0' + i : i.toString()));

window.images00to99 = [
    '99 - BaBa.jpg', '98 - PaW.jpg', '97 - ByK.jpg', '96 - PaJac 2.jpeg', '95 - PaLec.jpg',
    '94 - PRoca.jpg', '93 - PiżaMa.jpg', '92 - PioN.jpg', '91 - BuT.jpg', '90 - BuZia.jpg',
    '89 - WiePrz.jpeg', '88 - FaFuła.jpg', '87 - WaGa.jpg', '86 - WaJcha.jpg', '85 - WaLec.jpg',
    '84 - WaRa.jpg', '83 - FaMa.jpg', '82 - WiśNia.jpg', '81 - WaTa.jpg', '80 - WąSy.jpg',
    '79 - KuBuś.jpg', '78 - KaWa.jpg', '77 - KuK.jpg', '76 - KoJec.jpg', '75 - KuLa.jpg',
    '74 - KuRa.jpg', '73 - KaMień.jpg', '72 - KiNo.jpg', '71 - KoT.jpg', '70 - KoSa.jpg',
    '69 - JaBłoń.jpg', '68 - JaW.jpg', '67 - JuK.jpg', '66 - JaJo.jpg', '65 - JeLeń.jpg',
    '64 - JaRać.jpg', '63 - JaMa.jpg', '62 - JoN.jpg', '61 - JoDła.jpg', '60 - JaZ.jpg',
    '59 - LuPa.jpg', '58 - LeW.jpg', '57 - LeK.jpg', '56 - LeJ.jpg', '55 - LaLa.jpg',
    '54 - LauR.jpg', '53 - LaMa.jpg', '52 - LiNa.jpg', '51 - LoT.jpg', '50 - Lis.jpg',
    '49 - RoPucha.jpg', '48 - RaFa.jpg', '47 - RęKa.jpg', '46 - RóJ.jpg', '45 - oRaL.jpg',
    '44 - RuRa.jpg', '43 - RaMa.jpg', '42 - RóżaNiec.jpg', '41 - RaDio.jpg', '40 - RyZa.jpg',
    '39 - MoP.jpg', '38 - MaFia.jpg', '37 - MacKa.jpg', '36 - żMiJa.jpg', '35 - MLecz.jpg',
    '34 - MuR.jpg', '33 - MuMia.jpg', '32 - MiNa.jpg', '31 - MyDło.jpg', '30 - MiSio.jpg',
    '29 - NieBo.jpg', '28 - NóW.jpg', '27 - NoGa.jpg', '26 - NahaJ.jpg', '25 - NeL.jpg',
    '24 - NuR.jpg', '23 - NeMo.jpg', '22 - NeoN.jpg', '21 - NaTa.jpg', '20 - NoS.jpg',
    '19 - DuPa.jpg', '18 - DrzWi.jpg', '17 - TaczKa.jpg', '16 - DoJrzała gruszka.jpg',
    '15 - TaLerz.jpg', '14 - TaRa.jpg', '13 - DyM.jpg', '12 - TaNiec.jpg', '11 - DuDy.jpg',
    '10 - TuZ.jpg', '09 - ZuPa.jpg', '08 - SoWa.jpg', '07 - SaK.jpg', '06 - SoJa.jpg',
    '05 - SóL.jpg', '04 - SeR.jpg', '03 - SMoła.jpg', '02 - SaNie.gif', '01 - STół.jpg',
    '00 - SoS.jpg'

];

window.numberImageMap00to99 = window.images00to99.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});
