var assert = require('chai').assert;
var index = require('../index.js');

describe('Music', function() {
    // Music.noteNameToNoteNumber(A4); // 69
    it('noteNameToNoteNumber returns midi note equivalent of note name', function() {
        var noteData = index.noteNameToNoteNumber('A4');
        assert.equal(noteData, 69);
    });

    // Music.noteNameToFrequency(A4); // 440
    it('noteNameToFrequency returns note frequency equivalent of note name', function() {
        var noteData = index.noteNameToFrequency('A4');
        assert.equal(noteData, 440);
    });

    // Music.noteNumberToFrequency(69); // 440
    it('noteNumberToFrequency returns note frequency equivalent of midi note number', function() {
        var noteData = index.noteNumberToFrequency(69);
        assert.equal(noteData, 440);
    });

    // Music.noteNumberToName(69); // A4
    it('noteNumberToName returns note name equivalent of midi note number', function() {
        var noteData = index.noteNumberToName(69);
        assert.equal(noteData, 'A4');
    });

    // Music.frequencyToNoteNumber(440); // 69
    it('frequencyToNoteNumber returns midi note equivalent of note frequency', function() {
        var noteData = index.frequencyToNoteNumber(440);
        assert.equal(noteData, 69);
    });

    // Music.frequencyToNoteName(440); // A4
    it('frequencyToNoteName returns note name equivalent of note frequency', function() {
        var noteData = index.frequencyToNoteName(440);
        assert.equal(noteData, 'A4');
    });
});
