// 300-399.js
window.numbers300to399 = Array.from({ length: 100 }, (_, i) => (i + 300).toString());

window.images300to399 = [
    '399 - iMBiBicja.png', '398 - MałPoWanie.jpg', '397 - MałPKa.jpg', '396 - aMBicJa.jpg', '395 - aMBuLans.jpg',
    '394 - haMBuRger.jpg', '393 - MoPeMope.jpg', '392 - szaMPaN.jpg', '391 - MuPeT elmo.png', '390 - MoPS.jpg',
    '389 - aMFiBia.jpg', '388 - MeWo For.jpg', '387 - MuFKa.jpg', '386 - MaFiJny.jpg', '385 - MuFLon.jpg',
    '384 - MyszoWóR.jpeg', '383 - MóWiMy.jpg', '382 - MuFiNka.jpg', '381 - MuFTi.jpg', '380 - MeFiSto.jpg',
    '379 - MeGaParsek.png', '378 - MeGaFon.jpg', '377 - MGiełKa.jpg', '376 - MiKołaJ.jpg', '375 - MeGaLodon.jpg',
    '374 - MiKRofon.jpg', '373 - MaGMa.jpg', '372 - MaGNes.jpg', '371 - MuszKieTer.jpg', '370 - MaGaZynek.jpg',
    '369 - MaJBach.jpg', '368 - MaJoWnik.jpg', '367 - MyJKa.jpg', '366 - MiJaJący.jpg', '365 - MiJaLny.jpg',
    '364 - MoJRy.jpg', '363 - MaJMonides.jpg', '362 - MaJoNez.jpg', '361 - MaJTki.jpg', '360 - MaJSter.jpg',
    '359 - MeLBa.jpg', '358 - MaLWa.jpg', '357 - MiLKa.jpeg', '356 - MiLicJa.jpg', '355 - MiLLennium.jpg',
    '354 - MLeczaRka.jpg', '353 - MaLM.jpg', '352 - MeLoN.jpg', '351 - oMLeT.jpg', '350 - MeLaSa.jpg',
    '349 - MiRaBelka.jpg', '348 - MaRcheW.jpg', '347 - MoRGersztern.jpg', '346 - MaRyJa.jpg', '345 - MuRaL.jpg',
    '344 - MiRRa.jpg', '343 - MaRMolada.png', '342 - ośMioRNica.jpg', '341 - eMeRyT.jpg', '340 - MRóZ.jpg',
    '339 - MaMBa.jpg', '338 - MuMioWy.jpg', '337 - MaMałyGa.jpg', '336 - MałoMieJski.jpg', '335 - MaMeLuk.jpg',
    '334 - MuchoMoR.jpg', '333 - MaMMograf.jpg', '332 - MuMiNek.jpg', '331 - MaMuT.jpg', '330 - M&MS.jpg',
    '329 - MaszyNoPis.jpg', '328 - MaNiFest.jpg', '327 - szMiNKa.jpeg', '326 - MNieJszy.jpg', '325 - MaNeLa.jpg',
    '324 - MNożaRka.jpg', '323 - MNiaM.jpg', '322 - MiNioNek.jpg', '321 - MoNiTor.jpg', '320 - MiNStrel.jpg',
    '319 - MoToPompa.jpg', '318 - szMaTłaWiec.jpg', '317 - MłoTeK.jpg', '316 - MaDeJowe łoże.jpg', '315 - MoTyL.jpg',
    '314 - huMiDoR.jpg', '313 - MaDaMe.jpg', '312 - śMieTNik.jpg', '311 - MeToDa.png', '310 - MeDuZa.jpg',
    '309 - MeZoPitek.jpg', '308 - MaSyWny.jpg', '307 - MaSKa.jpg', '306 - MaSaJ.jpg', '305 - MaSeLniczka.jpg',
    '304 - MaZuRek.jpg', '303 - MuZułManin.jpg', '302 - MaSoNeria.jpg', '301 - MoST.jpg', '300 - MaSażyStka.jpg'
];

window.numberImageMap300to399 = window.images300to399.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});



