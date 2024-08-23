// 400-499.js
window.numbers400to499 = Array.from({ length: 100 }, (_, i) => (i + 400).toString());

window.images400to499 = [
    '499 - RaBaB.jpg', '498 - RaBoWać.jpg', '497 - śRuBoKręt.jpg', '496 - RyBoJaszczur.jpg', '495 - RoBaL.jpg',
    '494 - ceRBeR.jpg', '493 - RaPMan.jpg', '492 - cheRuBiNek.jpg', '491 - RoBoT.jpg', '490 - aRBuZ.jpg',
    '489 - ReFBant.jpg', '488 - ReFoWać.jpg', '487 - żaRóWKa.jpg', '486 - RyFeJ.jpg', '485 - ReWoLwer.jpg',
    '484 - RoWeR.jpg', '483 - ReFMaszynka.jpg', '482 - czaRoWNica.jpg', '481 - RyFT.png', '480 - ReWiZja.jpg',
    '479 - RuGBy.jpg', '478 - RęKaWiczka.jpg', '477 - ReGGe.jpg', '476 - RęKoJeść.jpg', '475 - cyRKieL.jpg',
    '474 - ReGRes.jpg', '473 - ReKoMpensata.jpg', '472 - ReGiNa.jpg', '471 - RaKieTa.jpg', '470 - iRoKeZ.jpg',
    '469 - RoJołaPka.jpg', '468 - RaJFur.jpg', '467 - RyJeK.jpg', '466 - RuJaJ.jpg', '465 - RoJaLizm.jpg',
    '464 - RaJeR 2.jpg', '463 - RaJMund.jpg', '462 - ReJeNt.jpg', '461 - RaJDowiec 2.jpg', '460 - RaJStopy.jpg',
    '459 - uRLoP.jpg', '458 - ReLieF.jpg', '457 - RoLKi.jpg', '456 - ReLacJa.jpg', '455 - RaLLy.jpg',
    '454 - RoLeRcoster.jpg', '453 - RoLMops.jpg', '452 - RoLNik.jpg', '451 - RoLaDa.jpg', '450 - RiLSan.jpg',
    '449 - oRłoRyB.jpg', '448 - RuRóWka.jpg', '447 - RuRKa z kremem.jpg', '446 - iRRacJonalny.jpg', '445 - RuRaLizm.jpg',
    '444 - eRRoR.png', '443 - RRM.jpg', '442 - aRRiaN.jpeg', '441 - RoRaTy.jpg', '440 - RuRoSuszarka.jpg',
    '439 - RaMPa.jpg', '438 - cRoMWell.jpg', '437 - ceRaMiKa.jpg', '436 - RaMaJana.jpg', '435 - RaMoL.jpg',
    '434 - ReMoRy.jpg', '433 - RóMMel.jpg', '432 - haRMoNijka.jpg', '431 - aRMaTa.jpg', '430 - ReMiZa.jpg',
    '429 - RyNoPlastyka.jpg', '428 - ReNiFer.jpg', '427 - RęczNiK.jpg', '426 - RóżNoJęzyczny.jpg', '425 - aRNoLd.jpg',
    '424 - RaNczeR.jpg', '423 - ReNoMa.jpg', '422 - RyNNa.jpg', '421 - RoNDel.jpg', '420 - ReNciSta.png',
    '419 - RaDioBiologia.jpg', '418 - RyDWan.jpg', '417 - RaDełKo.jpg', '416 - RaDiacJa.jpg', '415 - RyDeL.png',
    '414 - RaDaR.jpg', '413 - eRoToMan.jpg', '412 - RoDoNit.jpg', '411 - RoTTerdam.jpg', '410 - RDeSt.jpg',
    '409 - ReSPirator.jpg', '408 - RySoWnica.jpg', '407 - RóZGa.jpg', '406 - RoZeJm.jpg', '405 - aeRoZoL.jpg',
    '404 - RoZaRium.jpg', '403 - RoZMaryn.jpg', '402 - RuSiNka.jpg', '401 - chRuST.jpg', '400 - RoZSyp.jpg'
];

window.numberImageMap400to499 = window.images400to499.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


