/**
 * Browser entry. Combines scratchblocks.js and translations.json
 */

var scratchblocks = require('./../src/scratchblocks-browser');
var translations = require('./translations.json');

scratchblocks.loadLanguages(translations);

// for --standalone build
module.exports = scratchblocks;
