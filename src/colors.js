const colors = [
    {title: 'Black', color: 'rgb(0,0,0)'},
    {
        title: 'rgb(68,68,68)',
        color: 'rgb(68,68,68)',
    },
    {
        title: 'rgb(102,102,102)',
        color: 'rgb(102,102,102)',
    },
    {
        title: 'rgb(153,153,153)',
        color: 'rgb(153,153,153)',
    },
    {
        title: 'rgb(204,204,204)',
        color: 'rgb(204,204,204)',
    },
    {
        title: 'rgb(238,238,238)',
        color: 'rgb(238,238,238)',
    },
    {
        title: 'rgb(243,243,243)',
        color: 'rgb(243,243,243)',
    },
    {
        title: 'White',
        color: 'rgb(255,255,255)',
    },
    {
        title: 'Red',
        color: 'rgb(255,0,0)',
    },
    {
        title: 'Orange',
        color: 'rgb(255,153,0)',
    },
    {
        title: 'Yellow',
        color: 'rgb(255,255,0)',
    },
    {
        title: 'Green',
        color: 'rgb(0,255,0)',
    },
    {
        title: 'Cyan',
        color: 'rgb(0,255,255)',
    },
    {
        title: 'Blue',
        color: 'rgb(0,0,255)',
    },
    {
        title: 'Purple',
        color: 'rgb(153,0,255)',
    },
    {
        title: 'Magenta',
        color: 'rgb(255,0,255)',
    },
    {
        title: 'rgb(244,204,204)',
        color: 'rgb(244,204,204)',
    },
    {
        title: 'rgb(252,229,205)',
        color: 'rgb(252,229,205)',
    },
    {
        title: 'rgb(255,242,204)',
        color: 'rgb(255,242,204)',
    },
    {title: 'rgb(217, 234, 211)', color: 'rgb(217, 234, 211)'},
    {title: 'rgb(208, 224, 227)', color: 'rgb(208, 224, 227)'},
    {title: 'rgb(207, 226, 243)', color: 'rgb(207, 226, 243)'},
    {title: 'rgb(217, 210, 233)', color: 'rgb(217, 210, 233)'},
    {title: 'rgb(234, 209, 220)', color: 'rgb(234, 209, 220)'},
    {title: 'rgb(234, 153, 153)', color: 'rgb(234, 153, 153)'},
    {title: 'rgb(249, 203, 156)', color: 'rgb(249, 203, 156)'},
    {title: 'rgb(255, 229, 153)', color: 'rgb(255, 229, 153)'},
    {title: 'rgb(182, 215, 168)', color: 'rgb(182, 215, 168)'},
    {title: 'rgb(162, 196, 201)', color: 'rgb(162, 196, 201)'},
    {title: 'rgb(159, 197, 232)', color: 'rgb(159, 197, 232)'},
    {title: 'rgb(180, 167, 214)', color: 'rgb(180, 167, 214)'},
    {title: 'rgb(213, 166, 189)', color: 'rgb(213, 166, 189)'},
    {title: 'rgb(224, 102, 102)', color: 'rgb(224, 102, 102)'},
    {title: 'rgb(246, 178, 107)', color: 'rgb(246, 178, 107)'},
    {title: 'rgb(255, 217, 102)', color: 'rgb(255, 217, 102)'},
    {title: 'rgb(147, 196, 125)', color: 'rgb(147, 196, 125)'},
    {title: 'rgb(118, 165, 175)', color: 'rgb(118, 165, 175)'},
    {title: 'rgb(111, 168, 220)', color: 'rgb(111, 168, 220)'},
    {title: 'rgb(142, 124, 195)', color: 'rgb(142, 124, 195)'},
    {title: 'rgb(194, 123, 160)', color: 'rgb(194, 123, 160)'},
    {title: 'rgb(204, 0, 0)', color: 'rgb(204, 0, 0)'},
    {title: 'rgb(230, 145, 56)', color: 'rgb(230, 145, 56)'},
    {title: 'rgb(241, 194, 50)', color: 'rgb(241, 194, 50)'},
    {title: 'rgb(106, 168, 79)', color: 'rgb(106, 168, 79)'},
    {title: 'rgb(69, 129, 142)', color: 'rgb(69, 129, 142)'},
    {title: 'rgb(61, 133, 198)', color: 'rgb(61, 133, 198)'},
    {title: 'rgb(103, 78, 167)', color: 'rgb(103, 78, 167)'},
    {title: 'rgb(166, 77, 121)', color: 'rgb(166, 77, 121)'},
    {title: 'rgb(153, 0, 0)', color: 'rgb(153, 0, 0)'},
    {title: 'rgb(180, 95, 6)', color: 'rgb(180, 95, 6)'},
    {title: 'rgb(191, 144, 0)', color: 'rgb(191, 144, 0)'},
    {title: 'rgb(56, 118, 29)', color: 'rgb(56, 118, 29)'},
    {title: 'rgb(19, 79, 92)', color: 'rgb(19, 79, 92)'},
    {title: 'rgb(11, 83, 148)', color: 'rgb(11, 83, 148)'},
    {title: 'rgb(53, 28, 117)', color: 'rgb(53, 28, 117)'},
    {title: 'rgb(116, 27, 71)', color: 'rgb(116, 27, 71)'},
    {title: 'rgb(102, 0, 0)', color: 'rgb(102, 0, 0)'},
    {title: 'rgb(120, 63, 4)', color: 'rgb(120, 63, 4)'},
    {title: 'rgb(127, 96, 0)', color: 'rgb(127, 96, 0)'},
    {title: 'rgb(39, 78, 19)', color: 'rgb(39, 78, 19)'},
    {title: 'rgb(12, 52, 61)', color: 'rgb(12, 52, 61)'},
    {title: 'rgb(7, 55, 99)', color: 'rgb(7, 55, 99)'},
    {title: 'rgb(32, 18, 77)', color: 'rgb(32, 18, 77)'},
    {title: 'rgb(76, 17, 48)', color: 'rgb(76, 17, 48)'}
];

export default {
    options: colors
}