// ========================================
// DATA.JS - Game Data & Level Generation
// Mission 6: TELESCOPE — STTM
// 10 constellations, trilingual (uz/ru/en)
// ========================================

const ZIJ_DATA = [
    {
        // LEVEL 1
        name: {
            uz: "KICHIK AYIQ",
            ru: "МАЛАЯ МЕДВЕДИЦА",
            en: "URSA MINOR"
        },
        desc: {
            uz: "Qutb yulduzi (Polaris) joylashgan kichik cho'mich.",
            ru: "Содержит Полярную звезду — главный ориентир северного неба.",
            en: "Contains Polaris, the North Star."
        },
        funFact: {
            uz: "Bu turkumdagi Qutb yulduzi aslida uchta yulduzdan iborat: oddiy ko'z bilan bitta nuqta bo'lib ko'rinadi, lekin teleskopda yana ikkita yo'ldoshi ko'rinadi. Ulug'bek buni bilmagan — uning sekstanti bunday kattalashtirishni bermagan.",
            ru: "Полярная звезда в этом созвездии на самом деле тройная: невооружённым глазом она кажется одной точкой, но в телескоп видны ещё две звезды-спутника. Улугбек этого не знал — его секстант не давал такого увеличения.",
            en: "Polaris in this constellation is actually a triple star: with the naked eye it looks like a single point, but through a telescope you can see two more companion stars. Ulugbek didn't know this — his sextant couldn't magnify that much."
        },
        stars: [{x:0, y:0}, {x:1.5, y:0.5}, {x:3, y:1}, {x:4, y:2}, {x:5, y:2}, {x:5, y:0.5}, {x:4, y:0.5}]
    },
    {
        // LEVEL 2
        name: {
            uz: "KATTA AYIQ",
            ru: "БОЛЬШАЯ МЕДВЕДИЦА",
            en: "URSA MAJOR"
        },
        desc: {
            uz: "Yetti yulduzdan iborat mashhur katta cho'mich.",
            ru: "Семь ярких звёзд, образующих Ковш.",
            en: "Seven bright stars forming the Big Dipper."
        },
        funFact: {
            uz: "Cho'michning dastasida Mitsar yulduzi bor — uning yonida oddiy ko'z bilan ikkinchi yulduz, Alkor ko'rinadi. Teleskop ostida esa Mitsarning o'zi ham qo'sh yulduz ekani ma'lum bo'ladi. Bu teleskopda kashf etilgan birinchi qo'sh yulduz — 1617-yilda.",
            ru: "В ручке Ковша есть звезда Мицар — рядом с ней невооружённым глазом видна вторая, Алькор. В телескоп оказывается, что Мицар сам по себе двойной. Это первая двойная звезда, открытая в телескоп — в 1617 году.",
            en: "In the handle of the Big Dipper is the star Mizar — next to it, with the naked eye, you can see a second star, Alcor. Through a telescope, Mizar itself turns out to be a double star. It was the first double star discovered with a telescope — in 1617."
        },
        stars: [{x:-4, y:3}, {x:-2, y:2.5}, {x:0, y:2}, {x:1, y:0}, {x:1, y:-2}, {x:4, y:-2}, {x:4, y:0}]
    },
    {
        // LEVEL 3
        name: {
            uz: "KASSIOPEYA",
            ru: "КАССИОПЕЯ",
            en: "CASSIOPEIA"
        },
        desc: {
            uz: "Efiopiya malikasi, osmondagi 'W' harfi.",
            ru: "Королева Эфиопии, форма буквы 'W'.",
            en: "The Queen of Ethiopia, shaped like a 'W'."
        },
        funFact: {
            uz: "1572-yilda bu turkumda yulduz shu qadar yorqin yondiki, uni kunduzi ham ko'rish mumkin edi. Bu o'lib borayotgan yulduzning portlashi — supernova edi. Tixo Brage uni teleskopsiz kuzatgan, bugun esa o'sha joyda teleskop portlashning izini — gaz bulutini ko'rsatadi.",
            ru: "В 1572 году в этом созвездии вспыхнула звезда так ярко, что её было видно днём. Это была сверхновая — взрыв умирающей звезды. Тихо Браге наблюдал её без телескопа, а сегодня в этом месте телескоп показывает остаток взрыва — облако газа.",
            en: "In 1572, a star flared up in this constellation so brightly that it was visible during the day. It was a supernova — the explosion of a dying star. Tycho Brahe observed it without a telescope; today, a telescope shows the remnant of that explosion — a cloud of gas."
        },
        stars: [{x:-3, y:2}, {x:-1.5, y:-1}, {x:0, y:0.5}, {x:1.5, y:-1}, {x:3, y:2}]
    },
    {
        // LEVEL 4
        name: {
            uz: "SEFEY",
            ru: "ЦЕФЕЙ",
            en: "CEPHEUS"
        },
        desc: {
            uz: "Uy tomi shaklidagi qirol yulduz turkumi.",
            ru: "Созвездие в форме домика.",
            en: "A constellation shaped like a house."
        },
        funFact: {
            uz: "Bu turkumda δ Sefey yulduzi joylashgan — u har 5 kunda bir yorqinroq, bir xiraroq bo'lib pulslanadi. Bunday yulduzlar sefeidlar deb ataladi va astronomlarga galaktikalargacha bo'lgan masofani o'lchashga yordam beradi. Teleskopda pulsatsiya yorqinlikning o'zgarishi bo'yicha ko'rinadi.",
            ru: "В этом созвездии находится звезда δ Цефея — она пульсирует, то ярче, то тусклее, каждые 5 дней. Такие звёзды называются цефеидами и помогают астрономам измерять расстояния до галактик. В телескоп пульсацию видно по изменению яркости.",
            en: "In this constellation lives the star δ Cephei — it pulsates, growing brighter and dimmer every 5 days. Such stars are called Cepheids and help astronomers measure distances to galaxies. Through a telescope, the pulsation is visible as a change in brightness."
        },
        stars: [{x:-2, y:-2}, {x:2, y:-2}, {x:2, y:1}, {x:0, y:3}, {x:-2, y:1}]
    },
    {
        // LEVEL 5
        name: {
            uz: "AJDAR",
            ru: "ДРАКОН",
            en: "DRACO"
        },
        desc: {
            uz: "Shimoliy qutb atrofida aylanuvchi uzun ajdar.",
            ru: "Длинный дракон вокруг Северного полюса.",
            en: "A long dragon coiled around the North Pole."
        },
        funFact: {
            uz: "Ajdarning dumida Mushuk Ko'zi tumanligi yashiringan — bu o'z qobig'ini tashlab yuborgan yulduz, endi u markazida ko'zi bor yorqin halqaga o'xshaydi. Oddiy ko'z bilan uni umuman ko'rib bo'lmaydi. Uni Uilyam Gershel 1786-yilda teleskop orqali kashf etgan.",
            ru: "В хвосте Дракона прячется туманность Кошачий Глаз — это звезда, которая сбросила свою оболочку и теперь похожа на светящееся кольцо с глазом в центре. Невооружённым глазом её не видно совсем. Открыл её Уильям Гершель в 1786 году в телескоп.",
            en: "In the tail of Draco hides the Cat's Eye Nebula — a star that shed its outer shell and now looks like a glowing ring with an eye at its centre. The naked eye can't see it at all. William Herschel discovered it in 1786 with a telescope."
        },
        stars: [{x:-4, y:-1}, {x:-2, y:0}, {x:0, y:-2}, {x:2, y:-1}, {x:3, y:1}, {x:4, y:3}, {x:2, y:4}]
    },
    {
        // LEVEL 6
        name: {
            uz: "OQQUSH",
            ru: "ЛЕБЕДЬ",
            en: "CYGNUS"
        },
        desc: {
            uz: "Somon Yo'lida uchayotgan qush (Shimoliy Xoch).",
            ru: "Лебедь, летящий по Млечному Пути (Северный Крест).",
            en: "A swan flying along the Milky Way (Northern Cross)."
        },
        funFact: {
            uz: "Oqqushning tumshug'i — Albireo yulduzi. Oddiy ko'z bilan u bitta bo'lib ko'rinadi, lekin hatto eng oddiy teleskopda ham ikkita ekani va ular turli rangda ekani ko'rinadi: biri tilla rang, ikkinchisi havorang. Osmondagi eng chiroyli qo'sh yulduzlardan biri.",
            ru: "Клюв Лебедя — это звезда Альбирео. Невооружённым глазом она одна, но даже в самый простой телескоп видно, что их две, и они разного цвета: одна золотая, другая голубая. Одна из самых красивых двойных звёзд на небе.",
            en: "The beak of the Swan is the star Albireo. To the naked eye it appears as one star, but even through the simplest telescope you can see there are two, and they are different colours: one golden, one blue. One of the most beautiful double stars in the sky."
        },
        stars: [{x:0, y:3}, {x:0, y:1}, {x:0, y:-1}, {x:0, y:-3}, {x:-2, y:1}, {x:2, y:1}]
    },
    {
        // LEVEL 7
        name: {
            uz: "LIRA",
            ru: "ЛИРА",
            en: "LYRA"
        },
        desc: {
            uz: "Vega yulduzi va kichik parallelogram.",
            ru: "Звезда Вега и маленький параллелограмм.",
            en: "The star Vega and a small parallelogram."
        },
        funFact: {
            uz: "Lira turkumidagi Vega yulduzi — osmondagi yorqinligi bo'yicha beshinchi. Agar Vega va uning yonidagi yulduz orasiga teleskopni qaratsang, Halqa tumanligini ko'rasan — bu qobig'ini tashlagan yulduzning izi. Yulduzning o'zi kichik va issiq bo'lib qolgan, gaz halqasi tarqalmoqda.",
            ru: "Звезда Вега в Лире — пятая по яркости на небе. Если навести телескоп между Вегой и соседней звездой, можно увидеть Кольцевую туманность — то, что осталось от звезды, которая сбросила оболочку. Сама звезда стала маленькой и горячей, кольцо газа разлетается.",
            en: "Vega in Lyra is the fifth-brightest star in the sky. Point a telescope between Vega and its neighbour, and you'll see the Ring Nebula — what's left of a star that shed its outer shell. The star itself has become small and hot; the ring of gas is drifting away."
        },
        stars: [{x:0, y:3}, {x:-1, y:1}, {x:1, y:1}, {x:1, y:-1}, {x:-1, y:-1}]
    },
    {
        // LEVEL 8
        name: {
            uz: "BURGUT",
            ru: "ОРЁЛ",
            en: "AQUILA"
        },
        desc: {
            uz: "Altair yulduzi joylashgan burgut.",
            ru: "Орёл с яркой звездой Альтаир.",
            en: "An eagle with the bright star Altair."
        },
        funFact: {
            uz: "Altair — bizga eng yaqin yorqin yulduzlardan biri: bor-yo'g'i 17 yorug'lik yili. Katta teleskopda uning yassilanganini ko'rish mumkin — u shu qadar tez aylanadiki, regbi to'piga o'xshab cho'zilgan. Bir aylanishni 9 soatda bajaradi, Quyoshimiz esa 27 kunda.",
            ru: "Альтаир — одна из самых близких к нам ярких звёзд: всего 17 световых лет. В большой телескоп видно, что она сплющена — вращается так быстро, что вытянулась как мяч для регби. Один оборот делает за 9 часов, наше Солнце — за 27 дней.",
            en: "Altair is one of the closest bright stars to us — just 17 light-years away. Through a large telescope you can see that it's flattened: it spins so fast it has stretched into a rugby-ball shape. It completes one rotation in 9 hours; our Sun takes 27 days."
        },
        stars: [{x:0, y:2}, {x:-1, y:0}, {x:1, y:0}, {x:0, y:-2}, {x:-3, y:-1}, {x:3, y:-1}]
    },
    {
        // LEVEL 9
        name: {
            uz: "DELFIN",
            ru: "ДЕЛЬФИН",
            en: "DELPHINUS"
        },
        desc: {
            uz: "Kichik va chiroyli delfin shakli.",
            ru: "Маленькое красивое созвездие в форме дельфина.",
            en: "A small, elegant dolphin shape."
        },
        funFact: {
            uz: "Delfin — eng kichik yulduz turkumlaridan biri, lekin uning yonida teleskop NGC 6934 sharsimon to'plamini ko'rsatadi — taxminan yuz ming yulduz sharga zichlangan. Oddiy ko'z bilan bu shunchaki bo'sh joy. Teleskopda esa miltillovchi yulduzlar buluti ko'rinadi.",
            ru: "Дельфин — одно из самых маленьких созвездий, но рядом с ним телескоп показывает шаровое скопление NGC 6934 — около ста тысяч звёзд, сжатых в шар. Невооружённым глазом это просто пустое место. В телескоп — мерцающее облако звёзд.",
            en: "Delphinus is one of the smallest constellations, but next to it a telescope reveals the globular cluster NGC 6934 — about a hundred thousand stars packed into a sphere. To the naked eye, it's just empty space. Through a telescope, a shimmering cloud of stars."
        },
        stars: [{x:-1, y:1}, {x:1, y:1}, {x:1, y:-1}, {x:-1, y:-1}, {x:-2, y:-2}]
    },
    {
        // LEVEL 10
        name: {
            uz: "PEGAS",
            ru: "ПЕГАС",
            en: "PEGASUS"
        },
        desc: {
            uz: "Katta kvadrat shaklidagi qanotli ot.",
            ru: "Крылатый конь — Большой Квадрат.",
            en: "The winged horse — the Great Square."
        },
        funFact: {
            uz: "Pegasda teleskop M15 sharsimon to'plamini ko'rsatadi — u shu qadar uzoqdaki, undan kelayotgan nur biz tomon 33 ming yil uchadi. Uni okulyarda ko'rganingda, sen odamlar hali g'or devorlariga mamontlarni chizib yurgan paytda tug'ilgan nurni ko'rasan.",
            ru: "В Пегасе телескоп показывает шаровое скопление M15 — оно так далеко, что свет от него летит до нас 33 тысячи лет. Когда ты видишь его в окуляр, ты видишь свет, который родился, когда люди ещё рисовали мамонтов на стенах пещер.",
            en: "In Pegasus, a telescope reveals the globular cluster M15 — so distant that its light takes 33,000 years to reach us. When you see it in the eyepiece, you're seeing light that was born when humans were still drawing mammoths on cave walls."
        },
        stars: [{x:-2, y:2}, {x:2, y:2}, {x:2, y:-2}, {x:-2, y:-2}, {x:4, y:3}, {x:5, y:1}]
    }
];

// ========================================
// LEVEL GENERATION — 10 levels, fixed order
// 8-step mode cycle (truncated to 10):
//   1 classic, 2 shape, 3 classic, 4 trace,
//   5 classic, 6 brightness, 7 classic, 8 odd_one,
//   9 classic, 10 shape
// Each mechanic appears at least once; classic dominates as the baseline.
// ========================================

let LEVELS = [];

function generateFixedLevels() {
    LEVELS = [];

    ZIJ_DATA.forEach((data, index) => {
        let mode;
        const modIndex = index % 8;

        switch (modIndex) {
            case 0: mode = 'classic'; break;
            case 1: mode = 'shape'; break;
            case 2: mode = 'classic'; break;
            case 3: mode = 'trace'; break;
            case 4: mode = 'classic'; break;
            case 5: mode = 'brightness'; break;
            case 6: mode = 'classic'; break;
            case 7: mode = 'odd_one'; break;
            default: mode = 'classic';
        }

        LEVELS.push({
            name: data.name,
            desc: data.desc,
            funFact: data.funFact,
            stars: data.stars,
            pos: { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 60, z: -50 },
            mode: mode
        });
    });
}
