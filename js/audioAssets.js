'use strict';

// Audio Source - The Open Goldberg Variations by Kimiko Ishizaka (J. S. Bach, BWV 988) : http://www.opengoldbergvariations.org/
var audioData = [
    {
        'title' : 'Aria - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Aria.mp3'
    },
    {
        'title' : 'Variatio 25 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-25.mp3'
    },
    {
        'title' : 'Variatio 19 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-19.mp3'
    },
    {
        'title' : 'Variatio 1 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-1.mp3'
    },
    {
        'title' : 'Variatio 2 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-2.mp3'
    },
    {
        'title' : 'Variatio 3 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-3.mp3'
    },
    {
        'title' : 'Variatio 4 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-4.mp3'
    },
    {
        'title' : 'Variatio 5 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-5.mp3'
    },
    {
        'title' : 'Variatio 6 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-6.mp3'
    },
    {
        'title' : 'Variatio 7 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-7.mp3'
    },
    {
        'title' : 'Variatio 8 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-8.mp3'
    },
    {
        'title' : 'Variatio 9 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-9.mp3'
    },
    {
        'title' : 'Variatio 10 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-10.mp3'
    },
    {
        'title' : 'Variatio 11 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-11.mp3'
    },
    {
        'title' : 'Variatio 12 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-12.mp3'
    },
    {
        'title' : 'Variatio 13 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-13.mp3'
    },
    {
        'title' : 'Variatio 14 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-14.mp3'
    },
    {
        'title' : 'Variatio 15 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-15.mp3'
    },
    {
        'title' : 'Variatio 16 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-16.mp3'
    },
    {
        'title' : 'Variatio 17 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-17.mp3'
    },
    {
        'title' : 'Variatio 18 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-18.mp3'
    },
    {
        'title' : 'Variatio 20 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-20.mp3'
    },
    {
        'title' : 'Variatio 21 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-21.mp3'
    },
    {
        'title' : 'Variatio 22 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-22.mp3'
    },
    {
        'title' : 'Variatio 23 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-23.mp3'
    },
    {
        'title' : 'Variatio 24 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-24.mp3'
    },
    {
        'title' : 'Variatio 26 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-26.mp3'
    },
    {
        'title' : 'Variatio 27/28 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-27-28.mp3'
    },
    {
        'title' : 'Variatio 29 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-29.mp3'
    },
    {
        'title' : 'Variatio 30 - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-30.mp3'
    },
    {
        'title' : 'Aria Fine - J.S. Bach: Open Goldberg Variations',
        'url' : 'https://github.com/DrianHillman/alexa-classical-study-music/raw/master/mp3/Bach-Open-Goldberg-Variations-Variatio-31-AriaFine.mp3'
    }
];

module.exports = audioData;