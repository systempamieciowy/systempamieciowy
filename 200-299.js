
// 200-299.js
window.numbers200to299 = Array.from({ length: 100 }, (_, i) => (i + 200).toString());

window.images200to299 = [
     '299 - NaBaB.jpg', '298 - NaPaWarka.png', '297 - NuBuK.jpg', '296 - NaBóJ.jpg', '295 - NoBeL.jpg',
    '294 - NaPaRstek.jpg', '293 - NaPrzeMienny.jpg', '292 - NaPełNiacz.jpg', '291 - NePTun.jpg', '290 - aNuBiS.jpg',
    '289 - NoWoBogacki.jpg', '288 - NaWieW.jpg', '287 - NaWiGacja.jpg', '286 - NaWiJacz.jpg', '285 - iNWaLida.jpg',
    '284 - NoWoRodek.jpg', '283 - NoWoModna.jpg', '282 - NaWałNica.jpg', '281 - iNFułaT.jpg', '280 - NaWóZ.jpg',
    '279 - iNKuBator.jpg', '278 - iNKWizycja.jpg', '277 - NuGGet.jpg', '276 - NeGocJator.jpg', '275 - żoNGLer.jpg',
    '274 - NeKRomanta.png', '273 - eNiGMa.jpg', '272 - aNaKoNda.png', '271 - NaKTuz.jpg', '270 - NoKS (rosyjski nóż składany).jpg',
    '269 - NaJBogatszy.jpg', '268 - NaJśWiętszy.jpg', '267 - NaJGrubszy.jpg', '266 - NaJhoJniejszy.jpg', '265 - NaJhałaśLiwszy.jpg',
    '264 - oNeJRoidalny.jpg', '263 - NaJeMnik.jpg', '262 - NaszyJNik.jpg', '261 - NaJaDa.jpg', '260 - NaJSłabszy.jpg',
    '259 - NaLePka.jpg', '258 - NaLeWak.jpg', '257 - NieLoGiczny.jpg', '256 - NieLoJalny.jpg', '255 - NieLLo.gif',
    '254 - NaLaR.jpg', '253 - NiaLaMid.jpg', '252 - NaLeśNik.jpeg', '251 - iNhaLaTor.jpg', '250 - NeLSon.png',
    '249 - NoRBit.jpg', '248 - NaRWal.jpg', '247 - eNeRGizer.png', '246 - iNeRcJa.jpg', '245 - NaRośL.jpg',
    '244 - NoRRis chuck.jpg', '243 - NoRMit.jpg', '242 - NuRaN.jfif', '241 - NaRTa.jpg', '240 - NaRcyZ.png',
    '239 - NiMBus.jpg', '238 - NiMFa.jpg', '237 - NieMKa.jpg', '236 - NieMaJętny.jpg', '235 - NaMacaLny.jpg',
    '234 - NieśMieRtelnik.jpg', '233 - aNeMoMetr.jpg', '232 - NoMiNał.jpg', '231 - NaMioT.jpg', '230 - NeMeSis (bogini zemsty).jpg',
    '229 - haNNiBal.jpg', '228 - NeNuFar.jpg', '227 - NocNiK.jpg', '226 - NoNaJron.jpg', '225 - NoNszaLancja.jpg',
    '224 - NaNeRcz.png', '223 - NaNoMetr.jfif', '222 - Neo NiaNia.jpg', '221 - NaNDu.jpg', '220 - aNaNaS.jpg',
    '219 - NieToPerz.jpg', '218 - NaDWozie.png', '217 - iNDyK.jpg', '216 - NaDaJnik.jpg', '215 - haNTeLka.jpg',
    '214 - ceNTauR.jpg', '213 - NaDyMka.jpg', '212 - InDiaNin.jpg', '211 - NoTaTnik.jpg', '210 - NeTSuke.jpg',
    '209 - iNSPektor.jpg', '208 - NoSiWoda.jpg', '207 - NiZiołeK.jpg', '206 - NaZaJutrz.jpg', '205 - NoSaL.jpg',
    '204 - NaSRać.jpg', '203 - NieSMak.jpg', '202 - NaSioNko.jpg', '201 - eiNSTein.jpg', '200 - NeSeSer.jpg'
];

window.numberImageMap200to299 = window.images200to299.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


