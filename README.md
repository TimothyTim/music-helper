## Music Helper [![build status](https://travis-ci.org/TimothyTim/music-helper.svg)](https://travis-ci.org/TimothyTim/music-helper.js)

##### You can do the following conversions:
```
var Music = require('music-helper');

Music.noteNameToNoteNumber(A4); // 69
Music.noteNameToFrequency(A4); // 440
Music.noteNumberToFrequency(69); // 440
Music.noteNumberToName(69); // A4
Music.frequencyToNoteNumber(440); // 69
Music.frequencyToNoteName(440); // A4
```
