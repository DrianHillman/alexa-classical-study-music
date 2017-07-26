'use strict';

// Audio Source - The Open Goldberg Variations by Kimiko Ishizaka (J. S. Bach, BWV 988) : http://www.opengoldbergvariations.org/
var audioData = [
    {
        'title' : 'Aria - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Aria.mp3'
    },
    {
        'title' : 'Variatio 25 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-25.mp3'
    },
    {
        'title' : 'Variatio 19 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-19.mp3'
    },
    {
        'title' : 'Variatio 1 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-01.mp3'
    },
    {
        'title' : 'Variatio 2 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-02.mp3'
    },
    {
        'title' : 'Variatio 3 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-03.mp3'
    },
    {
        'title' : 'Variatio 4 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-04.mp3'
    },
    {
        'title' : 'Variatio 5 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-05.mp3'
    },
    {
        'title' : 'Variatio 6 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-06.mp3'
    },
    {
        'title' : 'Variatio 7 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-07.mp3'
    },
    {
        'title' : 'Variatio 8 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-08.mp3'
    },
    {
        'title' : 'Variatio 9 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-09.mp3'
    },
    {
        'title' : 'Variatio 10 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-10.mp3'
    },
    {
        'title' : 'Variatio 11 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-11.mp3'
    },
    {
        'title' : 'Variatio 12 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-12.mp3'
    },
    {
        'title' : 'Variatio 13 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-13.mp3'
    },
    {
        'title' : 'Variatio 14 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-14.mp3'
    },
    {
        'title' : 'Variatio 15 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-15.mp3'
    },
    {
        'title' : 'Variatio 16 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-16.mp3'
    },
    {
        'title' : 'Variatio 17 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-17.mp3'
    },
    {
        'title' : 'Variatio 18 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-18.mp3'
    },
    {
        'title' : 'Variatio 20 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-20.mp3'
    },
    {
        'title' : 'Variatio 21 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-21.mp3'
    },
    {
        'title' : 'Variatio 22 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-22.mp3'
    },
    {
        'title' : 'Variatio 23 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-23.mp3'
    },
    {
        'title' : 'Variatio 24 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-24.mp3'
    },
    {
        'title' : 'Variatio 26 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-26.mp3'
    },
    {
        'title' : 'Variatio 27/28 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-27-28.mp3'
    },
    {
        'title' : 'Variatio 29 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-29.mp3'
    },
    {
        'title' : 'Variatio 30 - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-30.mp3'
    },
    {
        'title' : 'Aria Fine - by Bach',
        'url' : 'https://s3.amazonaws.com/alexa-classical-study-music/Bach-Open-Goldberg-Variations-Variatio-31-AriaFine.mp3'
    }
];

module.exports = audioData;