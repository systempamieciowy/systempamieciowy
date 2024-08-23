// 100-199.js
window.numbers100to199 = Array.from({ length: 100 }, (_, i) => (i + 100).toString());

window.images100to199 = [
    '199 - DuBBing.jpg', '198 - ToPoWy.jpg', '197 - szTaBKa.jpg', '196 - oDBiJak do kawy.jpg', '195 - TaBLiczka czekolady.jpg',
    '194 - ToPóR.jpg', '193 - DoPaMina.jpg', '192 - TaPczaN.jpg', '191 - DeBeT.jpg', '190 - TiPSy.jpg',
    '189 - DeFiBrylator.jpg', '188 - ToFFi.jpg', '187 - DachóWKa.jpg', '186 - DeWocJonalia.jpg', '185 - TaFLa.jpg',
    '184 - łaDoWaRka.jpg', '183 - TuWiM.png', '182 - DyWaN.jpg', '181 - DyFTeryt.jpg', '180 - TWiSter.jpg',
    '179 - DłuGoPis.jpg', '178 - TyKWa.jpeg', '177 - DiKKa.jpg', '176 - eDuKacJa.jpg', '175 - DeKieL.jfif',
    '174 - TyGRys.jpg', '173 - DoGMat.jfif', '172 - TuKaN.jpg', '171 - DaKTyl.jpg', '170 - TaKSówka.jpg',
    '169 - TaJPan.jpg', '168 - TaJFun.jpg', '167 - DóJKa.jpg', '166 - TuJaJa.jfif', '165 - TaJLandia.jpg',
    '164 - DoJaRka.jpg', '163 - TaJeMnica.jpg', '162 - TaJNiak.png', '161 - ToJaD.jpg', '160 - DoJaZd.jpg',
    '159 - TuLiPan.jpg', '158 - TeLeWizor.jpg', '157 - TeLeGraf.jpg', '156 - DeLicJa.jpg', '155 - TeLLur.jpg',
    '154 - TaLaRek.jpeg', '153 - DaLMatyńczyk.jpg', '152 - DyLiżaNs.jpg', '151 - DiLDo.jpg', '150 - TeLeSkop.jpg',
    '149 - ToReBka.jpg', '148 - TRuFle.jpg', '147 - TRaKtor.jpg', '146 - TRóJząb.jpg', '145 - DuRieL.gif',
    '144 - TeRRorysta.jpg', '143 - TRaMwaj.jpg', '142 - TRoN.jpg', '141 - ToRT.jpg', '140 - TRuSkawka.jpg',
    '139 - TeMPerówka.jpg', '138 - DoMoFon.jpg', '137 - DeMoGorgon.jpg', '136 - DoMeJkit.jpg', '135 - TrzMieL.jpg',
    '134 - DMuchaRka.jpg', '133 - DeMM.jpg', '132 - DeMoN.png', '131 - DoMaTor.jpg', '130 - DoMeStos.jpg',
    '129 - TaNcBuda.jpg', '128 - TyNF.jpg', '127 - szTaNGa.jpg', '126 - DoNacJa.jpg', '125 - DoNaLd.jpg',
    '124 - ToNeR.jpg', '123 - DyNaMo.jpg', '122 - DaNoNki.jpg', '121 - DoNuT.jpg',
    '120 - DiNoZaur.jpg', '119 - DeaDPool.jpg', '118 - DaToWnik.png', '117 - DęTKa.png', '116 - DoDaJnik.jpg',
    '115 - TeoDoLit.jpg', '114 - DeTRytus.jpg', '113 - ToTeM.jpg', '112 - TyTaN.jpg', '111 - TuTTi.jpg',
    '110 - TyTuS.jpg', '109 - DeSPerat.jpg', '108 - DoSuW.jpg', '107 - DySKietka.jpg', '106 - DySocJacja.png',
    '105 - DuSicieL.jpg', '104 - DeSeR.jpg', '103 - TaSMański diabeł.jpg', '102 - TSuNami.jpg', '101 - ToST.jpeg',
    '100 - TaZoS.jpg'
];

window.numberImageMap100to199 = window.images100to199.reduce((acc, image) => {
    const number = image.split(' - ')[0];
    acc[number] = image;
    return acc;
}, {});


